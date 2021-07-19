import React from "react";
import {Button, Col} from "react-bootstrap";

const WelcomeText: React.FC = () => {
  return (
      <Col xs={{span: 7, offset: 5}} md={{span: 6, offset: 6}} className="banner-text">
        <span className="regular">100% Healthy & Affordable</span><br/>
        <span className="organic">Organic Vegetables</span><br/>
        <span className="regular">Small Changes Big Difference</span><br/>
        <Button className="shop-now">Shop Now</Button>
      </Col>
  );
}

export default WelcomeText;
