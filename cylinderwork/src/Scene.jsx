import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { DoubleSide } from 'three';
const Scene = () => {
    const texture = useTexture("/image.png");
    const cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })
    return (
      <group rotation={[0, 1.5, 0.5]}>
        <mesh ref={cyl}>
          <cylinderGeometry
            args={[
              1, //(radiusTop: Float),
              1, // (radiusBottom: Float),
              1, // (height: Float),
              60, // (radialSegments: Integer),
              60, // (heightSegments: Integer),
              true, // (openEnded: Boolean),
              // (thetaStart: Float),
              // (thetaLength: Float),
            ]}
          />
          <meshStandardMaterial map={texture} side={DoubleSide} transparent />
        </mesh>
      </group>
    );
}

export default Scene
