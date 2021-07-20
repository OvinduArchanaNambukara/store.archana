import React from 'react';
import {IProducts} from "../../../types/types";
import ProductCategoryArea from "./ProductCategoryArea";
import {Col, Container, Row} from "react-bootstrap";

type ProductsProps = {
  productList: IProducts[]
}

const Products: React.FC<ProductsProps> = (props) => {
  const {productList} = props;

  return (
      <Container>
        <Row className='products justify-content-center'>
          <Col xs={12}>
            {productList.map((shopProducts: IProducts, index: number) =>
                <ProductCategoryArea products={shopProducts} key={index}/>
            )}
          </Col>
        </Row>
      </Container>
  )
}

export default Products;
