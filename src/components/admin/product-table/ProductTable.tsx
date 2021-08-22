import React, {CSSProperties} from "react";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Container} from "react-bootstrap";
import NoDataIndicator from "../../checkout-table/NoDataIndicator";
import tempImage from "../../../assets/images/log-in/logInCart.png";
import Actions from "./Actions";
import Price from "./Price";
import ProductImage from "./ProductImage";
import Name from "./Name";
import Id from "./Id";
import Category from "./Category";

type CartTableProps = {}

const ProductTable: React.FC<CartTableProps> = (props) => {

  const tempProductList = [
    {
      id: <Id id={"1c56f54a-31ba-40d2-b33d-6f1999de1e86"}/>,
      item: <ProductImage src={tempImage}/>,
      name: <Name name={'xxxxxxxxxxxx'}/>,
      category: <Category category={'Vegetables'} variant={'danger'}/>,
      currentPrice: <Price/>,
      oldPrice: <Price/>,
      actions: <Actions/>
    },
    {
      id: <Id id={"1c56f54a-31ba-40d2-b33d-6f1999de1e86"}/>,
      item: <ProductImage src={tempImage}/>,
      name: <Name name={'xxxxxxxxxxxx'}/>,
      category: <Category category={'Vegetables'} variant={'danger'}/>,
      currentPrice: <Price/>,
      oldPrice: <Price/>,
      actions: <Actions/>
    },
    {
      id: <Id id={"1c56f54a-31ba-40d2-b33d-6f1999de1e86"}/>,
      item: <ProductImage src={tempImage}/>,
      name: <Name name={'xxxxxxxxxxxx'}/>,
      category: <Category category={'Foods'} variant={'danger'}/>,
      currentPrice: <Price/>,
      oldPrice: <Price/>,
      actions: <Actions/>
    },
  ]

  const columns = [
    {dataField: 'id', text: 'Id'},
    {dataField: 'item', text: 'Item'},
    {dataField: 'name', text: 'Name', sort: true},
    {dataField: 'category', text: 'Category'},
    {dataField: 'currentPrice', text: 'Current Price'},
    {dataField: 'oldPrice', text: 'Old Price'},
    {dataField: 'actions', text: 'Actions'}
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
      <Container className='product-admin-table'>
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
        />
      </Container>
  )
}

export default ProductTable;
