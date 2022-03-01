import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import { AutoplayOptions } from "swiper/types";
import styles from "./gallery.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";

const IMG_ROOT = "/logos/companies";
const playOptions: AutoplayOptions = {
  delay: 2500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

const images = [
  `${IMG_ROOT}/schibsted.png`,
  `${IMG_ROOT}/adevinta.png`,
  `${IMG_ROOT}/pharmeasy.png`,
  `${IMG_ROOT}/zopa.png`,
  `${IMG_ROOT}/pacewisdom.jpeg`,
  `${IMG_ROOT}/talentier.png`,
  `${IMG_ROOT}/leboncoin.jpeg`,
  `${IMG_ROOT}/corotos.jpeg`,
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
          height={300}
          layout="responsive"
          className={styles.imageBackground}
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Gallery;
