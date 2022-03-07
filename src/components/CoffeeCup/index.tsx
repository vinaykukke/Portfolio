import React from "react";
import styles from "./CoffeeCup.module.scss";

const CoffeeCup = () => (
  <div className={styles.coffeeCup}>
    <div className={styles.cup} />
    <div className={styles.steam} />
  </div>
);

export default CoffeeCup;
