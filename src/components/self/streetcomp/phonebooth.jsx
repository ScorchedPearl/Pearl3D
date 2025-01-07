import { useGLTF } from '@react-three/drei'

export default function PhoneBooth(props) {
  const { nodes, materials } = useGLTF('models/street_phone.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.833}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1645rip_noesis_meshnode_0000_mat0_0.geometry}
            material={materials.mat0}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/street_phone.glb')
