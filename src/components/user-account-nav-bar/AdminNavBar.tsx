import React from "react";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {NavLink, useRouteMatch} from "react-router-dom";


const AdminNavBar: React.FC = () => {
  let {path} = useRouteMatch();

  return (
      <Container fluid={true}>
        <Row>
          <Col xs={12}>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand>Admin</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>
                    <NavLink to={`${path}/order-table`}>
                      Order Table
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to={`${path}/product-list`}>
                      Product Table
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to={`${path}/create-product`}>
                      Create Product
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

export default AdminNavBar;
