import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Display links to Twitter, LinkedIn and GitHub 
// profiles using Font Awesome icons.
export default function SocialMediaLinks() {
  return (
    <div>
      <Link
        aria-label="X Link"
        to="https://x.com/Shari12376401"
        target="_blank"
        rel="noopener noreferrer"
      >
        
        <FontAwesomeIcon icon={faXTwitter} />
      </Link>&nbsp;
      <Link
        aria-label="LinkedIn Link"
        to="https://www.linkedin.com/in/shari-mcrae/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>&nbsp;
      <Link
        aria-label="GitHub Link"
        to="https://github.com/ShariMcRae"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>
  );
}
