import { Suspense } from "react";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "components/Earth";
import styles from "styles/skills.module.scss";

const Skills = () => {
  return (
    <section id="three-js" className={styles.canvas_container__three}>
      <Head>
        <title>Three-Js Model Earth Demo</title>
      </Head>
      <Canvas>
        <OrbitControls
          screenSpacePanning={false}
          minDistance={1200}
          maxDistance={1200.1}
        />
        <Stars
          radius={500}
          depth={50}
          count={5000}
          factor={4}
          saturation={100}
          fade
        />
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Skills;
