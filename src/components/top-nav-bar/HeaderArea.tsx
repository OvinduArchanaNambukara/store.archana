import React, {useEffect, useState} from "react";
import {Col, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {CgClose, FaTruck, FiUser, IoCallOutline} from "react-icons/all";
import ButtonArea from "./ButtonArea";
import NightModeButton from "./NightModeButton";
import {changeToLight, changeToNight} from "../../custom-styles/night-mode-style";

const HeaderArea: React.FC = () => {
  const [toggleIcon, setToggleIcon] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    if (isClicked) {
      changeToNight();
    } else {
      changeToLight();
    }
  }, [isClicked])

  /**
   * when click change the toggle icon
   * @author Ovindu
   */
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  }

  /**
   * change state value of the isclicked
   * @author Ovindu
   */
  const handleOnChange = () => {
    setIsClicked(!isClicked);
  }

  return (
      <Col xs={12} className='px-0 header-nav'>
        <Navbar collapseOnSelect expand="md" className='py-0'>
          <Nav className='d-md-none'>
            <Nav.Link className='mr-4'>
              <NavLink to='/'>
                <IoCallOutline/>
                +94 112 123 456
              </NavLink>
            </Nav.Link>
          </Nav>
          <NightModeButton customClassName={'align-items-center pr-md-3 pl-4 pl-md-0 d-flex d-md-none ml-auto'}
                           onClicked={handleOnChange} isClicked={isClicked}/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleIcon}>
            {toggleIcon && <CgClose size={30}/>}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ml-auto'>
              <Nav.Link className='d-md-flex d-none pr-3'>
                <NavLink to='/'>
                  <IoCallOutline/>
                  +94 112 123 456
                </NavLink>
              </Nav.Link>
              <Nav.Link className='pr-3'>
                <NavLink to='/'>
                  <FaTruck/>
                  Delivery Areas
                </NavLink>
              </Nav.Link>
              <Nav.Link className='pr-3'>
                <NavLink to='/'>
                  <FiUser/>
                  My Account
                </NavLink>
              </Nav.Link>
              <NightModeButton customClassName={'align-items-center pr-md-3 pl-4 pl-md-0 d-none d-md-flex'}
                               onClicked={handleOnChange} isClicked={isClicked}/>
              <ButtonArea/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
  );
}

export default HeaderArea;
