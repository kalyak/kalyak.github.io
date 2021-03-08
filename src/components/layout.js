import { Link } from "gatsby";
import * as React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Layout = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg' className='sticky-top'>
        <Navbar.Brand as={Link} to='/'>
          Kalya Kusumadi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to='/projects'>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Layout;
