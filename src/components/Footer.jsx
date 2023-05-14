import React from "react";
import { Container } from "react-bootstrap";
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container className="text-center">
      <Link to="https://twitter.com/ShariLMcRae" target="_blank" rel="noopener noreferrer" ><FaTwitter size={28} className="mx-1"/></Link> 
      <Link to="https://www.linkedin.com/in/shari-mcrae/" target="_blank" rel="noopener noreferrer" ><FaLinkedin size={28} className="mx-1"/></Link>
      <Link to="https://github.com/ShariMcRae" target="_blank" rel="noopener noreferrer" ><FaGithub size={28} className="mx-1"/></Link>
      </Container>
    </footer>
  );
}
