import React from "react";
import {Col, Image} from "react-bootstrap";
import RegisterBanner from "../../assets/images/register/registerCart.png";

const RegisterImg: React.FC = () => {
  return (
      <Col xs={12} md={6}>
        <Image alt='registerCartImg' src={RegisterBanner} fluid={true}/>
      </Col>
  );
}

export default RegisterImg;
