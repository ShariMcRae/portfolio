import React from "react";
import styles from "./Footer.module.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="text-center">
      <div className={styles.centerOnPage}>
        <Nav.Link href="home" className="me-3">
          Home
        </Nav.Link>
        <Link
          className="me-3"
          style={{ textDecoration: 0 }}
          to="https://docs.google.com/document/d/e/2PACX-1vS6nfmG85OwYyva6unZccU64GbGT86mUUWMDHLNgeLb08-G70yvlfaMiV0TZtpzqV4i06zI-V7bWjRD/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
        <Nav.Link href="recipes">Projects</Nav.Link>
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
