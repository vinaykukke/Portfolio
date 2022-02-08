import Head from "next/head";
import Link from "next/link";
import BrandIcon from "components/Logos/BrandIcon";
import JsIcon from "components/Logos/JsIcon";
import styles from "styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vinay Kukke - Javascript Developer / Contractor</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
      </Head>

      <main className={styles.main}>
        <section id="hero" className={styles.heroElement}>
          <div className={styles.heroTitle}>
            <span>Javascript Developer / Contractor</span>
            <JsIcon />
          </div>
          <div className={styles.brand}>
            <BrandIcon />
            <div className={styles.name}>Vinay Kukke</div>
            <p className={styles.tech}>Tech Stack.</p>
          </div>
          <nav>
            <ul className={styles.heroNav}>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
        <section id="about"></section>
        <section id="work"></section>
        <section id="contact"></section>
      </main>
    </div>
  );
}
