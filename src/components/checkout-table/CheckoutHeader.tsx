import React from "react";
import {Col} from "react-bootstrap";

const CheckoutHeader: React.FC = () => {
  return (
      <Col md={8} xl={10} lg={9} sm={6} className='px-0 pt-2 checkout-label text-md-left text-center'>
        <h4 className='mb-0'>CheckOut Page</h4>
      </Col>
  )
}

export default CheckoutHeader;
