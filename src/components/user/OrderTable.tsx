import React, {CSSProperties, useEffect, useState} from "react";
import {OrderListType, OrderStatusType, QueryOrderType} from "../../types/types";
import Select, {components, ValueType} from "react-select";
import filterFactory from "react-bootstrap-table2-filter";
import NoDataIndicator from "../checkout-table/NoDataIndicator";
import {BsSearch} from "react-icons/bs";
import BootstrapTable, {ExpandRowProps, PageButtonRendererOptions, PaginationOptions} from "react-bootstrap-table-next";
import {Col, Container, Row} from "react-bootstrap";
import {orderStatusOptions} from "../../constants/categoryList";
import {colourStyles} from "../../custom-styles/custom-selector-styles";
import paginationFactory from "react-bootstrap-table2-paginator";
import Id from "../admin/product-table/Id";
import Category from "../admin/product-table/Category";
import {QueryResult, useQuery} from "@apollo/client";
import {GET_USER_COMPLETE_ORDERS, GET_USER_PENDING_ORDERS} from "../../graphql/query";
import Actions from "./Actions";
import OrderDetails from "./OrderDetails";

const createOrderTableList = (orders: QueryOrderType[]): OrderListType[] => {
  const list: OrderListType[] = orders.map((order: QueryOrderType) => {
    return {
      orderId: <Id id={order._id}/>,
      date: order.date,
      status: <Category category={order.status ? 'Completed' : 'Pending'}
                        variant={order.status ? 'success' : 'danger'}/>,
      total: order.sub_total.toString(),
      actions: <Actions orderStatus={order.status}/>,
      order: order
    }
  });
  return list;
}

const OrderTable: React.FC = () => {
  const [orderList, setOrderList] = useState<OrderListType[] | null>(null);
  const [allPendingOrderTableList, setAllPendingOrderTableList] = useState<OrderListType[]>([]);
  const [allCompletedTableList, setAllCompletedTableList] = useState<OrderListType[]>([]);
  const allPendingOrders: QueryResult = useQuery(GET_USER_PENDING_ORDERS);
  const allCompletedOrders: QueryResult = useQuery(GET_USER_COMPLETE_ORDERS);

  useEffect(() => {
    if (!allPendingOrders.data || !allCompletedOrders.data) {
      return;
    }
    setAllPendingOrderTableList(createOrderTableList(allPendingOrders.data.getUserPendingOrders));
    setAllCompletedTableList(createOrderTableList(allCompletedOrders.data.getUserCompletedOrders));
  }, [allPendingOrders, allCompletedOrders]);

  useEffect(() => {
    const list = [];
    if (allCompletedTableList.length !== 0) {
      list.push(...allCompletedTableList);
    }
    if (allPendingOrderTableList.length !== 0) {
      list.push(...allPendingOrderTableList);
    }
    setOrderList(list);
  }, [allPendingOrderTableList, allCompletedTableList]);

  const columns = [
    {dataField: 'orderId', text: 'Order Id', headerAlign: 'center', align: 'center'},
    {dataField: 'date', text: 'Date', headerAlign: 'center', align: 'center'},
    {dataField: 'status', text: 'Status ', headerAlign: 'center', align: 'center'},
    {dataField: 'total', text: 'total', headerAlign: 'center', align: 'center'},
    {dataField: 'actions', text: 'Actions', headerAlign: 'center', align: 'center'}
  ];

  const handleOnSelect = (option: ValueType<OrderStatusType, true>) => {
    const list: OrderListType[] = [];
    if (option.length === 0) {
      list.push(...allPendingOrderTableList, ...allCompletedTableList);
    }
    option.map((value: OrderStatusType) => {
      if (value.value === 'Pending') {
        list.push(...allPendingOrderTableList);
      }
      if (value.value === 'Completed') {
        list.push(...allCompletedTableList);
      }
    });
    setOrderList(list);
  }

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

  const pageButtonRenderer = ({page, active, disabled, title, onPageChange}: PageButtonRendererOptions) => {
    const handleClick = (e: any) => {
      e.preventDefault();
      // @ts-ignore
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

  const expandRow: ExpandRowProps<any> = {
    onlyOneExpanding: true,
    className: 'expanding-foo',
    renderer: (row: any) => (
        <OrderDetails order={row.order}/>
    )
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
      text: 'All', value: orderList ? orderList.length : 1
    }]
  };

  return (
      <Container className='order-table p-md-0'>
        <Row className='mt-4'>
          <Col xs={12}>
            <h3>Order Table</h3>
          </Col>
        </Row>
        <Row className='search-bar mt-3 mb-4'>
          <Col xs={8} md={8} lg={6} xl={5}>
            <Select
                defaultValue={[orderStatusOptions[0], orderStatusOptions[1]]}
                placeholder='Search Status...'
                options={orderStatusOptions}
                components={{DropdownIndicator}}
                styles={colourStyles}
                isMulti={true}
                onChange={handleOnSelect}
            />
          </Col>
        </Row>
        <BootstrapTable
            bootstrap4
            keyField='orderId'
            data={orderList ? orderList : []}
            columns={columns}
            wrapperClasses='table-responsive overflow-x'
            classes='custom-table item-table'
            rowClasses='text-wrap'
            headerClasses='header-class'
            pagination={paginationFactory(options)}
            defaultSortDirection="asc"
            noDataIndication={noDataIndication}
            filter={filterFactory()}
            expandRow={expandRow}
        />
      </Container>
  )
}


export default OrderTable;
