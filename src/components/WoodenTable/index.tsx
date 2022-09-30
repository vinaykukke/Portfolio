import React from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useThree } from "@react-three/fiber";

const WoodenTable = (props: any) => {
  const { camera } = useThree();
  const { nodes, materials } = useGLTF("/models/wooden_table__4k.glb");
  const mesh = nodes.wooden_table_02 as Mesh;

  camera.position.setZ(-2);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={materials.wooden_table_02}
      />
    </group>
  );
};

export default WoodenTable;

useGLTF.preload("/models/wooden_table__4k.glb");
