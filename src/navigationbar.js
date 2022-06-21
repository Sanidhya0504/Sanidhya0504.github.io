import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/navigationbar.css";
import React from "react";
function Navigation() {
  return (
    <div className="navb">
      <div className="App">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container className="nav_text">
            <Navbar.Brand href="#home">
              {"<"}Sanidhya/{">"}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#deets">
                  {"<"}Contact/{">"}
                </Nav.Link>
                <Nav.Link href="#deets">
                  {"<"}About/{">"}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
