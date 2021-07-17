import React from "react";
import {Row, Col} from "react-bootstrap";
import Logo from "./Logo";
import CheckOutArea from "./CheckOutArea";

const LogoArea: React.FC = () => {
  return (
      <Col xs={12} className='logo-area'>
        <Row className='shadow'>
          <Logo/>
          <CheckOutArea/>
        </Row>
      </Col>

  );
}

export default LogoArea;
