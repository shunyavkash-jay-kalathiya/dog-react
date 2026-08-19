import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { color, normalMap } from "three/tsl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Dog() {
  const model = useGLTF("/models/dog.drc.glb");

  useThree(({ camera, scene, gl }) => {
    // console.log(camera.position);
    camera.position.z = 0.55;
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  // const texture = useTexture({
  //   normalMap: "/dog_normals.jpg",
  //   sampleMatcap:"/matcap/mat-2.png"
  // });

  // texture.normalMap.flipY = false
  // texture.sampleMatcap.colorSpace = THREE.SRGBColorSpace

  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  const [normalMap, sampleMatcap] = useTexture(["/dog_normals.jpg", "/matcap/mat-2.png"]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const [branchMap, branchNormalMap] = useTexture(["/branches_diffuse.jpeg", "/branches_normals.jpeg"]).map((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMatcap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    map: branchMap,
  });

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else {
      child.material = branchMaterial;
    }
  });
  const dogModel = useRef(model);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec-1",
        start: "top top",
        markers: true,
        scrub: true,
        endTrigger: "#sec-3",
        end: "bottom bottom",
      },
    });
    tl.to(dogModel.current.scene.position, {
      z: "-=0.5",
      x: "+=0.1",
    })
      .to(dogModel.current.scene.rotation, {
      x: `+=${Math.PI /15}`
    })
    .to(dogModel.current.scene.rotation, {
      y: `-=${Math.PI}`
    } ,"third")
    .to(dogModel.current.scene.position, {
      x: "-=0.5",
      z:"+=0.4",
      y:"-=0.02",
    } ,"third")
  }, []);

  return (
    <>
      <primitive object={model.scene} position={[0.25, -0.55, 0]} rotation={[0, Math.PI / 3.9, 0]} />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
      {/* <OrbitControls /> */}
    </>
  );
}

export default Dog;
