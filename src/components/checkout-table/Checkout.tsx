import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import TableArea from "./TableArea";
import HeaderArea from "./HeaderArea";

const Checkout: React.FC = () => {
  return (
      <Container className=''>
        <Row className='mt-4 checkout mx-0 justify-content-center'>
          <Col xs={12} lg={12} className='px-0'>
            <HeaderArea/>
            <TableArea/>
          </Col>
        </Row>
      </Container>
  )
}

export default Checkout;
