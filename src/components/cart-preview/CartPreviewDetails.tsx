import React from "react";
import {Col, Row} from "react-bootstrap";
import NumberFormat from "react-number-format";
import Divider from "./Divider";

type CartPreviewDetailProps = {
  subTotal: number
  count: number
}

const CartPreviewDetails: React.FC<CartPreviewDetailProps> = (props) => {
  const {subTotal, count} = props;
  const discount = Math.floor(Math.random() * subTotal * 0.3);

  return (
      <Row className="cart-details pt-3">
        <Col xs={6}><label>Sub Total ({count} items)</label></Col>
        <Col xs={6} className="text-danger text-right font-weight-bold">
          <label>
            <NumberFormat value={subTotal}
                          thousandSeparator={true}
                          displayType='text'
                          prefix={'Rs. '}
                          decimalScale={2}
                          fixedDecimalScale={true}/>
          </label>
        </Col>

        <Col xs={6}><label>Discount</label></Col>
        <Col xs={6} className="text-right font-weight-bold"><label>
          <NumberFormat value={discount}
                        thousandSeparator={true}
                        displayType='text'
                        prefix={'Rs. '}
                        decimalScale={2}
                        fixedDecimalScale={true}/>
        </label>
        </Col>

        <Divider/>

        <Col xs={6}><label>Est. Total</label></Col>
        <Col xs={6} className="text-danger text-right font-weight-bold">
          <label>
            <NumberFormat value={subTotal - discount}
                          thousandSeparator={true}
                          displayType='text'
                          prefix={'Rs. '}
                          decimalScale={2}
                          fixedDecimalScale={true}/>
          </label>
        </Col>
      </Row>
  );
}

export default CartPreviewDetails;
