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
        <div className={styles.container}>
          <section id="hero" className={styles.heroElement}>
            <div className={styles.heroTitle}>
              <h1>Hi,</h1>
              <h1>I am,</h1>
              <h1>Vinay Kukke</h1>
              <span className={styles.webDeveloper}>Web Developer</span>
              <span className={styles.contractor}>Contractor</span>
            </div>
          </section>
          <section id="about"></section>
          <section id="work"></section>
          <section id="contact"></section>
        </div>
      </main>
    </>
  );
}
