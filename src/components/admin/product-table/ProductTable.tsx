import React, {CSSProperties, useState} from "react";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Button, Col, Container, Row} from "react-bootstrap";
import NoDataIndicator from "../../checkout-table/NoDataIndicator";
import tempImage from "../../../assets/images/log-in/logInCart.png";
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import Actions from "./Actions";
import Price from "./Price";
import ProductImage from "./ProductImage";
import Id from "./Id";
import Category from "./Category";
import {colourStyles} from "../../../custom-styles/custom-selector-styles";
import Select, {components} from "react-select";
import {BsSearch} from "react-icons/bs";
import {categoryOptions} from "../../../constants/categoryList";

type CartTableProps = {}

const ProductTable: React.FC<CartTableProps> = (props) => {
  const [filterState, setFilterState] = useState<boolean>(false);

  const tempProductList = [
    {
      id: <Id id={"1c56f54a-31ba-40d2-b33d-6f1999de1e86"}/>,
      item: <ProductImage src={tempImage}/>,
      name: 'good',
      category: <Category category={'Vegetables'} variant={'danger'}/>,
      currentPrice: <Price/>,
      oldPrice: <Price/>,
      actions: <Actions/>
    },
    {
      id: <Id id={"1c56f54a-31ba-40d2-b33d-6f1999de1e86"}/>,
      item: <ProductImage src={tempImage}/>,
      name: 'good',
      category: <Category category={'Vegetables'} variant={'danger'}/>,
      currentPrice: <Price/>,
      oldPrice: <Price/>,
      actions: <Actions/>
    },
    {
      id: <Id id={"1c56f54a-31ba-40d2-b33d-6f1999de1e86"}/>,
      item: <ProductImage src={tempImage}/>,
      name: 'as',
      category: <Category category={'Foods'} variant={'danger'}/>,
      currentPrice: <Price/>,
      oldPrice: <Price/>,
      actions: <Actions/>
    },
  ]

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
      text: 'All', value: tempProductList.length
    }]
  };

  return (
      <Container className='product-admin-table p-0'>
        <Row className='mt-4'>
          <Col xs={12}>
            <h3>Product Table</h3>
          </Col>
        </Row>
        <Row className='search-bar mt-3 mb-4'>
          <Col xs={8} md={8} lg={6} xl={5}>
            <Select
                placeholder='Search...'
                options={categoryOptions}
                components={{DropdownIndicator}}
                styles={colourStyles}
                isMulti={true}
            />
          </Col>
          <Col xs={4}>
            <Button variant={"success"}>Create</Button>
          </Col>
        </Row>
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={tempProductList}
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
