import React from "react";
import {Col} from "react-bootstrap";
import LogInTitle from "./LogInTitle";
import LogInForm from "./LogInForm";
import LogInBottom from "./LogInBottom";

const LogInArea: React.FC = () => {
  return (
      <Col xs={12} md={6} className='pl-md-5'>
        <LogInTitle/>
        <LogInForm/>
        <LogInBottom/>
      </Col>
  );
}

export default LogInArea;
