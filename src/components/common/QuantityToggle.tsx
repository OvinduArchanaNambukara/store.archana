import React from "react";
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";
import {useDispatch} from "react-redux";
import {changeQuantity} from "../../store/actions/CartActions";

type QuantityToggleProps = {
  quantity: number
  index: number
}

const QuantityToggle: React.FC<QuantityToggleProps> = (props) => {
  const {index, quantity} = props;
  const dispatch = useDispatch();

  /**
   * when change +1 it increase the quantity of the product in redux store cartItems[]
   * when change -1 it decrease the quantity of the product in redux store cartItems[]
   * when quantity is 0 decrease will not work
   * @param change
   * @author Ovindu
   */
  const handleOnClick = (change: number) => {
    if (change < 0 && quantity === 1) {
      return
    }
    dispatch(changeQuantity(index, change));
  }

  return (
      <React.Fragment>
        <FiMinusCircle className="quantity-toggle text-danger" onClick={() => handleOnClick(-1)}/>
        {quantity}
        <FiPlusCircle className="quantity-toggle text-primary" onClick={() => handleOnClick(+1)}/>
      </React.Fragment>
  );
}

export default QuantityToggle;
