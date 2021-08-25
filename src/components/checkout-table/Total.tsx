import React, {useEffect} from "react";
import CouponArea from "./CouponArea";
import {Col, Row} from "react-bootstrap";
import NumberFormat from "react-number-format";
import {useDispatch} from "react-redux";
import {setSubTotal} from "../../store/actions/CartActions";

type CartTotalProps = {
  total: number
}

const Total: React.FC<CartTotalProps> = (props) => {
  const {total} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubTotal(total))
  }, [total]);

  return (
      <React.Fragment>
        <CouponArea/>
        <Row className='border-bottom mx-0 total-area'>
          <Col xs={6} className='mt-3 px-0'>
            <h6>Delivery Charge</h6>
          </Col>
          <Col xs={6} className='mt-3 px-0'>
            <h6 className='float-right'>Rs.0.00</h6>
          </Col>
        </Row>
        <Row className='border-top mx-0'>
          <Col xs={6} className='mt-2 px-0'>
            <h6>Total</h6>
          </Col>
          <Col xs={6} className='mt-2 px-0'>
            <h6 className='float-right text-danger total'>
              <NumberFormat prefix={'Rs.'} displayType={"text"} value={total} thousandSeparator={true} suffix={'.00'}/>
            </h6>
          </Col>
        </Row>
      </React.Fragment>
  )
}

export default Total;
