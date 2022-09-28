import Head from "next/head";
import Hero from "components/Hero";
import AnimatedBall from "components/Ball";

const Home = () => {
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
      <Hero />
      <AnimatedBall />
    </>
  );
};

export default Home;
