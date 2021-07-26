import React from "react";
import {Image} from "react-bootstrap";
import Empty from "../../assets/images/cart/empty_cart.png"

const NoDataIndicator: React.FC = () => {
  return (
      <div className="text-center">
        <Image src={Empty}/>
        <p>Your Cart is empty</p>
        <p>Add items to your cart :)</p>
      </div>
  );
}

export default NoDataIndicator;
