import { useGLTF } from '@react-three/drei'

export default function Sky(props) {
  const { nodes, materials } = useGLTF('models/out.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skybox.geometry}
        material={materials.Skybox_mat}
      />
    </group>
  )
}

useGLTF.preload('models/out.glb')