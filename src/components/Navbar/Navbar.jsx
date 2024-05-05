import React, { useState } from "react";
import {faContactBook,  faDiagramProject, faImage, faLaptopCode, faTrophy, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio <FontAwesomeIcon icon={faImage} />
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About <FontAwesomeIcon icon={faUserTie} /></a>
          </li>
          <li>
            <a href="#experience">Experience <FontAwesomeIcon icon={faLaptopCode} /></a>
          </li>
          <li>
            <a href="#projects">Projects <FontAwesomeIcon icon={faDiagramProject} /></a>
          </li>
          <li>
            <a href="#achivements">Achivements <FontAwesomeIcon icon={faTrophy} /></a>
          </li>
          <li>
            <a href="#contact">Contact <FontAwesomeIcon icon={faContactBook} /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
