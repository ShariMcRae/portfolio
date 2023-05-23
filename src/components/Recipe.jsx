import React from "react";
import styles from "./Recipe.module.css";
import { Link } from "react-router-dom";

// Display a screen shot of the Recipe Library application
// and a description of the project origin, purpose and features.
// Include links to the demo and GitHub repository.
export default function Recipe() {
  return (
    <div className={`${styles.projectPage} mt-4`}>
      <Link
        to="https://main.d2le9b6o33rmma.amplifyapp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/recipe.png"}
          alt="Shari McRae"
          className={styles.recipe}
        />
      </Link>

      <h2 className="mt-4 text-start">Recipe Library</h2>
      <div className="container fluid mt-2 mb-5 text-start lh-lg ">
        <div className="row">
          <div className="col-sm-0 col-md-2 col-lg-3"></div>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <p>
              This project was a Front End Software Development bootcamp
              assignment.
            </p>
            <p>
              The assignment was to create a responsive single page React
              application that accesses a RESTful API and performs all CRUD
              operations. Other requirements were to provide client-side routing
              via React Router and styling via React Bootstrap.
            </p>
            <p>
              The Recipe Library allows users to create, edit and delete recipes
              via a mock API I created at MockAPI.com. Users may filter the list
              by text string or recipe type and are warned when leaving the
              recipe edit page if there are unsaved changes.
            </p>
          </div>
          <div className="col-sm-0 col-md-2 col-lg-3"></div>
        </div>
        <p className="w-100 text-center py-2">
          <Link
            to="https://main.d2le9b6o33rmma.amplifyapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Link>
          <Link
            className="ms-3"
            to="https://github.com/ShariMcRae/recipes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
}
