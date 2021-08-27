import React, {CSSProperties, useEffect, useState} from "react";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Button, Col, Container, Row} from "react-bootstrap";
import NoDataIndicator from "../../checkout-table/NoDataIndicator";
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import Actions from "./Actions";
import Price from "./Price";
import ProductImage from "./ProductImage";
import Id from "./Id";
import Category from "./Category";
import {colourStyles} from "../../../custom-styles/custom-selector-styles";
import Select, {components, ValueType} from "react-select";
import {BsSearch} from "react-icons/bs";
import {categoryOptions} from "../../../constants/categoryList";
import {QueryResult, useQuery} from "@apollo/client";
import {
  AdminCategoryOptionType,
  AdminProductTableListType,
  GetElectronicProducts,
  GetFoodProducts,
  GetFruitProducts,
  GetMeatProducts,
  GetPharmacyProducts,
  GetVegetableProducts,
  IProduct,
  IProducts
} from "../../../types/types";
import {GET_ELECTRONICS, GET_FOOD, GET_FRUITS, GET_MEAT, GET_PHARMACY, GET_VEGETABLES} from "../../../graphql/query";
import {processQueryData} from "../../../store/actions/ProductAction";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";
import {useHistory} from "react-router-dom";

const createTableList = (arr: IProducts[], variant: string): AdminProductTableListType[] => {
  if (!arr[0]) {
    return [];
  }
  const list = arr[0].productDetails.map<AdminProductTableListType>((product: IProduct) => {
    return {
      id: <Id id={product.product.id}/>,
      item: <ProductImage image={product.product.image} tokenKey={product.product.key} id={product.product.id}/>,
      name: product.product.name,
      category: <Category category={arr[0].category} variant={variant}/>,
      currentPrice: <Price price={product.product.currentPrice}/>,
      oldPrice: <Price price={product.product.oldPrice}/>,
      actions: <Actions tokenKey={product.product.key} category={arr[0].category} productId={product.product.id}/>
    }
  });
  return list;
}

