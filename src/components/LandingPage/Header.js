import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../../styles/LandingPage/header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="header-bg" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="logo"
              src="https://res.cloudinary.com/dvwcygw04/image/upload/v1649857497/logo_yrjlfy.png"
              alt="kinoverse"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto header-links">
              <Nav.Link className="px-4" href="#action1">
                Support
              </Nav.Link>
              <Nav.Link className="px-4" href="#action2">
                Login
              </Nav.Link>
              <Nav.Link className="px-4" href="#action3">
                <Button variant="outline-light">Sign Up Free</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
