import React from "react";
import {Col} from "react-bootstrap";
import RegisterTitle from "./RegisterTitle";
import RegisterForm from "./RegisterForm";
import RegisterBottom from "./RegisterBottom";

const RegisterArea: React.FC = () => {
  return (
      <Col xs={12} md={6} className='pl-md-5'>
        <RegisterTitle/>
        <RegisterForm/>
        <RegisterBottom/>
      </Col>
  );
}

export default RegisterArea;
