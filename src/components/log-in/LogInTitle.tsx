import React from "react";
import {Col, Row} from "react-bootstrap";

const LogInTitle: React.FC = () => {
  return (
      <Row className='login-title mb-md-4 mt-3 mt-md-0 mb-3'>
        <Col xs={12} className='text-center text-md-left'>
          <label className='mb-0'>Log In</label>
        </Col>
      </Row>
  );
}

export default LogInTitle;
