import React from "react";
import {Col, Row} from "react-bootstrap";
import {BiMinusCircle, BiPlusCircle} from "react-icons/all";
import {changeQuantity} from "../../store/actions/CartActions";
import {useDispatch} from "react-redux";

type QuantityProps = {
  quantity: number
  index: number
}

const Quantity: React.FC<QuantityProps> = (props) => {
  const dispatch = useDispatch();
  const {quantity, index} = props;

  /**
   * when change +1 it increase the quantity of the product in redux store cartItems[]
   * when change -1 it decrease the quantity of the product in redux store cartItems[]
   * when quantity is 0 decrease will not work
   */
  const handleOnClick = (change: number) => {
    if (change < 0 && quantity === 1) {
      return
    }
    dispatch(changeQuantity(index, change));
  }

  return (
      <Row>
        <Col className='quantity-editor' xs={12}>
          <BiMinusCircle size={18} onClick={() => handleOnClick(-1)}/>
          <label className='px-2 mb-0'>{quantity}</label>
          <BiPlusCircle size={18} onClick={() => handleOnClick(+1)}/>
        </Col>
      </Row>
  )
}

export default Quantity;
