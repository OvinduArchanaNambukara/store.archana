import React from "react";
import {Container, Row} from "react-bootstrap";
import FooterLinks from "./FooterLinks";
import FooterIcons from "./FooterIcons";
import FooterCopyRights from "./FooterCopyRights";

const Footer: React.FC = () => {
  return (
      <Container fluid={true}>
        <Row className='footer'>
          <FooterLinks/>
          <FooterIcons/>
          <FooterCopyRights/>
        </Row>
      </Container>
  );
}

export default Footer;
