import { Suspense, useCallback, useMemo, useRef } from "react";
import THREE from "three";
import Head from "next/head";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const Points = () => {
  const colorMap = useTexture("/point.png");
  const bufferRef = useRef<THREE.BufferAttribute>(null);
  let t = 0;
  let f = 0.002;
  let a = 4;
  const graph = useCallback(
    (x, z) => Math.sin(f * (x ** 2 + z ** 2 + t)) * a,
    [a, t, f]
  );
  const count = 100;
  const sep = 3;
  const positions = useMemo(() => {
    const arr = [];
    /** Printing points along the XZ plane 100x100 grid */
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = graph(x, z);
        arr.push(x, y, z);
      }
    }
    return new Float32Array(arr);
  }, [count, sep, graph]);

  useFrame(() => {
    const positions = bufferRef.current.array;
    t += 15;
    let i = 0;
    /** Itirate through all the points on the XZ plane and change Y for each one of them */
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        // @ts-ignore
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }
    /** Force the component to update */
    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={["attributes", "position"]}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.5}
        color="#ffffff"
        alphaTest={0.5}
        sizeAttenuation
        transparent={true}
        opacity={1.0}
        map={colorMap}
      />
    </points>
  );
};

const WaveFunction = () => (
  <div style={{ height: "100vh" }}>
    <Head>
      <title>Three-Js Wave Function Animation Demo</title>
    </Head>
    <Canvas camera={{ position: [100, 50, 0], fov: 75 }}>
      <OrbitControls />
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  </div>
);

export default WaveFunction;
