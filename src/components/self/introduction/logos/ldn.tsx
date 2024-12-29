import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Ldn(props:any) {
 const { nodes } = useGLTF('models/linkdin.glb')
 const blackMaterial = new THREE.MeshStandardMaterial({ color: 'black' })
 const whiteMaterial = new THREE.MeshStandardMaterial({ color: 'white' })
 return (
  <group {...props} dispose={null}>
   <group scale={0.01}>
    <mesh
     castShadow
     receiveShadow
     geometry={(nodes.Cube_Material002_0 as THREE.Mesh).geometry}
     material={blackMaterial}
     position={[-58.813, -6.03, 0]}
     rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
     scale={[-192.781, 192.781, 35.736]}
    />
    <mesh
     castShadow
     receiveShadow
     geometry={(nodes.Plane_Material003_0 as THREE.Mesh).geometry}
     material={whiteMaterial}
     position={[-25.863, 10.522, 54.607]}
     rotation={[-Math.PI / 2, Math.PI / 2, 0]}
     scale={[40.824, 40.824, 58.313]}
    />
    <mesh
     castShadow
     receiveShadow
     geometry={(nodes.Plane001_Material003_0 as THREE.Mesh).geometry}
     material={whiteMaterial}
     position={[-25.863, 10.522, -8.858]}
     rotation={[-Math.PI / 2, Math.PI / 2, 0]}
     scale={[40.824, 40.824, 58.313]}
    />
    <mesh
     castShadow
     receiveShadow
     geometry={(nodes.Cylinder_Material_0 as THREE.Mesh).geometry}
     material={whiteMaterial}
     position={[-19.146, 90.554, 73.242]}
     rotation={[-Math.PI / 2, Math.PI / 2, 0]}
     scale={[22.944, 22.944, 10.792]}
    />
   </group>
  </group>
 )
}

useGLTF.preload('models/linkdin.glb')
