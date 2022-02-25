import { useState, useCallback, useRef } from "react";
import Head from "next/head";
import styles from "styles/home.module.scss";
import getMetaTags from "data/metaData";
import Header from "components/Header";
import Hero from "components/Hero";
import Portfolio from "components/Portfolio";

const Home = () => {
  const [showScroll, setScroll] = useState(true);
  const observer = useRef<IntersectionObserver>(null);
  const handleObserver: IntersectionObserverCallback = (entries) => {
    /** Doing this only because im observing one entity */
    const entry = entries[0];

    if (entry.isIntersecting) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  const handleCallback = (node: Element) => {
    /** Remove pre-existing observer entities */
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver);

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
      <main className={styles.main}>
        <Header />
        <div className={styles.foreground}>
          <Hero />
          <Portfolio reference={reference} />
        </div>
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
      </main>
    </>
  );
};

export default Home;
