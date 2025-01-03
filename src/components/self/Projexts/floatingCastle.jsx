
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useLoader} from '@react-three/fiber'
import * as THREE from 'three'
export default function FloatingCastle2(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/FloatingCastle/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const texture = useLoader(THREE.TextureLoader, 'textures/textures/final_A_emissive.jpeg');
  materials.final_A.map = texture;
 const texture1 = useLoader(THREE.TextureLoader, 'textures/textures/final_alfa_emissive.jpeg');
 materials.final_alfa.map = texture1
 const texture2 = useLoader(THREE.TextureLoader, 'textures/textures/final_B_emissive.jpeg')
 materials.final_B.map = texture2
 const texture3 = useLoader(THREE.TextureLoader, 'textures/textures/final_C_emissive.jpeg')
 materials.final_C.map = texture3
 const texture4 = useLoader(THREE.TextureLoader, 'textures/textures/final_E_emissive.jpeg')
 materials.final_E.map = texture4
 const texture5 = useLoader(THREE.TextureLoader, 'textures/textures/final_gate_low_emissive.jpeg')
 materials.final_gate_low.map = texture5
 const texture6 = useLoader(THREE.TextureLoader, 'textures/textures/final_gate_top_emissive.jpeg')
 materials.final_gate_top.map = texture6
 const texture7 = useLoader(THREE.TextureLoader, 'textures/textures/final_rope_emissive.jpeg')
 materials.final_rope.map = texture7
 const texture8 = useLoader(THREE.TextureLoader, 'textures/textures/final_SOMT_emissive.jpeg')
 materials.final_SOMT.map = texture8
 const texture9 = useLoader(THREE.TextureLoader, 'textures/textures/sky_sketchfab_baseColor.jpeg')
 materials.sky_sketchfab.map = texture9


useEffect(() => {
   actions["Scene"].play();
}, [actions]);
function onClickHandler(){
 console.log("hlo");
 window.location.href = '/projects';
}
  return (
   <group onClick={()=>{onClickHandler()}} ref={group} {...props} dispose={null}>
     <group name="Sketchfab_Scene">
    <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, Math.PI]} scale={0.002}>
      <group name="ed9a8042c54c452db47145e9a7551210fbx" rotation={[-Math.PI, 0, 0]}>
     <group name="Object_2">
       <group name="RootNode">
      <group name="merged_gate" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate003" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate005" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate006" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate007" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate008" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate009" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate010" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate011" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="merged_gate012" rotation={[0, 0, -Math.PI / 2]} scale={100} />
      <group name="Armature" rotation={[0, 0, -Math.PI / 2]} scale={100}>
        <group name="Object_15">
       <primitive object={nodes._rootJoint} />
       <skinnedMesh
         name="Object_18"
         geometry={nodes.Object_18.geometry}
         material={materials.sky_sketchfab}
         skeleton={nodes.Object_18.skeleton}
       ><meshStandardMaterial map={texture9} /></skinnedMesh>
       <skinnedMesh
         name="Object_20"
         geometry={nodes.Object_20.geometry}
         material={materials.final_gate_low}
         skeleton={nodes.Object_20.skeleton}
       ><meshStandardMaterial map={texture5} /></skinnedMesh>
       <skinnedMesh
         name="Object_22"
         geometry={nodes.Object_22.geometry}
         material={materials.final_alfa}
         skeleton={nodes.Object_22.skeleton}
       ><meshStandardMaterial map={texture1} /></skinnedMesh>
       <skinnedMesh
         name="Object_24"
         geometry={nodes.Object_24.geometry}
         material={materials.final_gate_top}
         skeleton={nodes.Object_24.skeleton}
       ><meshStandardMaterial map={texture6} /></skinnedMesh>
       <skinnedMesh
         name="Object_26"
         geometry={nodes.Object_26.geometry}
         material={materials.final_C}
         skeleton={nodes.Object_26.skeleton}
       ><meshStandardMaterial map={texture3} /></skinnedMesh>
       <skinnedMesh
         name="Object_28"
         geometry={nodes.Object_28.geometry}
         material={materials.final_B}
         skeleton={nodes.Object_28.skeleton}
       ><meshStandardMaterial map={texture2} /></skinnedMesh>
       <skinnedMesh
         name="Object_30"
         geometry={nodes.Object_30.geometry}
         material={materials.final_SOMT}
         skeleton={nodes.Object_30.skeleton}
       ><meshStandardMaterial map={texture8} /></skinnedMesh>
       <skinnedMesh
         name="Object_32"
         geometry={nodes.Object_32.geometry}
         material={materials.final_E}
         skeleton={nodes.Object_32.skeleton}
       ><meshStandardMaterial map={texture4} /></skinnedMesh>
       <skinnedMesh
         name="Object_34"
         geometry={nodes.Object_34.geometry}
         material={materials.final_A}
         skeleton={nodes.Object_34.skeleton}       
        ><meshStandardMaterial map={texture} /></skinnedMesh>
       <skinnedMesh
         name="Object_36"
         geometry={nodes.Object_36.geometry}
         material={materials.final_rope}
         skeleton={nodes.Object_36.skeleton}
       ><meshStandardMaterial map={texture7} /></skinnedMesh>
       <group name="Object_17" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_19" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_21" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_23" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_25" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_27" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_29" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_31" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_33" rotation={[0, 0, -Math.PI / 2]} scale={100} />
       <group name="Object_35" rotation={[0, 0, -Math.PI / 2]} scale={100} />
        </group>
      </group>
       </group>
     </group>
      </group>
    </group>
     </group>
   </group>
    )
}

useGLTF.preload('models/FloatingCastle/scene.gltf')