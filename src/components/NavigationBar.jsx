import { Link, NavLink } from "react-router-dom";
import React from 'react';
import { Navbar, Nav, NavbarToggle } from "react-bootstrap"

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="/" >Corner Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" activeclassname="active">
            HomePage
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products-page" activeclassname="active">
            Products Page
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;