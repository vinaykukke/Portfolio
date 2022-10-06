const IMG_ROOT = "/skills";
const skills = [
  {
    src: `${IMG_ROOT}/earth.jpeg`,
    title: "model earth",
    about:
      "Low poly model of the Earth with a displacement map to show case the various mountain ranges.",
    link: "earth",
  },
  {
    src: `${IMG_ROOT}/wave.png`,
    title: "Wave Function",
    about:
      "Wave function animation - Modeled after a sine function and animated.",
    link: "wave-function-animation",
  },
  {
    src: `${IMG_ROOT}/word-cloud.png`,
    title: "Word Cloud",
    about:
      "Creating a 3D sphere and mapping words onto the sphere to provide for a cool ball-like effect.",
    link: "word-cloud",
  },
  {
    src: `${IMG_ROOT}/marble-bust.png`,
    title: "Marble Bust",
    about:
      "A low poly 3D model of a marble bust with baked normal, AO, roughness and emission map.",
    link: "marble-bust",
  },
  {
    src: `${IMG_ROOT}/wooden-table.png`,
    title: "Wooden Table",
    about:
      "A low poly 3D model of a wooden table with baked normal, AO, roughness and emission map.",
    link: "wooden-table",
  },
  {
    src: `${IMG_ROOT}/rock.png`,
    title: "Rock",
    about:
      "A low poly 3D model of a rock with baked normal, AO, roughness and emission map.",
    link: "rock",
  },
  {
    src: `${IMG_ROOT}/animated-ball.png`,
    title: "Animated Ball",
    about:
      "A colorful ball that animates on click. The waves are modeled after a sine function",
    link: "animated-ball",
  },
  {
    src: `${IMG_ROOT}/gas_giant_thumbnail.png`,
    title: "Gas Giant",
    about:
      "A medium poly 3D model of a gas giant like planet with a ring system and alpha map.",
    link: "gas-giant",
  },
];

export const photoRendersData = [
  {
    src: `${IMG_ROOT}/marble-bust.png`,
    thumbnail: `${IMG_ROOT}/marble-bust.png`,
  },
  {
    src: `${IMG_ROOT}/earth.png`,
    thumbnail: `${IMG_ROOT}/earth_thumbnail.png`,
  },
  {
    src: `${IMG_ROOT}/hologram.png`,
    thumbnail: `${IMG_ROOT}/hologram_thumbnail.png`,
  },
  {
    src: `${IMG_ROOT}/gas_giant.png`,
    thumbnail: `${IMG_ROOT}/gas_giant_thumbnail.png`,
  },
];

export const animationsData = [
  {
    src: `${IMG_ROOT}/hologram.mp4`,
    thumbnail: `${IMG_ROOT}/hologram_thumbnail.png`,
  },
];

export default skills;
