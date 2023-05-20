import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Provides the page layout with a navigation
// pane on the left side of the page.
export default function Layout() {
  // Render the overall page layout/structure with menu
  // on the left, a dividing line that can be used to hide/show the menu,
  // and an outlet on the right for updating the page content.
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
