import React from "react";

import styles from "./Achivements.module.css";
import courses from "../../data/achievements.json";
import { getImageUrl } from "../../utils";

export const Achievements = () => {
  return (
    <section className={styles.container} id="achivements">
      <h2 className={styles.title}>Acivements</h2>
        <div className={styles.skills}>
          {courses.map((course, id) => {
            return (
              <div key={id} className={styles.box}>
                  <h3>{course.course}</h3>
                <div className={styles.card}>
                  <div className={styles.imgBx}>
                    <img src={getImageUrl(course.certificateLink)} alt={course.course} />
                  </div>
                  <div className={styles.details}>
                    <h2>{course.Institute}</h2>
                    <h3>{course.duration}</h3>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
    </section>
  );
};
