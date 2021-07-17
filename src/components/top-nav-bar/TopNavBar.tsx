import React from "react";
import {Container, Row} from "react-bootstrap";
import HeaderArea from "./HeaderArea";
import LogoArea from "./LogoArea";

const TopNavBar: React.FC = () => {
  return (
      <Container fluid={true}>
        <Row className='top-nav-bar'>
          <HeaderArea/>
          <LogoArea/>
        </Row>
      </Container>
  );
}

export default TopNavBar;
