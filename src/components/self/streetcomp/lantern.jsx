
import { useGLTF } from '@react-three/drei'

export default function Lantern(props) {
  const { nodes, materials } = useGLTF('models/lantern2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.32, 0, 0]}>
        <group position={[1.002, -0.693, 0.537]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.spider_web}
            position={[0.073, 7.182, -1.382]}
            rotation={[0.699, -0.22, 0.181]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.lantern_main}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/lantern2.glb')
