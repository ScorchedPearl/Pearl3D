
import { useGLTF } from '@react-three/drei'

export default function Bin(props) {
  const { nodes, materials } = useGLTF('models/street_bin.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.initialShadingGroup}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/street_bin.glb')
