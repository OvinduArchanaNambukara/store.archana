import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./Header";
import Categories from "./Categories";

const CategoryArea: React.FC = () => {

  return (
      <Container>
        <Row className='categories mt-4 justify-content-center'>
          <Col xs={12} className='header'>
            <Header/>
          </Col>
          <Col xs={12}>
            <Categories/>
          </Col>
        </Row>
      </Container>
  );
}

export default CategoryArea;
