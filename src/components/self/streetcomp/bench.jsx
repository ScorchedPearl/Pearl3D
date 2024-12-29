import { useGLTF } from '@react-three/drei'

export default function Bench(props) {
  const { nodes, materials } = useGLTF('models/bench.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.lambert1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('models/bench.glb')
