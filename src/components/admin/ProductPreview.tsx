import React from "react";
import {Button, Col, FormControl, Image, InputGroup, Row} from "react-bootstrap";

type ProductPreviewProps = {
  croppedImgSrc: string
}

const ProductPreview: React.FC<ProductPreviewProps> = (props) => {
  const {croppedImgSrc} = props;

  return (
      <Row className='product-preview justify-content-center m-0 px-4'>
        <Col xs={10} className='product'>
          <Row>
            <Col xs={12} className="m-0 p-0">
              <Row className='justify-content-center'>
                <Col xs="auto" className='py-4'>
                  <Image src={croppedImgSrc} fluid={true}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs="auto">
              <h3 className="text-center">XXXXXXX</h3>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={6} className='currentPrice text-center'>
              <p>{`Rs.00`}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
              <InputGroup className="mb-3">
                <FormControl
                    className="quantity"
                    type="number"
                    min="1"
                    value={1}
                    disabled={true}
                />
                <InputGroup.Text id="basic-addon1">sa</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xs={12} md={6} className='pl-md-2 pl-3  text-center'>
              <Button variant="success"
                      className='float-md-right px-md-1 px-3 addToCartBtn'>Add To Cart</Button>
            </Col>
          </Row>
        </Col>
      </Row>
  );
}

export default ProductPreview;
