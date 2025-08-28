import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'

const Canva = () => {
  return (
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      {/* <OrbitControls /> */}
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr",
        ]}
          />
          <ScrollControls pages={3}>
              
      <Scene />
          </ScrollControls>
    </Canvas>
  );
}

export default Canva
