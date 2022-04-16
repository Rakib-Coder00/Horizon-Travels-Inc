import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../Asset/Image/main-nav-home.svg'

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect  sticky='top' expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="img" />
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link  href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
