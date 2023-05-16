import React from "react";
import styles from "./Recipe.module.css";
import { Link } from "react-router-dom";

export default function Recipe() {
  return (
    <div className={`${styles.centerOnPage}`}>
      <img
        src={process.env.PUBLIC_URL + "/recipe.png"}
        alt="Shari McRae"
        className={styles.recipe}
      />

      <h2 className="mt-4">Recipe Library</h2>
      <h5 className="w-75 mt-4">
        <p>
          This project was a Front End Software Development bootcamp assignment.
          The goal was to create a React application that accesses an online API (I chose MockAPI), 
          performs all CRUD operations and uses both React Router and React Bootstrap.
        </p>
      </h5>
      <h5>
        {" "}
        <Link style={{ textDecoration: 0 }}
          to="https://main.d2le9b6o33rmma.amplifyapp.com/recipes/7?q=&qType=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Link>
      </h5>
    </div>
  );
}
