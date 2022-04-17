import {  signOut } from "firebase/auth";
// import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link} from "react-router-dom";
import logo from '../../Asset/Image/main-nav-home.svg'
import auth from "../../Firebase/Firebase.init";
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
 
  
  const handleLogout = () => {
    signOut(auth);
  }
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
              <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")} as={Link} to='/services'>Services</Nav.Link>
              <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")} as={Link} to='/blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")}>More deets</Nav.Link>
              { user?.uid ? 
                  (<Nav.Link  onClick={handleLogout} >
                  Logout
                </Nav.Link>)
                :
                (<Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")} as={Link} to="/login" >
                Login
              </Nav.Link>)}
              <Nav.Link as={Link} to="/">{user?.displayName}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
