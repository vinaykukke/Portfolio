import * as React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <h1 className={styles.h1TagOpen}>
        <span className={styles.rubberband}>H</span>
        <span className={styles.rubberband}>i</span>
        <span className={styles.rubberband}>,</span>
      </h1>
      <h1 className={styles.intro}>
        <span className={styles.rubberband}>I</span>
        <span className={styles.rubberband}>'</span>
        <span className={styles.rubberband}>m</span>
        <span className={`${styles.rubberband} ${styles.marginLeft}`}>V</span>
        <span className={styles.rubberband}>i</span>
        <span className={styles.rubberband}>n</span>
        <span className={styles.rubberband}>a</span>
        <span className={styles.rubberband}>y</span>
        <span className={styles.rubberband}>,</span>
      </h1>
      <h1 className={styles.intro}>
        <span className={`${styles.rubberband} ${styles.openTag}`} />
        <span className={styles.rubberband}>W</span>
        <span className={styles.rubberband}>e</span>
        <span className={styles.rubberband}>b</span>
        <span className={styles.rubberband}></span>
        <span className={`${styles.rubberband} ${styles.marginLeft}`}>D</span>
        <span className={styles.rubberband}>e</span>
        <span className={styles.rubberband}>v</span>
        <span className={styles.rubberband}>e</span>
        <span className={styles.rubberband}>l</span>
        <span className={styles.rubberband}>o</span>
        <span className={styles.rubberband}>p</span>
        <span className={styles.rubberband}>e</span>
        <span className={styles.rubberband}>r</span>
        <span className={`${styles.rubberband} ${styles.closeTag}`} />
        <div className={styles.h1TagClose} />
      </h1>
      <div className={styles.mytitle}>
        <span className={styles.webDeveloper}>Front-End Developer</span>
        <span className={styles.contractor}>Contractor</span>
      </div>
    </section>
  );
};

export default Hero;
