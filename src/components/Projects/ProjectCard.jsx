import React from "react";
import { faCodeBranch, faLaptopCode, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
        <li className={styles.card}>
          <div className={styles.imgContainer}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
          {demo ?
          <div className={styles.links}>
            <a href={demo} className={styles.link}>
              Demo <FontAwesomeIcon icon={faLaptopCode} />
            </a>
            <a href={source} className={styles.link}>
              Source <FontAwesomeIcon icon={faCodeBranch} />
            </a>
          </div>
          : <div className={styles.links}>
              <h3  className={styles.link}>
                Private Project  <FontAwesomeIcon icon={faLock} />
              </h3>
            </div>
          }
          </div>
        </li>
  );
};
