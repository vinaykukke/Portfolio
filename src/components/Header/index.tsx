import * as React from "react";
import Link from "next/link";
import Nav from "components/Navigation";
import BrandIcon from "components/Logos/BrandIcon";
import LinkedIn from "components/Logos/LinkedIn";
import styles from "./header.module.scss";

const Header = () => (
  <div className={styles.headerContainer}>
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
);

export default Header;
