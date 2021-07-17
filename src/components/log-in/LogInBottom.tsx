import React from "react";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const LogInBottom: React.FC = () => {
  return (
      <Row className='login-bottom mt-2'>
        <Col xs={12} className='text-center'>
          <label>
            Don't have an account?
            <Link to='/register'> Sign up</Link>
          </label>
        </Col>
      </Row>
  );
}

export default LogInBottom;
