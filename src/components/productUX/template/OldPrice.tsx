import React from 'react';
import {Col} from "react-bootstrap";

type OldPriceProps = {
    oldPrice: number
}

const OldPrice: React.FC<OldPriceProps> = (props) => {

    const {oldPrice} = props;

    return (
        <Col xs={6} className='oldPrice pt-2 pt-md-2'>
            <p className='float-right'>{`Rs.${oldPrice}.00`}</p>
        </Col>
    )
}

export default OldPrice;