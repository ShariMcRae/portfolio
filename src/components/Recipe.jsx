import React from "react";
import styles from "./Recipe.module.css";
import { Link } from "react-router-dom";

export default function Recipe() {
  return (
    <div className={`${styles.projectPage}`}>
      <Link style={{ textDecoration: 0 }}
          to="https://main.d2le9b6o33rmma.amplifyapp.com/recipes/7?q=&qType=0"
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
      <h6 className="w-75 mt-4 text-start">
        <p>Description:</p>
        <p>
          This project was a Front End Software Development bootcamp assignment.
          The goal was to create a React application that accesses an online API, 
          performs all CRUD operations and uses both React Router and React Bootstrap.
        </p>
        <p>Features:</p>
        <p className={styles.projectDesc}>
          The Recipe Library allows users to create, edit and delete recipes stored in a database hosted by MockAPI.com. 
          The menu allows users to search and filter recipes by type. The menu can be hidden by clicking on 
          the vertical line separating the menu from the recipe content on the right. Future versions 
          (coming soon) will hide the menu and make other adjustments for a more responsive UI. The user
          is warned if they try to exit the recipe edit page before saving. 
        </p>
      </h6>
      <h6 className="w-75 mt-4">
        <Link style={{ textDecoration: 0 }}
          to="https://main.d2le9b6o33rmma.amplifyapp.com/recipes/7?q=&qType=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Link>
        <Link style={{ textDecoration: 0 }} className="ms-3"
          to="https://github.com/ShariMcRae/recipes"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </Link>
      </h6>
    </div>
  );
}
