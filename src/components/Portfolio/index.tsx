import * as React from "react";
import Link from "next/link";
import styles from "./portfolio.module.scss";
import Gallery from "components/Gallery";

const Portfolio = () => (
  <section id="work" className={`section-main__padding ${styles.workSection}`}>
    <h2>My Portfolio</h2>
    <p>
      A small gallery of recent projects chosen by me. Ive done them all
      together with amazing people in different countries all over the world.
      <br />
      <br />
      Interested in seeing more? Visit{" "}
      <Link href="/work">
        <a href="#" className="anchor">
          My Work
        </a>
      </Link>{" "}
      Page
    </p>
    <Gallery />
  </section>
);

export default Portfolio;
