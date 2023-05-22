import React from "react";
import { NavDropdown, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import "./Header.module.css";

import SocialMediaLinks from "./SocialMediaLinks";

// Define page Header with a React Bootstrap Off-Canvas menu
// on the left side and social media links on the right
// using Font Awesome icons.
export default function Header() {
  return (
    <Navbar expand={false} collapseOnSelect>
      <Container fluid>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          className={`${styles.portfolioHeader}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton className={`${styles.menuHeader}`}>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              <div className={styles.menuTitle}>Shari McRae</div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={styles.menuBody}>
            <Nav className="justify-content-end flex-grow-1 pt-3 text-center">
              <Nav.Link href="about">About</Nav.Link>
              <Link
                to="https://docs.google.com/document/d/e/2PACX-1vS6nfmG85OwYyva6unZccU64GbGT86mUUWMDHLNgeLb08-G70yvlfaMiV0TZtpzqV4i06zI-V7bWjRD/pub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
              <NavDropdown
                title="Projects" 
                id={`offcanvasNavbarDropdown-expand-${false}`}
              >
                <NavDropdown.Item href="recipes" rel="noopener noreferrer">
                  <div className={`${styles.subMenu}`}>Recipe Library</div>
                  
                </NavDropdown.Item>
              </NavDropdown>
              <div className="m-3"> </div>
              <SocialMediaLinks/>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Brand>
          <SocialMediaLinks />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
