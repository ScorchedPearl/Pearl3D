import { useGLTF, PerspectiveCamera, Float } from '@react-three/drei'

export function Tailwind(props) {
  const { nodes, materials } = useGLTF('models/1.glb')

  return (
   <Float floatIntensity={1}>
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
      geometry={nodes.LOGO.geometry}
      material={materials.logo.c}
      position={[-0.003, -0.009, 0.657]}
     >
      <meshStandardMaterial color="#2596be" />
     </mesh>
     <mesh castShadow receiveShadow geometry={nodes.back.geometry} material={materials.back} />
    </group>
   </Float>
  )
}

useGLTF.preload('models/1.glb')
