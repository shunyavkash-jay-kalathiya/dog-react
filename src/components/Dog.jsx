import React from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { log } from "three";
import { normalMap } from "three/tsl";

function Dog() {
  const model = useGLTF("/models/v20.glb");

  useThree(({ camera, scene, gl }) => {
    console.log(camera.position);
    camera.position.z = 2;
  });

  const texture = useTexture({
    normalMap:"/models/waves.jpg"
  })

  model.scene.traverse((child) => {

    if (child.name.includes("wing")) {
          console.log(child.name)
    }
  })

  return (
    <>
      <primitive object={model.scene} position={[0.3, -0, 0]} rotation={[0, Math.PI / 10  , 0]} />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
      <OrbitControls />
    </>
  );
}

export default Dog;
