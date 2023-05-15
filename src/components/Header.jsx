import React from "react";
import { NavDropdown, Offcanvas } from "react-bootstrap";

//import styles from "./Header.module.css";
import "./Header.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar expand={false} collapseOnSelect>
      <Container fluid className="py-2 ps-3">
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              <Link
                to="https://twitter.com/ShariLMcRae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="me-1" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/shari-mcrae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="me-1" />
              </Link>
              <Link
                to="https://github.com/ShariMcRae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h3>Shari McRae</h3>
            <Nav className="justify-content-end flex-grow-1 pt-3">
              <Nav.Link href="home">Home</Nav.Link>              
              <Nav.Link href="resume">Resume</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
              <NavDropdown
                title="Projects"
                id={`offcanvasNavbarDropdown-expand-${false}`}
              >
                <NavDropdown.Item href="recipes" rel="noopener noreferrer">
                  Recipe Library
                </NavDropdown.Item>
                <NavDropdown.Item href="another" rel="noopener noreferrer">
                  Another Project
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#">
          <Link
            to="https://twitter.com/ShariLMcRae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} className="me-2" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/shari-mcrae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="me-2" />
          </Link>
          <Link
            to="https://github.com/ShariMcRae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
