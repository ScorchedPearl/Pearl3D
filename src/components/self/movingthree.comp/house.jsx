import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export default function House(props) {
 const { nodes } = useGLTF('models/build1.glb')
 const texture = useLoader(THREE.TextureLoader, 'textures/houseee.webp')

 return (
 <group {...props} dispose={null}>
  <group rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_2.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture, emissive: new THREE.Color(0x404040) })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_3.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_4.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_5.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_6.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_7.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_8.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_9.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_10.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_11.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_12.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_13.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_14.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_15.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  <mesh
   castShadow
   receiveShadow
   geometry={nodes.Object_16.geometry}
   material={new THREE.MeshStandardMaterial({ map: texture })}
  />
  </group>
 </group>
 )
}

useGLTF.preload('models/build1.glb')
