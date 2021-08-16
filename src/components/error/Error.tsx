import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ImWarning} from "react-icons/all";

const Error: React.FC = () => {
  return (
      <Container>
        <Row className='error min-vh-100'>
          <Col xs={12} className='justify-content-center align-items-center d-flex'>
            <Row>
              <Col xs={12} className='text-center'>
                <ImWarning size={50}/>
              </Col>
              <Col xs={12} className='text-center'>
                <label className='pl-2 m-0'>Internal Server Error</label>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
}

export default Error;
