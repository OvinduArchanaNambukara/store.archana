import React from "react";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const RegisterBottom: React.FC = () => {
  return (
      <Row className='register-bottom mt-2'>
        <Col xs={12} className='text-center'>
          <label>
            Do you have an account?
            <Link to='/login'> Log In</Link>
          </label>
        </Col>
      </Row>
  );
}

export default RegisterBottom;
