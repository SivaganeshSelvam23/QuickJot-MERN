import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">React QuickJot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#home">My Notes</Nav.Link>
            <NavDropdown title="sivaganesh" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
