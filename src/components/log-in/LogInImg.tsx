import React from "react";
import {Col, Image} from "react-bootstrap";
import LogInBanner from "../../assets/images/log-in/logInCart.png";

const LogInImg: React.FC = () => {
  return (
      <Col xs={12} md={6}>
        <Image alt='logInCart' src={LogInBanner} fluid={true}/>
      </Col>
  );
}

export default LogInImg;
