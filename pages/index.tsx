import Head from "next/head";
import styles from "styles/home.module.scss";
import getMetaTags from "data/metaData";
import Header from "components/Header";

export default function Home() {
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
        <div className={styles.htmlOpen} />
        <div className={styles.bodyOpen} />
        <div className={styles.container}>
          <section id="hero" className={styles.heroElement}>
            <h1 className={styles.h1TagOpen}>
              <span className={styles.rubberband}>H</span>
              <span className={styles.rubberband}>i</span>
              <span className={styles.rubberband}>,</span>
            </h1>
            <h1>
              <span className={styles.rubberband}>I</span>
              <span className={styles.rubberband}>'</span>
              <span className={styles.rubberband}>m</span>
              <span className={`${styles.rubberband} ${styles.marginLeft}`}>
                V
              </span>
              <span className={styles.rubberband}>i</span>
              <span className={styles.rubberband}>n</span>
              <span className={styles.rubberband}>a</span>
              <span className={styles.rubberband}>y</span>
              <span className={styles.rubberband}>,</span>
            </h1>
            <h1>
              <span className={`${styles.rubberband} ${styles.openTag}`} />
              <span className={styles.rubberband}>W</span>
              <span className={styles.rubberband}>e</span>
              <span className={styles.rubberband}>b</span>
              <span className={styles.rubberband}></span>
              <span className={`${styles.rubberband} ${styles.marginLeft}`}>
                D
              </span>
              <span className={styles.rubberband}>e</span>
              <span className={styles.rubberband}>v</span>
              <span className={styles.rubberband}>e</span>
              <span className={styles.rubberband}>l</span>
              <span className={styles.rubberband}>o</span>
              <span className={styles.rubberband}>p</span>
              <span className={styles.rubberband}>e</span>
              <span className={styles.rubberband}>r</span>
              <span className={`${styles.rubberband} ${styles.closeTag}`} />
              <div className={styles.h1TagClose} />
            </h1>
            <span className={styles.webDeveloper}>Front-End Developer</span>
            <span className={styles.contractor}>Contractor</span>
          </section>
          <section id="about"></section>
          <section id="work"></section>
          <section id="contact"></section>
        </div>
      </main>
    </>
  );
}
