import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { useLoader } from '@react-three/fiber';
// import { Model } from './Ingolfsstraeti2';
// import { Model } from './Test1';
import { Model } from './Test2';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : props.scale || 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function AegirHead (props){
  const obj = useLoader(OBJLoader, '/jaokei/head3d.obj')
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state, delta) => (ref.current.rotation.y += delta))
  return (
    <mesh>
      <primitive
        {...props}
        object={obj}
        scale={0.01}
        ref={ref}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Model/>
      {/* <AegirHead position={[9,3,0]} /> */}
      <AegirHead position={[0,1.5,0]} />
      <Box position={[-1.2, 0, 0]} scale={0.2} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />

      {/* <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer> */}
    </Canvas>
  )
}
