import { Suspense } from "react";
import Head from "next/head";
import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";

const randomWords = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "elit",
  "god",
  "alice",
  "twitch",
  "visit",
  "abridge",
  "will",
  "cap",
  "commerce",
  "fame",
  "jump",
  "relative",
  "shorts",
  "Mars",
  "museum",
  "indulge",
  "fashion",
  "due",
  "shallow",
  "ceiling",
  "eat",
  "sustain",
  "slippery",
  "plastic",
  "reason",
  "prize",
  "excavate",
  "economy",
  "chimney",
  "cut",
  "monstrous",
  "premature",
  "dignity",
  "groan",
  "exemption",
  "apparatus",
  "guest",
  "opposed",
  "mile",
  "retailer",
  "singer",
  "aspect",
  "burn",
  "left",
  "conceive",
  "exercise",
];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const over = (e: ThreeEvent<PointerEvent>) => (
    e.stopPropagation(), setHovered(true)
  );
  const out = () => setHovered(false);

  /** Change the mouse cursor on hover */
  // @ts-ignore
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);

  /** Tie component to the render-loop */
  useFrame(({ camera }) => {
    /** Make text face the camera */
    ref.current.quaternion.copy(camera.quaternion);
    /** Animate font color */
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });

  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  /** Create a count x count random words with spherical distribution */
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++) {
      /**
       * Taken from:
       * https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
       */
      for (let j = 0; j < count; j++) {
        const n = Math.floor(Math.random() * randomWords.length);
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          randomWords[n],
        ]);
      }
    }
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </>
  );
}

const WordCloud = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Head>
        <title>Three-Js Word Cloud Demo</title>
      </Head>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <Suspense fallback={null}>
          <fog attach="fog" args={["#202025", 0, 80]} />
          <Cloud count={8} radius={20} />
          <TrackballControls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WordCloud;
