import React from 'react';
import {Col, Row} from "react-bootstrap";

type NameProps = {
    name: string
}

const Name: React.FC<NameProps> = (props) => {

    const {name} = props;

    return (
        <Row className='justify-content-center'>
            <Col xs="auto">
                <h3>{name}</h3>
            </Col>
        </Row>
    )
}

export default Name;