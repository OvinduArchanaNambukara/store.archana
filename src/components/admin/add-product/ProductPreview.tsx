import React from "react";
import {Button, Col, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";

type ProductPreviewProps = {
  name: string | null
  price: number | null
  oldPrice: number | null
  qty: string | null
  isOldPrice: boolean
}

const ProductPreview: React.FC<ProductPreviewProps> = (props) => {
  const {name, price, oldPrice, qty, isOldPrice} = props;
  const croppedImgSrc = useSelector((state: RootState) => state.adminReducer.cropImageSrc);

  return (
      <Row className='product-preview justify-content-center m-0 px-4'>
        <Col xs={12} className='product'>
          <Row>
            <Col xs={12} className="m-0 p-0">
              <Row className='justify-content-center'>
                <Col xs="auto" className='py-4'>
                  <Image src={croppedImgSrc ? croppedImgSrc : ''} fluid={true}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs="auto">
              <h3 className="text-center">{name ? name : 'XXXX'}</h3>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <Col xs={6} className='currentPrice text-center'>
              <p>Rs. {price ? price : 'xxx'}</p>
            </Col>
            {isOldPrice &&
            <Col xs={6} className='oldPrice text-center'>
                <p>Rs. {oldPrice ? oldPrice : 'xxx'}</p>
            </Col>
            }
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
                <InputGroup.Text>{qty === 'Kg' ? 'Kg' : qty === 'g' ? 'g' : ''}</InputGroup.Text>
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
