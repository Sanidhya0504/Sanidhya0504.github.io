import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./styles/navigationbar.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavigationDark() {
  const [isShown, setIsShown] = useState(true);
  const toggle = () => {
    setIsShown((current) => !current);
  };
  return (
    <div className="navb">
      <div className="App">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container className="nav_text">
            <Navbar.Brand>
              {"<"}Sanidhya/{">"}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <Link to="skills" spy={true} smooth={false}>
                    {"<"}Skills/{">"}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="about--dark" spy={true} smooth={false}>
                    {"<"}About/{">"}
                  </Link>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/light">
                  Light
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavigationDark;
