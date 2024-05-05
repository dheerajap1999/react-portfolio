import React from "react";
import {faContactCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dheeraj</h1>
        <p className={styles.description}>
          I'm a full-stack web developer with 2 years of experience using HTML/CSS , JavaScript and
          popular frameworks like ReactJS & basic NodeJS for building responsive applications.
          <br/>
          Reach out if you'd like to know more!
        </p>
        <a href="mailto:dheerajap.a1999@gmail.com" className={styles.contactBtn}>
          Contact Me <FontAwesomeIcon icon={faContactCard} />
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
