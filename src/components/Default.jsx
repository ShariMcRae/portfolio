import React from "react";
import styles from "./Default.module.css";

export default function Default() {
  return (
    <div className={`${styles.centerOnPage} text-center`}>
      <img src={process.env.PUBLIC_URL + "/me2.jpg"} alt="Shari McRae" className={styles.me}/>

      <h2 className="mt-4">Hi, I'm Shari.</h2>
      <h5 className="w-75 mt-4">
        <p>
          I'm a full stack software developer based in Northwest Arkansas.
          <br />I have a passion for creating user experiences that are seemless
          and powerful.
        </p>

        <p>
          I received my Computer Science BS from the University of Arkansas's
          College of Arts and Sciences and have honed my skills over 3 decades.
          Though I've much experience in full stack development, my most recent
          focus has been on the front end. I enjoy studying human digital
          interactions and using my skills to create user experiences that make
          life easier.
        </p>
        <p>
          With a diverse skill set including requirements gathering, systems
          architecture, database development, UX design and full-stack
          programming, I offer versatility and adaptability to any project.
        </p>

        <p>In my spare time I enjoy traveling in my van, mostly in search of new places to scuba or camp.</p>
      </h5>
    </div>
  );
}
