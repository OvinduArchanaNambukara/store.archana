import React from "react";
import {Col, Image} from "react-bootstrap";
import BannerImage from "../../assets/images/welcomeImage/welcome_banner.webp";

const WelcomeImage: React.FC = () => {
  return (
      <Col className="p-0">
        <Image src={BannerImage} fluid={true} className="image"/>
      </Col>

  );
}

export default WelcomeImage;
