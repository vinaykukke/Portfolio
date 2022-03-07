import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = () => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
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
        <Link href="/contact">
          <a href="#">Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
