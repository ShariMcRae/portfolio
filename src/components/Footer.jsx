import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.portfolioFooter} text-center`}>
      <img 
        className={`${styles.footerImage} mt-1 mb-3`}
        src={process.env.PUBLIC_URL + "/footer.png"}
        alt="footer decoration"
      />
    </div>
  );
}
