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
      <Container fluid>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          style={{
            backgroundSize: "0",
            borderWidth: 1,
            borderColor: "#b8aaaa",
            backgroundColor: "#f2ecec",
            padding: 3,
          }}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              <Link aria-label="Twitter Link"
                to="https://twitter.com/ShariLMcRae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="me-1" />
              </Link>
              <Link aria-label="LinkedIn Link"
                to="https://www.linkedin.com/in/shari-mcrae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="me-1" />
              </Link>
              <Link aria-label="GitHub Link"
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
              <Link
                style={{ textDecoration: 0 }}
                to="https://docs.google.com/document/d/e/2PACX-1vS6nfmG85OwYyva6unZccU64GbGT86mUUWMDHLNgeLb08-G70yvlfaMiV0TZtpzqV4i06zI-V7bWjRD/pub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
              <Nav.Link href="recipes">Projects</Nav.Link>
              {/* <NavDropdown
                title="Projects"
                id={`offcanvasNavbarDropdown-expand-${false}`}
              >
                <NavDropdown.Item href="recipes" rel="noopener noreferrer">
                  Recipe Library
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand href="#">
          <Link aria-label="Twitter Link"
            to="https://twitter.com/ShariLMcRae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} className="me-2" />
          </Link>
          <Link aria-label="LinkedIn Link"
            to="https://www.linkedin.com/in/shari-mcrae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="me-2" />
          </Link>
          <Link aria-label="GitHub Link"
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
