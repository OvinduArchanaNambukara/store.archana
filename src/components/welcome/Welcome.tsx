import React from "react";
import {Container, Row} from "react-bootstrap";
import WelcomeImage from "./WelcomeImage";
import WelcomeText from "./WelcomeText";

const Welcome: React.FC = () => {
  return (
      <Container fluid={true}>
        <Row className="welcome">
          <WelcomeImage/>
          <WelcomeText/>
        </Row>
      </Container>
  );
}

export default Welcome;
