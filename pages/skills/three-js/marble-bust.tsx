import { Suspense } from "react";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bust from "components/MarbelBust";
import styles from "styles/skills.module.scss";

const MarbelBust = () => {
  return (
    <section id="three-js" className={styles.canvas_container__three}>
      <Head>
        <title>Three-Js Model Bust Demo</title>
      </Head>
      <Canvas>
        <OrbitControls
          screenSpacePanning={false}
          enablePan={false}
          minDistance={0.5}
          maxDistance={0.5}
        />
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <Bust />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default MarbelBust;
