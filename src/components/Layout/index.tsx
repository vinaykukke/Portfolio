import * as React from "react";
import Header from "components/Header";
import styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>{children}</main>
  </>
);

export default Layout;
