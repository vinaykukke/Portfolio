import * as React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

const Nav = () => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/work">Work</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
