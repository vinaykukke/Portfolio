import React from "react";
import { keyWords } from "./keywords";

const getMetaTags = () => (
  <>
    <meta
      property="og:title"
      content="Vinay Kukke - Javascript / Web Developer / Contractor"
      key="title"
    />
    <meta property="og:type" content="website" />
    <meta name="geo.placename" content="Bengaluru" />
    <meta name="geo.region" content="IN-KA" />
    <meta name="Keywords" content={keyWords.join(", ")} />
    <meta
      property="og:site_name"
      content="Vinay Kukke - Javascript / Web Developer / Contractor"
    />
    <meta property="og:url" content="https://kukke.dev" />
    <meta
      property="og:description"
      content="Experienced Full Stack Developer: Javascript "
    />
    <meta
      property="og:image"
      content="https://kukke.dev/_next/image?url=%2Flogos%2Fvk.png"
    />
    <meta
      name="description"
      key="description"
      content="Experienced Full Stack Developer with a demonstrated history of working in the software industry. Building apps for mobile and web. Skilled in NodeJS, React, React Native, Typescript, Javascript, vanilla JavaScript, NextJS, Graphql, Redux, Redux Sagas, Flutter, AWS, Strapi, Shopify, Apollo, Docker, Firebase, MongoDB, Webpack, SocketIO, HTML5, CSS, SCSS, Wordpress, Drupal, Google Analytics and PHP. Strong engineering professional with a Bachelors degree in electrical and electronics engineering with a focus in communication and a Masters degree in Computer Science"
    />
    <link rel="canonical" href="https://kukke.dev" key="canonical" />
  </>
);

export default getMetaTags;
