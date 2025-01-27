
import { useGLTF } from '@react-three/drei'

export default function Collage(props) {
  const { nodes, materials } = useGLTF('models/collage.glb')
  return (
   <group {...props} dispose={null}>
     <mesh
     castShadow
     receiveShadow
     geometry={nodes.Object_5.geometry}
     material={materials['back_panel-black']}
     />
      <mesh
      castShadow
      receiveShadow
      geometry={nodes.Object_7.geometry}
      material={materials.Black_Plastic}
      material-color="#720000"
     />
     <mesh
     castShadow
     receiveShadow
     geometry={nodes.Object_9.geometry}
     material={materials.glass}
     position={[0, 0.01, 0]}
     />
     <mesh
     castShadow
     receiveShadow
     geometry={nodes.Object_11.geometry}
     material={materials.photos}
     position={[0, 0.004, 0]}
     />
   </group>
  )
}

useGLTF.preload('models/collage.glb')
