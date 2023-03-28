import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  /**
   * Bootstrap classes for the navbar links.
   */
  const navLinkStyle = 'text-muted text-decoration-none';
  const brandStyle = 'fs-1 fw-bold fst-italic';

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className={brandStyle} href="#home">My Reads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className={navLinkStyle} to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className={navLinkStyle} to='/search'>Search</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;