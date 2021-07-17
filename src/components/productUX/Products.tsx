import React from 'react';
import {IProducts} from "../../types/types";
import ProductCategoryArea from "./ProductCategoryArea";
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";

const Products: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.grocery);

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
