import React from "react";
import {Col, Row} from "react-bootstrap";
import Category from "./Category";
import {categoryTypes} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";

const Categories: React.FC = () => {
  const categoryList: categoryTypes[] = useSelector((state: RootState) => state.categoriesReducer.categories);

  return (
      <Col className='px-1 px-sm-0 text-center' xs={12}>
        <Row className='justify-content-center'>
          {
            categoryList.map((category: categoryTypes, index: number) => {
              return (
                  <Category key={index} name={category.name} image={category.image} isActive={category.isActive}/>
              );
            })
          }
        </Row>
      </Col>
  );
}

export default Categories;
