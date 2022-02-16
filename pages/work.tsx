import Head from "next/head";
import styles from "styles/work.module.scss";

const Work = () => (
  <section className={styles.main}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className={styles.chapterTitle}>
      <h1 className={styles.title}>Work</h1>
      <nav>
        <ul className={styles.workList}>
          <li className={styles.work}>
            <a href="#Schibsted">Schibsted</a>
          </li>
          <li className={styles.work}>
            <a href="#Adevinta">Adevinta</a>
          </li>
          <li className={styles.work}>
            <a href="#Leboncoin">Leboncoin</a>
          </li>
          <li className={styles.work}>
            <a href="#Zopa">Zopa</a>
          </li>
          <li className={styles.work}>
            <a href="#PharmEasy">PharmEasy</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className={styles.chapterContent}></div>
  </section>
);

export default Work;
