import React from "react";
import {Col, Row} from "react-bootstrap";

const RegisterTitle: React.FC = () => {
  return (
      <Row className='register-title mb-md-4 mt-3 mt-md-0 mb-3'>
        <Col xs={12} className='text-center text-md-left'>
          <label className='mb-0'>Register</label>
        </Col>
      </Row>
  );
}

export default RegisterTitle;
