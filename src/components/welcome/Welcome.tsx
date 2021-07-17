import React from "react";
import BannerImage from "../../assets/images/welcomeImage/welcome_banner.webp";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

const Welcome: React.FC = () => {
  return (
      <Container fluid={true}>
        <Row className="welcome">
          <Col className="p-0">
            <Image src={BannerImage} fluid={true} className="image"/>
          </Col>
          <Col xs={{span: 7, offset: 5}} md={{span: 6, offset: 6}} className="banner-text">
            <span className="regular">100% Healthy & Affordable</span><br/>
            <span className="organic">Organic Vegetables</span><br/>
            <span className="regular">Small Changes Big Difference</span><br/>
            <Button className="shop-now">Shop Now</Button>
          </Col>
        </Row>
      </Container>
  );
}

export default Welcome;
