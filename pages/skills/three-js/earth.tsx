import { Suspense, useRef } from "react";
import THREE from "three";
import Head from "next/head";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import styles from "styles/skills.module.scss";

const Sphere = (props: any) => {
  const [colorMap, normalMap] = useTexture([
    "/earth.jpeg",
    "/normal_map_earth.jpeg",
  ]);
  /** This reference gives us direct access to the THREE.Mesh object */
  const ref = useRef<THREE.Mesh>(null);

  /** Subscribe this component to the render-loop, rotate the mesh every frame */
  useFrame(() => (ref.current.rotation.y += 0.002));

  /** Return the view, these are regular Threejs elements expressed in JSX */
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 64, 32]} attach="geometry" />
      <meshStandardMaterial
        color="#0095ff"
        attach="material"
        opacity={0.6}
        roughness={1}
        metalness={0}
        map={colorMap}
        normalMap={normalMap}
      />
    </mesh>
  );
};

const DeepSpace = () => {
  const { scene } = useThree();
  const loader = new TextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load("/deep-space.png");
  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
};

/** Using THREE features without drei package */
// const CameraController = () => {
//   const { camera, gl } = useThree();
//   const effect = () => {
//     const controls = new OrbitControls(camera, gl.domElement);

//     controls.minDistance = 3;
//     controls.maxDistance = 20;
//     /**
//      * Must be called after any manual changes to the camera's transform,
//      * OR if controls.enableDamping or controls.autoRotate are set to true
//      */
//     controls.update();
//     return () => controls.dispose();
//   };
//   useEffect(effect, [camera, gl]);
//   /** Must "return null" in order to be able to use it as a react component OR as JSX*/
//   return null;
// };

const Skills = () => (
  <section id="three-js" className={styles.canvas_container__three}>
    <Head>
      <title>Three-Js Model Earth Demo</title>
    </Head>
    <Canvas>
      <OrbitControls />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={100}
        fade
      />
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <DeepSpace />
    </Canvas>
  </section>
);

export default Skills;
