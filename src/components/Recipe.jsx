import React from "react";
import styles from './Recipe.module.css';

export default function Recipe() {
  return (
    <div className={`${styles.centerOnPage}`}>
    <img src={process.env.PUBLIC_URL + "/recipe.png"} alt="Shari McRae" className={styles.recipe} />

    <h2 className="mt-4">Recipe Library</h2>
    <h5 className="w-75 mt-4">
      <p>
      This project was a Front End Software Development bootcamp assignment. 
      The goal was to use an online API (I chose MockAPI) to create a 
      React application that allows for all CRUD operations and uses both React Router and React Bootstrap.</p>
    </h5>
  </div>
  );
}
