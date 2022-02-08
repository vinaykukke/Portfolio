import * as React from "react";
import styles from "./displaycard.module.scss";

const DisplayCard = () => {
  return (
    <div className={styles.cardContainer}>
      <span className={styles.pro}>PRO</span>
      <img
        className={styles.round}
        src="https://randomuser.me/api/portraits/women/79.jpg"
        alt="user"
      />
      <h3>Ricky Park</h3>
      <h6>New York</h6>
      <p>
        User interface designer and <br /> front-end developer
      </p>
      <div className={styles.buttons}>
        <button className={styles.primary}>Message</button>
        <button className={`${styles.primary} ${styles.ghost}`}>
          Following
        </button>
      </div>
      <div className={styles.skills}>
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  );
};

export default DisplayCard;
