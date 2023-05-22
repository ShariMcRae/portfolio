import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.css";

export default function Layout() {

  // Define the page structure/layout with a fixed
  // header/footer and React Router Outlet for
  // dynamically replacing the page content.
  return (
    <>
      <header className={`${styles.portfolioHeader} container fixed-top`}>
        <Header/>
      </header>
      <main className={`${styles.portfolioMain} p-5 pb-4`}>
        <div className="pt-5">
          <Outlet />
        </div>
      </main>
      <footer className="fixed-bottom">
        <Footer />
      </footer>
    </>
  );
}
