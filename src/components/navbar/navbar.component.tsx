import React, { Fragment, FunctionComponent } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



type NavbarComponentProps = {
}

const NavbarComponent: FunctionComponent<NavbarComponentProps> = (props: NavbarComponentProps) => {
  return (
    <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Album-Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href='/listAlbums'>
                List Albums
            </Nav.Link>
            <Nav.Link href='/listArtists'>
                List Artists
            </Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/login">
                Login
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Fragment>
  );
};

export default NavbarComponent;
