import React, {useEffect, useState} from 'react';
import {Col, FormControl, InputGroup} from "react-bootstrap";
import {ICheckoutProduct} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";

type QuantityProps = {
  quantity: (quantity: number) => void
  inCart: boolean
  id: string
  qty: string
  addBtnStatus: (bool: boolean) => void
}

const Quantity: React.FC<QuantityProps> = (props) => {
  const [unit, setUnit] = useState<boolean>(true);
  const [value, setValue] = useState<number | null>(null);
  const {inCart, quantity, id, qty, addBtnStatus} = props;
  const cartItemQuantity: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.cartList);

  const handleChangeUnit = () => {
    setUnit(!unit);
  }

  /**
   * match product id and cart item id
   * when cart item quantity increase or decrease , it updates the value of product quantity input value
   * @author Ovindu
   */
  useEffect(() => {
    cartItemQuantity.map((cartItem: ICheckoutProduct) => {
      if (cartItem.product.id === id) {
        setValue(cartItem.quantity);
      }
    })
  }, [cartItemQuantity]);

  /**
   * when value change pass that value to props quantity()
   * @author Ovindu
   */
  useEffect(() => {
    if (!value) {
      return
    }
    quantity(value);
  }, [value]);

  /**
   * when delete the item in cart set product default value to 1
   * @author Ovindu
   */
  useEffect(() => {
    if (!inCart) {
      setValue(1);
    }
  }, [inCart]);

  /**
   * when quantity type is weight set min value to 250 else num set to 1
   * @author Ovindu
   */
  useEffect(() => {
    if (qty === "Kg") {
      setValue(250);
    } else {
      setValue(1);
    }
  }, []);

  /**
   * When changing quantity, change the value string to number and update the value
   * @param e
   * @author Ovindu
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
    if (parseInt(e.target.value) < 250 && qty === "Kg" && unit) {
      addBtnStatus(true);
    } else {
      addBtnStatus(false);
    }
  }

  /**
   * when quantity is Kg type  value<250 active the buttons and when g type and value<250 disable the button
   * @author Ovindu
   */
  useEffect(() => {
    if (value === null) {
      return;
    }
    if (value < 250 && unit) {
      addBtnStatus(true);
    } else {
      addBtnStatus(false);
    }
  }, [unit]);

  return (
      <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
        <InputGroup className="mb-3">
          <FormControl
              type="number"
              min={(qty === "Kg") ? 250 : 1}
              onChange={handleOnChange}
              value={value ? value : ""}
              step={(qty === "Kg") ? 250 : 1}
          />
          {(qty === 'Kg') &&
          <InputGroup.Text id="basic-addon1" onClick={() => handleChangeUnit()}>{unit ? "g" : "Kg"}</InputGroup.Text>}
        </InputGroup>
      </Col>
  )
}

export default Quantity;
