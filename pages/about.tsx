import DisplayCard from "components/DisplayCard";
import Head from "next/head";
import styles from "styles/about.module.scss";

const About = () => (
  <div className={styles.main}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <DisplayCard />
  </div>
);

export default About;
