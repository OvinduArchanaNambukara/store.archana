import React from "react";
import {Container, Row} from "react-bootstrap";
import RegisterImg from "./RegisterImg";
import RegisterArea from "./RegisterArea";

const RegisterUX: React.FC = () => {
  return (
      <Container className='min-vh-100'>
        <Row className='my-5 register align-items-center'>
          <RegisterImg/>
          <RegisterArea/>
        </Row>
      </Container>
  );
}

export default RegisterUX;
