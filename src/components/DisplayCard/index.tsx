import * as React from "react";
import LinkedIn from "components/Logos/LinkedIn";
import styles from "./displaycard.module.scss";

const DisplayCard = () => {
  return (
    <div className={styles.cardContainer}>
      <span className={styles.pro}>Señor Developer</span>
      <img
        className={styles.round}
        src="https://randomuser.me/api/portraits/men/9.jpg"
        alt="user"
      />
      <h3>Vinay Kukke</h3>
      <h5>Bangalore, India</h5>
      <p>
        User interface designer and <br /> front-end developer
      </p>
      <a href="https://linkedin.com/in/vinay-kukke" target="_blank">
        <LinkedIn />
      </a>
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
