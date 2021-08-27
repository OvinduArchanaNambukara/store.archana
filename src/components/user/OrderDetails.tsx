import React from "react";
import {Container, Jumbotron, Table} from "react-bootstrap";
import {QueryOrderType} from "../../types/types";

type OrderDetails = {
  order: QueryOrderType
}

const OrderDetails: React.FC<OrderDetails> = (props) => {
  const {order} = props;

  return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <h3>Details</h3>
            <h6>User Id : {order?.user_id}</h6>
            <h6>Date : {order?.date}</h6>
            <h6>Discount : {order?.discount}</h6>
            <h6>Sub Total : {order?.sub_total}</h6>
            <h6>Payment Method : {order?.payment_method}</h6>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container>
            <h3>Delivery Details</h3>
            <h6>Full Name : {order?.delivery.full_name}</h6>
            <h6>Address : {order?.delivery.address}</h6>
            <h6>City : {order?.discount}</h6>
            <h6>Country : {order?.sub_total}</h6>
            <h6>Telephone Method : {order?.payment_method}</h6>
            <h6>Emails : {order?.payment_method}</h6>
            <h6>Postal Code : {order?.payment_method}</h6>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container>
            <h3>Shipping Details</h3>
            <h6>Full Name : {order?.delivery.full_name}</h6>
            <h6>Address : {order?.delivery.address}</h6>
            <h6>City : {order?.discount}</h6>
            <h6>Country : {order?.sub_total}</h6>
            <h6>Telephone Method : {order?.payment_method}</h6>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container>
            <h3>Instructions</h3>
            <h6>Full Name : {order?.delivery.full_name}</h6>
          </Container>
        </Jumbotron>
        <Table responsive={true} striped bordered>
          <thead>
          <tr>
            <th className='text-center'>Item</th>
            <th className='text-center'>Unit Price</th>
            <th className='text-center'>Qty</th>
            <th className='text-center'>Total</th>
          </tr>
          </thead>
          <tbody>
          {
            order?.order_list.map((value) => {
              return (
                  <tr>
                    <td className='text-center'>{value.name}</td>
                    <td className='text-center'>{value.unit_price}</td>
                    <td className='text-center'>{value.qty}</td>
                    <td className='text-center'>{value.qty}</td>
                  </tr>
              )
            })
          }
          </tbody>
        </Table>
      </React.Fragment>
  );
}

export default OrderDetails;
