import { Float, useGLTF } from '@react-three/drei'

export default function ThreeJs(props) {
  const { nodes } = useGLTF('models/threejs.glb')
  return (
   <Float floatIntensity={2}>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.threejs.geometry}
        material={nodes.threejs.material}
      />
    </group>
   </Float>
  )
}

useGLTF.preload('models/threejs.glb')

