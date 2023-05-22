import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// Display links to Twitter, LinkedIn and GitHub 
// profiles using Font Awesome icons.
export default function SocialMediaLinks() {
  return (
    <div>
      <Link
        aria-label="Twitter Link"
        to="https://twitter.com/ShariLMcRae"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={20} className="me-2" />
      </Link>
      <Link
        aria-label="LinkedIn Link"
        to="https://www.linkedin.com/in/shari-mcrae/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={20} className="me-2" />
      </Link>
      <Link
        aria-label="GitHub Link"
        to="https://github.com/ShariMcRae"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} />
      </Link>
    </div>
  );
}
