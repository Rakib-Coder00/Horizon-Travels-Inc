import {  signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link} from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import './Header.css'
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [user] = useAuthState(auth);
 
  
  const handleLogout = () => {
    signOut(auth);
    toast.success('Successfully Logout!', {id: 'logout'})
  }
  return (
    <>
      <Navbar collapseOnSelect  sticky ="top" expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
              <h2> Horizon Travels</h2>
             
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto fw-bold">
              <Nav.Link className={({ isActive }) => (isActive ? "active" : "")} as={Link} to='/services'>Services</Nav.Link>
              <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            </Nav>
            <Nav className="me-auto fw-bold">
              <Nav.Link as={Link} to="about/">About</Nav.Link>
              <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faUser} />  {user?.displayName}</Nav.Link>
              { user?.uid ? 
                  (<Nav.Link  onClick={handleLogout} >
                       Logout
                  
                </Nav.Link>)
                :
                (<Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")} as={Link} to="/login" >
                  Login
              </Nav.Link>)}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
