import Card from "components/Card";
import DisplayCard from "components/DisplayCard";
import styles from "styles/about.module.scss";

const About = () => (
  <div className={styles.main}>
    <h1>This is the about page</h1>
    <Card
      src="/products/instant-coffee.png"
      specs={{
        title: "Vinay Kukke",
        description: "Javascript Developer",
        price: 0,
      }}
    />
    <DisplayCard />
  </div>
);

export default About;
