import React from 'react';
import {Button, Col} from "react-bootstrap";

type AddToCartButtonProps = {
  onAddToCartClick: () => void
  inCart: boolean
  onUpdateClick: () => void
  btnStatus: boolean
}

const AddToCartBtn: React.FC<AddToCartButtonProps> = (props) => {
  const {onAddToCartClick, inCart, onUpdateClick, btnStatus} = props;

  /**
   * when add to cart, click call onAddToCartClick()
   * when update click, call onUpdateClick()
   * @author Ovindu, Kaveesh
   */
  const handleClick = () => {
    if (inCart) {
      onUpdateClick();
    } else {
      onAddToCartClick();
    }
  }

  return (
      <Col xs={12} md={6} className='pl-md-2 pl-3  text-center'>
        <Button onClick={() => handleClick()} variant={inCart ? "outline-secondary" : "success"} disabled={btnStatus}
                className='float-md-right px-md-1 px-3 addToCartBtn'>{inCart ? "Update" : "Add To Cart"}</Button>
      </Col>
  )
}

export default AddToCartBtn;
