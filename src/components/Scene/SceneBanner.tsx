import { Canvas } from "@react-three/fiber"
import styles from "./Scene.module.scss"

import { OrbitControls } from '@react-three/drei'
import { Scene } from '../../components/Scene/Bubble'
import { useSpring } from '@react-spring/core'

export function SceneBanner() {
    // This spring controls the background and the svg fill (text color)
    const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])

    return (
        // create the canvas
        <div className={styles.scene}>
              <Canvas className="canvas" dpr={[1, 2]}>
                <Scene setBg={set} />
                <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
            
        </div>
    );
  }

/*

<Canvas>
                // create an ambient light
                <ambientLight />
                
                // create a pointlight and give it a position
                <pointLight position={[10, 20, 10]} />
            
                // create a mess and rotate it slightly
                <mesh rotation={[10, 15, 6]}>
                    // create a box geometry of a size of 2 on all axis 
                    <boxGeometry args={[4, 2, 2]} />
                    // give the mesh the standard pbr material with preset color of hotpink
                    <meshStandardMaterial color="hotpink" />
                </mesh>

            </Canvas>
*/