import React from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaFacebook, FaTwitter, FaLinkedin, GrPinterest, AiFillYoutube, FaRss} from "react-icons/all";

const Footer: React.FC = () => {
  return (
      <Container fluid={true}>
        <Row className='footer'>
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
          <Col xs={12} className='footer-icons'>
            <ListGroup horizontal className='justify-content-center'>
              <ListGroup.Item>
                <Link to='/facebook'>
                  <FaFacebook/>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/aboutUs'>
                  <FaTwitter/>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/aboutUs'>
                  <FaLinkedin/>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/aboutUs'>
                  <GrPinterest/>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/aboutUs'>
                  <AiFillYoutube/>
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/aboutUs'>
                  <FaRss/>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} className='footer-copy-rights text-center py-2'>
            <span>Copyright © 2021. All Rights Reserved.<span
                className='copy-right'> Powered by SoftVessel</span></span>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
