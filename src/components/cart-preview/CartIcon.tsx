import React from "react";
import {FiShoppingCart} from "react-icons/all";
import {Badge, Col} from "react-bootstrap";

type CartIconProps = {
  handleClick: (event: any) => void
  itemCount: number
}

const CartIcon: React.FC<CartIconProps> = (props) => {
  const {handleClick, itemCount} = props;

  return (
      <React.Fragment>
        <Col className="cart-icon p-0 mr-3">
          <Badge className="count-badge mr-3">{itemCount}</Badge>
          <FiShoppingCart size={35} onClick={handleClick} className="icon mt-1 mr-1"/>
        </Col>

      </React.Fragment>
  );
}

export default CartIcon;
