import React from "react";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Quantity from "./Quantity";
import TrashIcon from "./TrashIcon";
import ItemImage from "./ItemImage";
import UnitPrice from "./UnitPrice";
import {dataProductType, ICheckoutProduct} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";

type CartTableProps = {
  setTotal: (total: number) => void
}

const Table: React.FC<CartTableProps> = (props) => {
  const checkedProducts: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.cartList);
  const {setTotal} = props;
  let total: number = 0;

  /**
   * create table data for the products
   */
  const products: dataProductType[] = [];
  checkedProducts.map((checkedProduct: ICheckoutProduct, index: number) => {
    if (checkedProduct.quantity) {
      total += checkedProduct.product.currentPrice * checkedProduct.quantity;
      products.push({
        id: index + 1,
        item: <ItemImage image={checkedProduct.product.image}/>,
        name: checkedProduct.product.name,
        qty: <Quantity quantity={checkedProduct.quantity} index={index}/>,
        unitPrice: <UnitPrice price={checkedProduct.product.currentPrice}/>,
        amount: <UnitPrice price={checkedProduct.product.currentPrice * checkedProduct.quantity}/>,
        deleteIcon: <TrashIcon index={index} id={checkedProduct.product.id}/>
      })
    }
  });

  setTotal(total);

  const columns = [
    {dataField: 'id', text: '#'},
    {dataField: 'item', text: 'Item'},
    {dataField: 'name', text: 'Name', sort: true},
    {dataField: 'qty', text: 'Qty'},
    {dataField: 'unitPrice', text: 'UnitPrice'},
    {dataField: 'amount', text: 'Amount'},
    {dataField: 'deleteIcon', text: ''}
  ];

  const customTotal = (from: number, to: number, size: number) => (
      <span className="react-bootstrap-table-pagination-total text-secondary">
        Showing {from} to {to} of {size} Results
      </span>
  );

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
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: products.length
    }]
  };

  return (
      <BootstrapTable
          bootstrap4
          keyField='id'
          data={products}
          columns={columns}
          wrapperClasses='table-responsive overflow-x'
          classes='custom-table item-table'
          rowClasses='text-wrap'
          headerClasses='header-class'
          pagination={paginationFactory(options)}
          defaultSortDirection="asc"
      />
  )
}

export default Table;