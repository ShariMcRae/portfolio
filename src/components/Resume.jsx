import React from "react";
import styles from "./Resume.module.css";
import { Link } from "react-router-dom";
import { FaShare } from "react-icons/fa";

export default function Resume() {
  return (
    <div className={styles.centerOnPage}>
      <div className={styles.tooltip}>
        <Link
          to="https://docs.google.com/document/d/e/2PACX-1vS6nfmG85OwYyva6unZccU64GbGT86mUUWMDHLNgeLb08-G70yvlfaMiV0TZtpzqV4i06zI-V7bWjRD/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaShare/>
        </Link>
        <span className={styles.tooltiptext}>Share</span>
      </div>
      <iframe
        className="w-100 mt-2"
        height="600"
        src="https://docs.google.com/document/d/e/2PACX-1vS6nfmG85OwYyva6unZccU64GbGT86mUUWMDHLNgeLb08-G70yvlfaMiV0TZtpzqV4i06zI-V7bWjRD/pub?embedded=true"
      ></iframe>
    </div>
  );
}
