import {  signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation} from "react-router-dom";
import logo from '../../Asset/Image/main-nav-home.svg'
import auth from "../../Firebase/Firebase.init";
import './Header.css'
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
 
    if (loading) {
      return (
        <div>
          {toast.success('Initializing!', {id: 'init'})}
        </div>
      );
    }
  
  const handleLogout = () => {
    signOut(auth);
    toast.success('Successfully Logout!', {id: 'logout'})
  }
  return (
    <div>
      <Navbar collapseOnSelect  sticky='top' expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
              {/* <img src={logo} alt="img" /> */}
              <h2> Horizon Travels</h2>
             
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto fw-bold">
              <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")} as={Link} to='/services'>Services</Nav.Link>
              <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")} as={Link} to='/checkout'>Checkout</Nav.Link>
              <Nav.Link className={({ isActive }) => (isActive ? "active-link" : "link1")} as={Link} to='/blog'>Blog</Nav.Link>
            </Nav>
            <Nav className="me-auto fw-bold">
              <Nav.Link as={Link} to="about/" className={({ isActive }) => (isActive ? "text-primary" : "btn btn-info")}>About</Nav.Link>
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
    </div>
  );
};

export default Header;
