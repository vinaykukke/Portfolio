import { Suspense } from "react";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WoodenTable from "components/WoodenTable";
import styles from "styles/skills.module.scss";

const ModelTable = () => {
  return (
    <section id="three-js" className={styles.canvas_container__three}>
      <Head>
        <title>Three-Js Wooden Table Demo</title>
      </Head>
      <Canvas>
        <OrbitControls
          screenSpacePanning={false}
          minDistance={0}
          maxDistance={2}
        />
        <ambientLight intensity={2} />
        <Suspense fallback={null}>
          <WoodenTable />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default ModelTable;
