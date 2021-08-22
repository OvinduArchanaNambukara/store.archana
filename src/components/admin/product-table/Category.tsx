import React from "react";
import {Alert} from "react-bootstrap";

type CategoryProps = {
  category: string
  variant: string
}

const Category: React.FC<CategoryProps> = (props) => {
  const {category, variant} = props;

  return (
      <>
        <Alert variant={variant} className='m-0 p-1 text-center'>
          <span className='m-0 product-category'>{category}</span>
        </Alert>
      </>

  );
}

export default Category;
