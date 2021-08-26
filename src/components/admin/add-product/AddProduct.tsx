import React from "react";
import "cropperjs/dist/cropper.css";
import {Col, Container, Row} from "react-bootstrap";
import DropZoneArea from "./DropZoneArea";
import FormArea from "./FormArea";

export const AddProduct: React.FC = () => {

  return (
      <Container>
        <Row className='add-product-image justify-content-center my-3'>
          <Col xs={12} className='min-vh-100'>
            <DropZoneArea/>
            <FormArea/>
          </Col>
        </Row>
      </Container>
  );
};

export default AddProduct;
