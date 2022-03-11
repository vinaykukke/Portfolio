import { useCallback, useRef, useState, memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./portfolio.module.scss";

/** Importing Gallery on demand */
const Gallery = dynamic(() => import("components/Gallery"), {
  loading: () => <CircularProgress />,
});

const Portfolio = () => {
  const [visible, setVisible] = useState(false);
  const observer = useRef<IntersectionObserver>(null);
  const handleObserver: IntersectionObserverCallback = (entries) => {
    /** Go through all entities that are being observed and check for intersection */
    entries.forEach((entry) => entry.isIntersecting && setVisible(true));
  };
  const handleCallback = (node: Element) => {
    /** Remove pre-existing observer entities */
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    /** If the reference node is present then observe that node */
    if (node) observer.current.observe(node);
  };
  const reference = useCallback(handleCallback, []);

  return (
    <section id="work" className="section-main__wrapper" ref={reference}>
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
      <div className={styles.gallery_container__skeleton}>
        {visible && <Gallery />}
      </div>
    </section>
  );
};

export default memo(Portfolio);
