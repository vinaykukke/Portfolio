import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = () => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      <Link href="/about">
        <li>About</li>
      </Link>
      <li>
        {/* <Link href="/skills">My Skills</Link> */}
        My Skills
      </li>
      <Link href="/work">
        <li>Work</li>
      </Link>
      <Link href="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
