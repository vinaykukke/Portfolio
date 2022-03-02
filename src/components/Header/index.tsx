import { useState } from "react";
import Link from "next/link";
import Nav from "components/Navigation";
import BrandIcon from "components/Logos/BrandIcon";
import LinkedIn from "components/Logos/LinkedIn";
import styles from "./header.module.scss";

const Header = () => {
  const [showOverlay, toggleOverlay] = useState(false);
  const overlayClass = showOverlay
    ? `${styles.overlay} ${styles.open}`
    : `${styles.overlay}`;
  const containerClass = showOverlay
    ? `${styles.button_container} ${styles.active}`
    : `${styles.button_container}`;
  const handleClick = () => {
    toggleOverlay((prev) => {
      /** Toggle the "modal-open" class to disable the scroll on the body */
      document.body.classList.toggle("modal-open");
      return !prev;
    });
  };

  return (
    <>
      <div className={containerClass} id="toggle" onClick={handleClick}>
        <span className={styles.top} />
        <span className={styles.middle} />
        <span className={styles.bottom} />
      </div>
      <div className={overlayClass} id="overlay">
        <Link href="/">
          <div className={styles.headerLogo}>
            <BrandIcon className={styles.redLogo} />
            <BrandIcon className={styles.blueLogo} />
            <div>
              <span className="end-with__backslash">Web Developer</span>
              <span className="begin-with__backslash">Contractor</span>
            </div>
          </div>
        </Link>
        <Nav />
        <a
          className="social"
          href="https://www.linkedin.com/in/vinay-kukke"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </div>
    </>
  );
};

export default Header;
