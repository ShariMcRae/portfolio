import React from "react";
import styles from "./Default.module.css";

export default function Default() {
  return (
    <div className={`${styles.centerOnPage} text-center`}>
      <img
        className={`${styles.me} rounded-circle`}
        src={process.env.PUBLIC_URL + "/me2.jpg"}
        alt="Shari McRae"
      />
      <h2 className="mt-4">Hi, I'm Shari.</h2>
      <h5 className="w-75 mt-4">
        <p>
          I'm a full stack software developer based in Northwest Arkansas.
          <br />I enjoy studying human digital interactions and using my skills
          to create user experiences that make life easier.
        </p>
        <p>
          I received my Computer Science degree from the University of Arkansas
          and have honed my skills over 3 decades. With a diverse skill set
          including requirements gathering, systems architecture, database
          design, UX design and full stack development, I offer versatility and
          adaptability to any project.
        </p>
        <p>
          In my spare time I enjoy traveling in my van in search of new places
          to camp and swim.
        </p>
      </h5>
    </div>
  );
}
