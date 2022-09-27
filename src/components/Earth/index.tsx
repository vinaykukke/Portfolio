import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const Earth = (props: any) => {
  const group = useRef();
  const { camera } = useThree();
  const { nodes, materials } = useGLTF("/models/earth_displacement_LP.glb");
  const earthMesh = nodes.Earth_With_Displament as Mesh;

  camera.far = 50000;
  camera.position.setZ(-1200);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Earth_With_Displament"
          castShadow
          receiveShadow
          geometry={earthMesh.geometry}
          material={materials["Earth Displacement"]}
        />
      </group>
    </group>
  );
};

export default Earth;

useGLTF.preload("/models/earth_displacement_LP.glb");
