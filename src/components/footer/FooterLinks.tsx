import React from "react";
import {Col, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterLinks: React.FC = () => {
  return (
      <Col xs={12} className='footer-links'>
        <ListGroup horizontal={"sm"} className='justify-content-center'>
          <ListGroup.Item>
            <Link to='/aboutUs'>ABOUT US</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/faq'>FAQ</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/deliveryInfo'>DELIVERY INFO</Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/contactUs'>CONTACT US</Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>
  );
}

export default FooterLinks;
