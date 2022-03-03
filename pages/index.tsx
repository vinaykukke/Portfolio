import { useState, useCallback, useRef } from "react";
import Head from "next/head";
import styles from "styles/home.module.scss";
import getMetaTags from "data/metaData";
import Hero from "components/Hero";
import Portfolio from "components/Portfolio";
import About from "components/About";

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
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        {getMetaTags()}
      </Head>
      <Hero reference={reference} />
      <Portfolio />
      <About />
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
