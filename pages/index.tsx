import { useState, useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "styles/home.module.scss";
import getMetaTags from "data/metaData";
import Header from "components/Header";
import Hero from "components/Hero";
import Portfolio from "components/Portfolio";

const Home = () => {
  const [showScroll, setScroll] = useState(true);
  const loader = useRef(null);
  const handleObserver = useCallback<IntersectionObserverCallback>(
    (entries) => {
      // Doing this because im observing one element
      const target = entries[0];
      if (target.isIntersecting) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    },
    [setScroll]
  );
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (loader.current) observer.observe(loader.current);

    return observer.disconnect;
  }, [handleObserver]);

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
          <Portfolio reference={loader} />
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
