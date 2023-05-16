import React from "react";
import styles from "./Footer.module.css";
import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="text-center">
      <div className={styles.centerOnPage}>
        <Nav.Link href="home" className="me-3">
          Home
        </Nav.Link>
        <Nav.Link href="resume" className="me-3">
          Resume
        </Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/footer.png"}
        width="80"
        className="mt-1 mb-3"
        alt="footer decoration"
      />
    </div>
  );
}
