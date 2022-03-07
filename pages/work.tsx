import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { AutoplayOptions, CoverflowEffectOptions } from "swiper/types";
import styles from "styles/work.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const IMG_ROOT = "/logos/companies";
const playOptions: AutoplayOptions = {
  delay: 2500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};
const coverFlowOptions: CoverflowEffectOptions = {
  rotate: 30,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: false,
};
const images = [
  `${IMG_ROOT}/schibsted.png`,
  `${IMG_ROOT}/adevinta.png`,
  `${IMG_ROOT}/pharmeasy.png`,
  `${IMG_ROOT}/india-gold.jpeg`,
  `${IMG_ROOT}/zopa.png`,
  `${IMG_ROOT}/pacewisdom.jpeg`,
  `${IMG_ROOT}/talentier.png`,
  `${IMG_ROOT}/leboncoin.png`,
  `${IMG_ROOT}/corotos.jpeg`,
];

const Work = () => {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        pagination
        slidesPerView={4}
        autoplay={playOptions}
        coverflowEffect={coverFlowOptions}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {images.map((src, i) => (
          <SwiperSlide className={styles.slide_work} key={i}>
            <Image
              src={src}
              width={500}
              height={500}
              layout="responsive"
              className={styles.image_work}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Work;
