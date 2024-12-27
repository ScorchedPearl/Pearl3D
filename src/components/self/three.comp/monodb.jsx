
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera,Float } from '@react-three/drei'

export default function MongoDB(props) {
  const { nodes, materials } = useGLTF('models/2.glb')
  return (
   <Float floatIntensity={2}>
    <group {...props} dispose={null}>
     <PerspectiveCamera
      makeDefault={false}
      far={10000}
      near={0.001}
      fov={54.432}
      position={[0, 0, 274.084]}
      rotation={[0, Math.PI / 2, 0]}
     />
     <mesh
      castShadow
      receiveShadow
      geometry={nodes.LOGO_1.geometry}
      material={materials.logo_1}
      position={[1.481, -0.622, 0.558]}
     >
      <meshStandardMaterial color="green" emissive="green" emissiveIntensity={0.5} />
     </mesh>
     <mesh
      castShadow
      receiveShadow
      geometry={nodes.LOGO.geometry}
      material={materials.logo}
      position={[-0.142, -0.017, 0.72]}
     >
      <meshStandardMaterial color="grey" emissive="grey" emissiveIntensity={5} />
     </mesh>
     <mesh castShadow receiveShadow geometry={nodes.back.geometry} material={materials.back}>
      <meshStandardMaterial color="black" emissive="black" emissiveIntensity={3} />
     </mesh>
    </group>
   </Float>
  )
}

useGLTF.preload('models/2.glb')
