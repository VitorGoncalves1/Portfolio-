import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor PHP</h3>
              <p>
              Habilidade para integrar sistemas PHP com o banco de dados MySQL, além de utilização de frameworks como Laravel 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor FrontEnd</h3>
              <p>
              Habilidades para desenvolver aplicações front-end utilizando o css, bootstrap e o framework React
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
