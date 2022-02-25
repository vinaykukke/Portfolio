import Header from "components/Header";
import Image from "next/image";
import styles from "styles/dedication.module.scss";

const Dedication = () => {
  return (
    <section className="section-main__padding">
      <Header />
      <div className={styles.prayer}>
        <h2>Dedications</h2>
        <h3>This work is a Dedication to Sri Ramakrishna.</h3>
        <p>Hari Om!</p>
        <p>Tat Sat</p>
        <p>Sri Ramakrishnarpanamastu</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.child}>
          <Image
            src="/swamiji.jpeg"
            layout="responsive"
            width={320}
            height={400}
          />
        </div>

        <div className={styles.child}>
          <Image
            src="/sriramakrishna.jpeg"
            layout="responsive"
            width={320}
            height={400}
          />
        </div>

        <div className={styles.child}>
          <Image
            src="/mother.jpeg"
            layout="responsive"
            width={320}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Dedication;
