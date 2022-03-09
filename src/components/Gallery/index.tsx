import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import { AutoplayOptions } from "swiper/types";
import images from "data/imageData";
import styles from "./gallery.module.scss";
import "swiper/css";
import "swiper/css/effect-cards";

const playOptions: AutoplayOptions = {
  delay: 2500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

const Gallery = () => (
  <Swiper
    effect="cards"
    grabCursor
    modules={[EffectCards, Autoplay]}
    className={styles.swiper}
    autoplay={playOptions}
  >
    {images.map((img, i) => (
      <SwiperSlide className={styles.slide} key={i}>
        <Image
          src={img.src}
          alt={img.title}
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
