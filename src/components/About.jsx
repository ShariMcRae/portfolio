import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={`${styles.centerOnPage}`}>
      <img
        className={`${styles.me} rounded-circle`}
        src={process.env.PUBLIC_URL + "/me2.jpg"}
        alt="Shari McRae"
      />
      <h2 className="mt-4">Hi, I'm Shari.</h2>
      <div className="container fluid mt-3 mb-5 lh-lg ps-3">
        <div className="row">
          <div className="col-md-2 col-lg-3"></div>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <p>
              I'm a full stack software developer based in Northwest Arkansas.
            </p>
            <p>
              I enjoy studying human digital interactions and using my skills to
              create user experiences that make life easier. I received my
              Computer Science degree from the University of Arkansas and have
              honed my skills over two decades. With a diverse skill set
              including requirements gathering, systems architecture, database
              design, UX design and full stack development, I offer versatility
              and adaptability to any project.
            </p>
            <p>
              In my spare time I enjoy traveling in my van in search of new
              places to camp and swim.
            </p>
          </div>
          <div className="col-md-2 col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}
