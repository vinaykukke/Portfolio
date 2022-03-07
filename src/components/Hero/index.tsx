import React from "react";
import styles from "./hero.module.scss";

const Hero = (props: { reference: any }) => {
  return (
    <section
      id="hero"
      className={`section-main__wrapper ${styles.heroSection}`}
      ref={props.reference}
    >
      <h1 className={styles.h1TagOpen}>
        <span className="rubberband">H</span>
        <span className="rubberband">i</span>
        <span className="rubberband">,</span>
      </h1>
      <h1 className={styles.intro}>
        <span className="rubberband">I</span>
        <span className="rubberband">'</span>
        <span className="rubberband">m</span>
        <span className={`rubberband ${styles.marginLeft}`}>V</span>
        <span className="rubberband">i</span>
        <span className="rubberband">n</span>
        <span className="rubberband">a</span>
        <span className="rubberband">y</span>
        <span className="rubberband">,</span>
      </h1>
      <h1 className={`typewrite ${styles.intro}`}>
        <span className={`rubberband ${styles.openTag}`} />
        <span className="rubberband">W</span>
        <span className="rubberband">e</span>
        <span className="rubberband">b</span>
        <span className="rubberband"></span>
        <span className={`rubberband ${styles.marginLeft}`}>D</span>
        <span className="rubberband">e</span>
        <span className="rubberband">v</span>
        <span className="rubberband">e</span>
        <span className="rubberband">l</span>
        <span className="rubberband">o</span>
        <span className="rubberband">p</span>
        <span className="rubberband">e</span>
        <span className="rubberband">r</span>
        <span className={`rubberband ${styles.closeTag}`} />
      </h1>
      <div className={styles.h1TagClose} />
      <div className={styles.mytitle}>
        <span className={styles.webDeveloper}>Front-End Developer</span>
        <span className={styles.contractor}>Contractor</span>
      </div>
    </section>
  );
};

export default Hero;
