import { useGLTF } from '@react-three/drei'

export default function Barrier(props) {
  const { nodes, materials } = useGLTF('models/street_barrier_-_5mb.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Street_Barrier_1_Street_Barrier_0.geometry}
        material={materials.Street_Barrier}
        position={[0, 0, -260.767]}
        rotation={[Math.PI, -1.173, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Street_Barrier__0.geometry}
        material={materials.Street_Barrier__0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Street_Barrier_Street_Barrier_0.geometry}
        material={materials.Street_Barrier}
      />
    </group>
  )
}

useGLTF.preload('models/street_barrier_-_5mb.glb')
