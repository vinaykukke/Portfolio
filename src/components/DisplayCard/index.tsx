import * as React from "react";
import LinkedIn from "components/Logos/LinkedIn";
import styles from "./displaycard.module.scss";

const DisplayCard = () => {
  return (
    <div className={styles.cardContainer}>
      <section className={styles.infoSection}>
        <span className={styles.pro}>Señor Developer</span>
        <img
          className={styles.round}
          src="https://randomuser.me/api/portraits/men/9.jpg"
          alt="user"
        />
        <h3 className={styles.name}>Vinay Kukke</h3>
        <h5 className={styles.city}>Bangalore, India</h5>
        <p className={styles.profession}>
          Web App Developer and <br /> Software Consultant
        </p>
        <a href="https://linkedin.com/in/vinay-kukke" target="_blank">
          <LinkedIn />
        </a>
      </section>
      <section className={styles.skillsSection}>
        <div className={styles.skills}>
          <h3 className={styles.skillsHeader}>Skills</h3>
          <ul>
            <li>Front End Development</li>
            <li>HTML5</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Typescript</li>
            <li>Mongo DB</li>
            <li>D3JS</li>
            <li>Express</li>
            <li>Strapi</li>
            <li>Shopify</li>
            <li>E-Commerce</li>
            <li>UI / UX</li>
          </ul>
          <div className={styles.experience}>
            <p className={styles.years}>8 years</p>
            <div className={styles.experienceText}>Experience</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayCard;
