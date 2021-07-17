import React from "react";
import {Col, Image} from "react-bootstrap";
import EmptyCartImage from "../../assets/images/cart/empty_cart.png";

const EmptyCartPreview: React.FC = () => {
  return (
      <React.Fragment>
        <Col className="empty-cart text-center p-0">
          <Image src={EmptyCartImage} alt="empty cart image" className="empty-cart-image" fluid={true}/><br/>
          <label className="text-danger mb-0">Your cart is empty</label><br/>
          <label>Add items to your cart :)</label>
        </Col>
      </React.Fragment>
  );
}

export default EmptyCartPreview;
