import React from "react";
import {Col, ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AiFillYoutube, FaFacebook, FaLinkedin, FaRss, FaTwitter, GrPinterest} from "react-icons/all";

const FooterIcons: React.FC = () => {
  return (
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
  );
}

export default FooterIcons;
