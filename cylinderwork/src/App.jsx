import { Canvas } from '@react-three/fiber'
import React from 'react';
import "./style.css"
import { OrbitControls} from '@react-three/drei';

import Scene from './Scene';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {

  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <Scene />
        <EffectComposer
        // enabled?: boolean
        // depthBuffer?: boolean
        // enableNormalPass?: boolean
        // stencilBuffer?: boolean
        // autoClear?: boolean
        // multisampling?: number
        // frameBufferType?: TextureDataType
        // /** For effects that support DepthDownsamplingPass */
        // resolutionScale?: number
        // renderPriority?: number
        // camera?: THREE.Camera
        // scene?: THREE.Scene
        >
          <Bloom
            intensity={1.0} // The bloom intensity.
            // blurPass={undefined} // A blur pass.
            // kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            mipmapBlur // Enables or disables mipmap blur.
            // resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
            // resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
      <div className="page w-full h-full bg-black text-white">WellCome to Page1 which has animation</div>
      <div className="page w-full h-full">Page2</div>
      <div className="page w-full h-full">Page3</div>
    </>
  );
}

export default App
