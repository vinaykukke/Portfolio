import * as React from "react";
import Image from "next/image";
import styles from "./gallery.module.scss";

const Gallery = () => (
  <div className={styles.row}>
    <div className={styles.column}>
      <Image
        src="/logos/companies/schibsted.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
      <Image
        src="/logos/companies/adevinta.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </div>
    <div className={styles.column}>
      <Image
        src="/logos/companies/pharmeasy.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
      <Image
        src="/logos/companies/zopa.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </div>
    <div className={styles.column}>
      <Image
        src="/logos/companies/pacewisdom.jpeg"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
      <Image
        src="/logos/companies/talentier.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </div>
    <div className={styles.column}>
      <Image
        src="/logos/companies/leboncoin.jpeg"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
      <Image
        src="/logos/companies/corotos.jpeg"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </div>
  </div>
);

export default Gallery;