const ProductTable: React.FC = () => {
  const [filterState, setFilterState] = useState<boolean>(false);
  const [tableList, setTableList] = useState<AdminProductTableListType[]>([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const electronicQuery: QueryResult = useQuery<GetElectronicProducts>(GET_ELECTRONICS);
  const foodQuery: QueryResult = useQuery<GetFoodProducts>(GET_FOOD);
  const fruitQuery: QueryResult = useQuery<GetFruitProducts>(GET_FRUITS);
  const meatQuery: QueryResult = useQuery<GetMeatProducts>(GET_MEAT);
  const pharmacyQuery: QueryResult = useQuery<GetPharmacyProducts>(GET_PHARMACY);
  const vegetableQuery: QueryResult = useQuery<GetVegetableProducts>(GET_VEGETABLES);
  const electronicProductList: IProducts[] = useSelector((state: RootState) => state.productReducer.electronic);
  const foodProductList: IProducts[] = useSelector((state: RootState) => state.productReducer.food);
  const meatProductList: IProducts[] = useSelector((state: RootState) => state.productReducer.meat);
  const fruitProductList: IProducts[] = useSelector((state: RootState) => state.productReducer.fruits);
  const pharmacyProductList: IProducts[] = useSelector((state: RootState) => state.productReducer.pharmacy);
  const vegetableProductList: IProducts[] = useSelector((state: RootState) => state.productReducer.vegetables);
  const electronicTableList = createTableList(electronicProductList, 'danger');
  const foodTableList = createTableList(foodProductList, 'primary');
  const fruitsTableList = createTableList(fruitProductList, 'success');
  const vegetableTableList = createTableList(vegetableProductList, 'warning');
  const meatTableList = createTableList(meatProductList, 'info');
  const pharmacyTableList = createTableList(pharmacyProductList, 'dark');

  useEffect(() => {
    setTableList([...foodTableList, ...vegetableTableList, ...fruitsTableList, ...pharmacyTableList,
      ...electronicTableList, ...meatTableList]);
  }, [foodProductList, meatProductList, electronicProductList, vegetableProductList, pharmacyProductList,
    fruitProductList]);

  useEffect(() => {
    if (!electronicQuery.data) {
      return;
    }
    dispatch(processQueryData(electronicQuery.data.getElectronicProducts));
  }, [electronicQuery.data]);

  useEffect(() => {
    if (!foodQuery.data) {
      return;
    }
    dispatch(processQueryData(foodQuery.data.getFoodProducts));
  }, [foodQuery.data]);

  useEffect(() => {
    if (!fruitQuery.data) {
      return;
    }
    dispatch(processQueryData(fruitQuery.data.getFruitProducts));
  }, [fruitQuery.data]);

  useEffect(() => {
    if (!meatQuery.data) {
      return;
    }
    dispatch(processQueryData(meatQuery.data.getMeatProducts));
  }, [meatQuery.data]);

  useEffect(() => {
    if (!pharmacyQuery.data) {
      return;
    }
    dispatch(processQueryData(pharmacyQuery.data.getPharmacyProducts));
  }, [pharmacyQuery.data]);

  useEffect(() => {
    if (!vegetableQuery.data) {
      return;
    }
    dispatch(processQueryData(vegetableQuery.data.getVegetableProducts));
  }, [vegetableQuery.data]);

  const handleOnSelect = (option: ValueType<AdminCategoryOptionType, true>) => {
    const list: AdminProductTableListType[] = [];
    if (option.length === 0) {
      list.push(...electronicTableList, ...meatTableList, ...vegetableTableList, ...fruitsTableList,
          ...pharmacyTableList, ...foodTableList);
      setTableList(list);
    }
    option.map((value: any) => {
      if (value.label === 'Meat') {
        list.push(...meatTableList);
      }
      if (value.label === 'Vegetables') {
        list.push(...vegetableTableList);
      }
      if (value.label === 'Fruits') {
        list.push(...fruitsTableList);
      }
      if (value.label === 'Electronics') {
        list.push(...electronicTableList);
      }
      if (value.label === 'Pharmacy') {
        list.push(...pharmacyTableList);
      }
      if (value.label === 'Foods') {
        list.push(...foodTableList);
      }
    });
    setTableList(list);
  }

  const handleOnClickCreate = () => {
    history.push('/my-account/create-product');
  }

  const columns = [
    {dataField: 'id', text: 'Id', headerAlign: 'center', align: 'center'},
    {dataField: 'item', text: 'Item', headerAlign: 'center', align: 'center'},
    {
      dataField: 'name',
      text: 'Name 🔎',
      sort: true,
      filter: textFilter({
        style: {
          display: filterState ? 'block' : 'none',
        }
      }),
      headerAlign: 'center',
      align: 'center',
      headerStyle: {
        cursor: "pointer"
      },
      headerEvents: {
        onClick: (e: any) => setFilterState(!filterState)
      }
    },
    {dataField: 'category', text: 'Category', headerAlign: 'center', align: 'center'},
    {dataField: 'currentPrice', text: 'Current Price', headerAlign: 'center', align: 'center'},
    {dataField: 'oldPrice', text: 'Old Price', headerAlign: 'center', align: 'center'},
    {dataField: 'actions', text: 'Actions', headerAlign: 'center', align: 'center'}
  ];

  const customTotal = (from: number, to: number, size: number) => (
      <span className="react-bootstrap-table-pagination-total text-secondary">
        Showing {from} to {to} of {size} Results
      </span>
  );

  /**
   * when no data in the table render empty cart image and text
   */
  const noDataIndication = (): JSX.Element => {
    return <NoDataIndicator/>
  }

  const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
          <BsSearch/>
        </components.DropdownIndicator>
    );
  };

  // @ts-ignore
  const pageButtonRenderer = ({page, active, disabled, title, onPageChange}) => {
    const handleClick = (e: any) => {
      e.preventDefault();
      onPageChange(page);
    };
    const activeStyle: CSSProperties = {}
    if (active) {
      activeStyle.backgroundColor = "#00a824";
      activeStyle.color = 'white';
    } else {
      activeStyle.backgroundColor = 'white';
      activeStyle.color = 'black';
    }
    if (typeof page === 'string') {
      activeStyle.backgroundColor = 'white';
      activeStyle.color = 'black';
    }
    return (
        <li className="page-item">
          <a href="#" onClick={handleClick} style={activeStyle}>{page}</a>
        </li>
    );
  };

  const options: PaginationOptions = {
    paginationSize: 4,
    pageStartIndex: 1,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    pageButtonRenderer,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: tableList.length
    }]
  };

  return (
      <Container className='product-admin-table p-md-0'>
        <Row className='mt-4'>
          <Col xs={12}>
            <h3>Product Table</h3>
          </Col>
        </Row>
        <Row className='search-bar mt-3 mb-4'>
          <Col xs={8} md={8} lg={6} xl={5}>
            <Select
                placeholder='Search Category...'
                options={categoryOptions}
                components={{DropdownIndicator}}
                styles={colourStyles}
                isMulti={true}
                onChange={handleOnSelect}
            />
          </Col>
          <Col xs={4}>
            <Button variant={"success"} onClick={handleOnClickCreate}>Create</Button>
          </Col>
        </Row>
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={tableList}
            columns={columns}
            wrapperClasses='table-responsive overflow-x'
            classes='custom-table item-table'
            rowClasses='text-wrap'
            headerClasses='header-class'
            pagination={paginationFactory(options)}
            defaultSortDirection="asc"
            noDataIndication={noDataIndication}
            filter={filterFactory()}
        />
      </Container>
  )
}

export default ProductTable;
