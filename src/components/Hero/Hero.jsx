import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou o Vitor</h1>
        <p className={styles.description}>
        Desenvolvedor FullStack com mais de dois anos de experiência na montagem e manutenção de sistemas WEB
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contate me
        </a>
      </div>
      <img
        src={getImageUrl("hero/vitor.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
