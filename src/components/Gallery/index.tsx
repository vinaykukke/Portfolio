import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import styles from "./gallery.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";

const Gallery = () => (
  <Swiper
    effect="cards"
    grabCursor
    modules={[EffectCards, Autoplay]}
    className={styles.swiper}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
  >
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/schibsted.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/adevinta.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/pharmeasy.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/zopa.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/pacewisdom.jpeg"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/talentier.png"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/leboncoin.jpeg"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
    <SwiperSlide className={styles.slide}>
      <Image
        src="/logos/companies/corotos.jpeg"
        width={250}
        height={250}
        layout="responsive"
        className={styles.imageBackground}
      />
    </SwiperSlide>
  </Swiper>
);

export default Gallery;
