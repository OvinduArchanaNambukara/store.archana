import React from "react";
import {Container, Row} from "react-bootstrap";
import LogInImg from "./LogInImg";
import LogInArea from "./LogInArea";

const LogInUX: React.FC = () => {
  return (
      <Container className='min-vh-100'>
        <Row className='my-5 login align-items-center'>
          <LogInImg/>
          <LogInArea/>
        </Row>
      </Container>
  );
}

export default LogInUX;
