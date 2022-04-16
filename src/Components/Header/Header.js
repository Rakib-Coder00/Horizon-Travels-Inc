import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../Asset/Image/main-nav-home.svg'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect  sticky='top' expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="img" />
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/services' href="#services">Services</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link >More deets</Nav.Link>
              <Nav.Link as={Link} to="/login" >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
