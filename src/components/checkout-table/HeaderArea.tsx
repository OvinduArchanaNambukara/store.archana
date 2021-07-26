import React from "react";
import {Col, Row} from "react-bootstrap";
import CheckoutHeader from "./CheckoutHeader";
import ContinueShoppingBtn from "./ContinueShoppingBtn";

const HeaderArea: React.FC = () => {
  return (
      <Row>
        <Col xs={12}>
          <Row className='pl-0 pl-md-4 ml-0 mr-2 '>
            <CheckoutHeader/>
            <ContinueShoppingBtn/>
          </Row>
        </Col>
      </Row>
  );
}

export default HeaderArea;
