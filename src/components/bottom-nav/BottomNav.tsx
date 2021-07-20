import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom"

const BottomNav: React.FC = () => {
  return (
      <Container fluid={true}>
        <Navbar className="bottom-nav-bar px-0 py-3 border-bottom" expand="sm">
          <NavDropdown title="Categories" id="basic-nav-dropdown" className="bottom-nav-dropdown mr-md-4 ml-md-4 px-1">
            <NavDropdown.Item>
              <NavLink to={'/home/All'} className='p-0 text-decoration-none'>All</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to={'/home/Grocery'} className='p-0 text-decoration-none'>Grocery</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to={'/home/Pharmacy'} className='p-0 text-decoration-none'>Pharmacy</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to={'/home/Food'} className='p-0 text-decoration-none'>Food</NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink to={'/home/Electronic'} className='p-0 text-decoration-none'>Electronic</NavLink>
            </NavDropdown.Item>
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
