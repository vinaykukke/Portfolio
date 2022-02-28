import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import { AutoplayOptions } from "swiper/types";
import styles from "./gallery.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";

const playOptions: AutoplayOptions = {
  delay: 2500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

const images = [
  "/logos/companies/schibsted.png",
  "/logos/companies/adevinta.png",
  "/logos/companies/pharmeasy.png",
  "/logos/companies/zopa.png",
  "/logos/companies/pacewisdom.jpeg",
  "/logos/companies/talentier.png",
  "/logos/companies/leboncoin.jpeg",
  "/logos/companies/corotos.jpeg",
];

const Gallery = () => (
  <Swiper
    effect="cards"
    grabCursor
    modules={[EffectCards, Autoplay]}
    className={styles.swiper}
    autoplay={playOptions}
  >
    {images.map((src, i) => (
      <SwiperSlide className={styles.slide} key={i}>
        <Image
          src={src}
          width={250}
          height={250}
          layout="responsive"
          className={styles.imageBackground}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Gallery;
