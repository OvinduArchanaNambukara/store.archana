import React from "react";
import {Col, Row} from "react-bootstrap";
import pharmacy from "../../assets/images/categories/pharmacy.webp";
import electronic from "../../assets/images/categories/electronic.webp";
import all from "../../assets/images/categories/all.webp";
import food from "../../assets/images/categories/food.webp";
import grocery from "../../assets/images/categories/grocery.webp";
import Category from "./Category";
import {categoryTypes} from "../../types/types";

const temp: categoryTypes[] = [
  {image: all, name: 'All'},
  {image: grocery, name: 'Grocery'},
  {image: pharmacy, name: 'Pharmacy'},
  {image: food, name: 'Food'},
  {image: electronic, name: 'Electronic'}
];

const Categories: React.FC = () => {

  return (
      <Col className='px-1 px-sm-0 text-center' xs={12}>
        <Row className='justify-content-center'>
          {
            temp.map((category: categoryTypes, index: number) => {
              return (
                  <Category key={index} name={category.name} image={category.image}/>
              );
            })
          }
        </Row>
      </Col>
  );
}

export default Categories;
