import Head from "next/head";
import AnimatedBall from "components/Ball";
import styles from "styles/skills.module.scss";

const MarbelBust = () => {
  return (
    <section id="three-js" className={styles.canvas_container__three}>
      <Head>
        <title>Three-Js Animated Ball - Demo</title>
      </Head>
      <AnimatedBall />
    </section>
  );
};

export default MarbelBust;
