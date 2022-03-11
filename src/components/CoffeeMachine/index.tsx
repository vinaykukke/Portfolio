import React from "react";
import styles from "./CoffeeMachine.module.scss";

const CoffeeMachine = () => {
  const { useState } = React;
  const [className, setClassName] = useState(styles.machine);
  const handleClick = () => {
    setClassName(`${styles.machine} ${styles.active}`);
    setTimeout(function () {
      setClassName(styles.machine);
    }, 5300);
  };

  return (
    <>
      <div className={styles.box}>
        <div className={className}>
          <div className={styles.topSectionUpper}>
            <div className={styles.dial}>
              <div className={styles.dialInner} />
              <div className={styles.indicator} />
            </div>
            <div className={styles.leftLight} />
            <div className={styles.rightShadow} />
          </div>
          <div className={`${styles.button} ${styles.makeCoffee}`} />
          <div className={styles.topSectionLower} />
          <div className={styles.middleSection}>
            <div className={styles.leftLight} />
            <div className={styles.rightShadow} />
            <div className={`${styles.dispenser} ${styles.dispenserLeft}`}>
              <div className={styles.handle} />
              <div className={styles.spout}>
                <div className={styles.leftLight} />
                <div className={styles.rightShadow} />
              </div>
              <div className={styles.leftLight} />
              <div className={styles.rightShadow} />
              <div className={styles.coffee} />
            </div>
            <div className={`${styles.dispenser} ${styles.dispenserRight}`}>
              <div className={styles.handle} />
              <div className={styles.spout}>
                <div className={styles.leftLight} />
                <div className={styles.rightShadow} />
              </div>
              <div className={styles.leftLight} />
              <div className={styles.rightShadow} />
              <div className={styles.coffee} />
            </div>
            <div className={`${styles.coffeeCup} ${styles.coffeeCupLeft}`}>
              <div className={styles.leftLight} />
              <div className={styles.rightShadow} />
              <div className={styles.steamLeft} />
              <div className={styles.steamRight} />
            </div>
            <div className={`${styles.coffeeCup} ${styles.coffeeCupRight}`}>
              <div className={styles.leftLight} />
              <div className={styles.rightShadow} />
              <div className={styles.steamLeft} />
              <div className={styles.steamRight} />
            </div>
          </div>
          <div className={styles.base}>
            <div className={styles.leftLight} />
            <div className={styles.rightShadow} />
          </div>
          <div className={styles.counter} />
        </div>
      </div>
      <div
        className={`${styles.button02} ${styles.makeCoffee}`}
        onClick={handleClick}
      >
        Make Coffee
      </div>
    </>
  );
};

export default CoffeeMachine;
