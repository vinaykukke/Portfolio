import { useState, useCallback, useRef } from "react";
import Head from "next/head";
import Hero from "components/Hero";
import Portfolio from "components/Portfolio";
import styles from "styles/home.module.scss";

const Home = () => {
  const [showScroll, setScroll] = useState(true);
  const observer = useRef<IntersectionObserver>(null);
  const handleObserver: IntersectionObserverCallback = (entries) => {
    /** Go through all entities that are being observed and check for intersection */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  };

  const handleCallback = (node: Element) => {
    /** Remove pre-existing observer entities */
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver, {
      threshold: 0.9,
    });

    /** If the reference node is present then observe that node */
    if (node) observer.current.observe(node);
  };
  const reference = useCallback(handleCallback, []);

  return (
    <>
      <Head>
        <title>Vinay Kukke - Javascript Developer / Contractor</title>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
        />
      </Head>
      <Hero reference={reference} />
      <Portfolio />
      {showScroll && (
        <div className={styles.scrollIdnicator}>
          <div
            className={`${styles.magicMouse} ${styles.scroll} ${styles.vertical} ${styles.presantion}`}
          >
            <i>↑↓</i>
          </div>
          <div className={styles.scrollDown}>↓ Scroll Down ↓</div>
        </div>
      )}
    </>
  );
};

export default Home;
