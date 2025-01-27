import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Ufo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/ufo__animated.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions['ArmatureAction.001'].play()
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.774}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Mesh001_1" rotation={[0, Math.PI / 2, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Plant}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Ground}
                />
              </group>
              <group name="Armature_8" position={[0, 5.624, 0]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.UFO_BaseColor}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.CornerEngineLights}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Cokpit}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.DniweAngar}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.HardEdges}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Engines_Body}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Engines_Light_01}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.Engines_Light_02}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.tornado_cow_material}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <group name="BezierCurve_7" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/ufo__animated.glb')
