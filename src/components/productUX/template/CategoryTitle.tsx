import React from 'react';
import {Col, Row} from "react-bootstrap";

type CategoryTitleProps = {
    category: string
}

const CategoryTitle: React.FC<CategoryTitleProps> = (props) => {
    return (
        <Row>
            <Col xs={12} className='category-title py-3'>
                {props.category}
            </Col>
        </Row>
    )
}

export default CategoryTitle;