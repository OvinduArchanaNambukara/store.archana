import React from "react";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {NavLink, useRouteMatch} from "react-router-dom";

const UserNavBar: React.FC = () => {
  let {path} = useRouteMatch();

  return (
      <Container fluid={true}>
        <Row>
          <Col xs={12}>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">User</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>
                    <NavLink to={`${path}/order-table`}>
                      Order Table
                    </NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
  );
}

export default UserNavBar;
