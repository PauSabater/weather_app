// @ts-nocheck

// import React, { useMemo } from "react";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { BufferAttribute } from "three";
// import styles from "./Particles.module.scss"

// function BufferPoints({ count = 1000 }) {
//   const points = useMemo(() => {
//     const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
//     return new BufferAttribute(new Float32Array(p), 3);
//   }, [count]);

//   return (
//     <points>
//       <bufferGeometry>
//         <bufferAttribute attach={"attributes-position"} {...points} />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.3}
//         threshold={0.1}
//         color={0x348feb}
//         sizeAttenuation={true}
//       />
//     </points>
//   );
// }

// export function Particles() {
//   return (
//     <div className={styles.scene}>
//         <Canvas>
//             <BufferPoints />
//             <OrbitControls />
//         </Canvas>
//     </div>
//   );
// };


import { OrbitControls } from "@react-three/drei";
import { PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three"; 
import styles from "./Particles.module.scss"

const CustomGeometryParticles = (props) => {
  const { count, shape } = props;

  // This reference gives us direct access to our points
  const points = useRef();

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "sphere") {
      const distance = 1;
     
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 

        let x = distance * Math.sin(theta) * Math.cos(phi)
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial transparent color={0x348feb} size={7} sizeAttenuation={false} depthWrite={false} />
    </points>
  );
};

export function Particles() {
    return (
      <div className={styles.scene}>
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
        <ambientLight intensity={0.5} />
        {/* Try to change the shape prop to "box" and hit reload! */}
        <CustomGeometryParticles count={1500} shape="sphere"/>
        <OrbitControls autoRotate />
        </Canvas>
    </div>
  );
};
