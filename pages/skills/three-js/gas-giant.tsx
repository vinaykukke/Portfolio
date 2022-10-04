import { Suspense } from "react";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import GasGiant from "components/GasGiant";
import styles from "styles/skills.module.scss";

const ModelGasGiant = () => {
  return (
    <section id="three-js" className={styles.canvas_container__three}>
      <Head>
        <title>Three-Js High Poly model of a gas giant - Demo</title>
      </Head>
      <Canvas>
        <OrbitControls
          screenSpacePanning={false}
          enablePan={false}
          minDistance={0}
          maxDistance={10}
        />
        <Stars
          radius={500}
          depth={10}
          count={5000}
          factor={15}
          saturation={100}
          fade
        />
        <spotLight intensity={10} position={[9.819, 10, 25.34]} />
        <Suspense fallback={null}>
          <GasGiant />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default ModelGasGiant;
