import React from "react";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.cardContainer}>
        <ul className={styles.cards} >
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
        </ul>
        </div>
      </div>
    </section>
  );
};
