import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom"

const BottomNav: React.FC = () => {
  return (
      <Container fluid={true}>
        <Navbar className="bottom-nav-bar px-0 py-3 border-bottom" expand="sm">
          <NavDropdown title="Categories" id="basic-nav-dropdown" className="bottom-nav-dropdown mr-md-4 ml-md-4 px-1">
            <NavDropdown.Item href="#fruits">Fruits</NavDropdown.Item>
            <NavDropdown.Item href="#vagetables">Vegetables</NavDropdown.Item>
            <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
            <NavDropdown.Item href="#furniture">Furniture</NavDropdown.Item>
            <NavDropdown.Item href="#grocery">Grocery</NavDropdown.Item>
            <NavDropdown.Item href="#meat">Meat</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="bottom-nav-collapse">
            <Nav className="bottom-nav mr-auto ">
              <Nav.Link>
                <NavLink to='/'>Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/faq'>FAQ</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/aboutus'>About us</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to='/contactus'>Contact us</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

export default BottomNav;
