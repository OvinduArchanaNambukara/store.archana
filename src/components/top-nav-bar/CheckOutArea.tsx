import React from "react";
import {Col, Row} from "react-bootstrap";
import CheckOutButton from "../common/CheckOutButton";
//import CartPreview from "../cart-preview/CartPreview";

const CheckOutArea: React.FC = () => {

  return (
      <Col className='my-auto' xs={8}>
        <Row className='align-items-center justify-content-end'>
          {/*<CartPreview/>*/}
          <CheckOutButton classname={'mr-1 ml-3 mr-sm-4 d-none d-sm-block border-0'}/>
        </Row>
      </Col>
  );
}

export default CheckOutArea;
