import React from "react";
import "cropperjs/dist/cropper.css";
import {Col, Container, Row} from "react-bootstrap";
import ImageArea from "./ImageArea";
import FormArea from "./FormArea";

export const Demo: React.FC = () => {

  return (
      <Container>
        <Row className='add-product-image justify-content-center my-3'>
          <Col xs={12} className='min-vh-100'>
            <ImageArea/>
            <FormArea/>
          </Col>
        </Row>
      </Container>

  );
};

export default Demo;
