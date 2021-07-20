import React from 'react';
import {Col} from "react-bootstrap";

type CurrentPriceProps = {
    currentPrice: number
}

const CurrentPrice: React.FC<CurrentPriceProps> = (props) => {

    const {currentPrice} = props;

    return (
        <Col xs={6} className='currentPrice pt-md-0 pt-2'>
            <p>{`Rs.${currentPrice}.00`}</p>
        </Col>
    )
}

export default CurrentPrice;