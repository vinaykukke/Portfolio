import Head from "next/head";
import Typography from "@mui/material/Typography";
import styles from "styles/about.module.scss";

const About = () => (
  <section className="section-main__wrapper">
    <Head>
      <title>About - Vinay Kukke</title>
    </Head>
    <Typography className={styles.about} variant="h1" color="text.primary">
      <span>About</span>
      <span className={styles.me}>Me</span>
      <span className={styles.period}>.</span>
    </Typography>
    <Typography variant="h3" mt="2rem" gutterBottom color="text.primary">
      I'm a Web Developer with over 8 years of experiences in wide range of web
      technologies.
    </Typography>
    <Typography mt="1rem" color="text.primary">
      You can also call me a senior developer, señor developer, full stack
      developer, frontend developer or by any other market defined
      function-title. I'm also a multi-disciplinary maker with over 8 years of
      experiences in wide range of disciplines, manager, advisor, entrepreneur,
      traveler, philosopher and more.
    </Typography>
    <Typography mt="1rem" color="text.primary">
      I don’t like to define myself by the work I’ve done. I define myself by
      the work I want to do. Skills can be taught - everything can be learned
      with eough time, single minded focus and deication. I live by this
      philosophy. I prefer to keep learning, continue challenging myself, and do
      interesting things.
    </Typography>
    <Typography mt="1rem" color="text.primary">
      Fueled by high energy levels and enthusiasm, I’m easily inspired and more
      then willing to follow my fascinations wherever they take me. I’m
      passionate, expressive, multi-talented spirit with a natural ability to
      entertain and inspire.
    </Typography>
    <Typography mt="1rem" color="text.primary">
      My abundant energy fuels me in the pursuit of many interests, hobbies,
      areas of study and artistic endeavors. I’m a fast learner, able to pick up
      new skills and juggle different projects and roles with relative ease.
    </Typography>
    <Typography mt="1rem" mb="3rem" color="text.primary">
      I like to develop expertise in a number of areas over the course of my
      life and career. I currently work remotely with a selected freelance
      client base and I'm open for new opportunities.
    </Typography>
  </section>
);

export default About;
