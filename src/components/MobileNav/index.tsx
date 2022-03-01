import { useState } from "react";
import styles from "./mobilenav.module.scss";

const MobileNav = () => {
  const [showOverlay, toggleOverlay] = useState(false);
  const overlayClass = showOverlay
    ? `${styles.overlay} ${styles.open}`
    : `${styles.overlay}`;
  const containerClass = showOverlay
    ? `${styles.button_container} ${styles.active}`
    : `${styles.button_container}`;
  const handleClick = () => toggleOverlay((prev) => !prev);

  return (
    <>
      <div className={containerClass} id="toggle" onClick={handleClick}>
        <span className={styles.top} />
        <span className={styles.middle} />
        <span className={styles.bottom} />
      </div>
      <div className={overlayClass} id="overlay">
        <nav className={styles.overlayMenu}>
          <ul>
            <li>
              {/* <Link href="/about">About</Link> */}
              About
            </li>
            <li>
              {/* <Link href="/skills">My Skills</Link> */}
              My Skills
            </li>
            <li>
              {/* <Link href="/work">Work</Link> */}
              Work
            </li>
            <li>
              {/* <Link href="/contact">Contact</Link> */}
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
