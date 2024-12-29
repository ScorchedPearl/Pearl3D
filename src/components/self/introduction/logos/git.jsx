
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Git(props) {
  const { nodes, materials } = useGLTF('models/git.glb')
  return (
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
    material={materials.logo}
    position={[-0.003, 0.575, 0.411]}
     >
     </mesh>
     <mesh castShadow receiveShadow geometry={nodes.back.geometry} material={materials.back}>
    <meshStandardMaterial color="black" />
     </mesh>
   </group>
    )
}

useGLTF.preload('models/git.glb')
