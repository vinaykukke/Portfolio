import React from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const MarbleBust = (props: any) => {
  const { nodes, materials } = useGLTF("/models/marble_bust_01_8k.glb");
  const mesh = nodes.marble_bust_01 as Mesh;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={materials.marble_bust_01}
        position={[0, -0.2, 0]}
      />
    </group>
  );
};

export default MarbleBust;

useGLTF.preload("/models/marble_bust_01_8k.glb");
