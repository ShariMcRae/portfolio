import React from "react";
import { NavDropdown, Offcanvas } from "react-bootstrap";

//import styles from './Header.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function Header() {

  return (
        <Navbar bg="light" expand={false} collapseOnSelect>
          <Container fluid>
            <Navbar.Brand href="#">Shari McRae</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Shari McRae
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                  <NavDropdown
                    title="Projects"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                  >
                    <NavDropdown.Item href="https://main.d2le9b6o33rmma.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Recipe Library</NavDropdown.Item>
                    <NavDropdown.Item href="https://main.d2le9b6o33rmma.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Another Project</NavDropdown.Item>
                 </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

