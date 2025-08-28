import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React from 'react'
import {  MathUtils } from 'three';

const Scene = () => {
    let model = useGLTF("/mac.glb");
    let texture = useTexture("/red.jpg")
    let data = useScroll();
    let meshes = {};
    model.scene.traverse(e => {
        meshes[e.name] = e;
    })

    meshes.screen.rotation.x = MathUtils.degToRad(-180);
    meshes.matte.material.map = texture;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    
    useFrame((state, delta) => {
        meshes.screen.rotation.x = MathUtils.degToRad(-180 - data.offset * 90);
    })
    return (
      
      <group position={[0,-10,20]}>
          
          <primitive object={model.scene} />
      </group>
      
  )
}

export default Scene
