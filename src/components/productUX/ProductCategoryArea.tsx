import React from 'react';
import CategoryTitle from "./CategoryTitle";
import {IProduct, IProducts} from "../../types/types";
import Product from "./Product";
import {Row} from "react-bootstrap";

type ProductCategoryAreaProps = {
  products: IProducts
}

const ProductCategoryArea: React.FC<ProductCategoryAreaProps> = (props) => {
  return (
      <React.Fragment>
        <CategoryTitle category={props.products.category}/>
        <Row>
          {props.products.productDetails.map((product: IProduct, index: number) =>
              <Product productDetails={product} key={index} index={index}/>
          )}
        </Row>
      </React.Fragment>
  )
}

export default ProductCategoryArea;
