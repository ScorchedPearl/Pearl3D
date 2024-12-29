import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations,Float } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import Git from './logos/git'
import Insta from './logos/insta'
import Ldn from './logos/ldn'
export default function IntroScreen(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/sci_fi_monitor.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions['Take 001'].play()
  },[]);


const texture = useLoader(TextureLoader, 'textures/screentexture.png')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="4e4541ff511d406b8a3dfc7144802368fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="TV_ALL">
                  <group name="BG" position={[0, -2.5, 1.5]} scale={1.5}>
                    <mesh
                      name="BG_BG_MTL_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BG_BG_MTL_0.geometry}
                      material={materials.BG_MTL}
                    />
                  </group>
                  <group name="monter">
                    <group
                      name="pPlane1"
                      position={[0, 6, 0.05]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={[15.7, 1, 8.7]}>
                      <mesh
                        name="pPlane1_monter_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pPlane1_monter_MTL_0.geometry}
                        material={materials.monter_MTL}
                      >
                        <meshStandardMaterial attach="material" map={texture} />
                      </mesh>
                    </group>
                    <group
                      name="pCube20"
                      position={[7, 1.176, 0]}
                      rotation={[0, 0, Math.PI]}
                      scale={[1, 1, 0.1]}>
                      <mesh
                        name="pCube20_monter_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube20_monter_MTL_0.geometry}
                        material={materials.monter_MTL}
                      />
                    </group>
                    <group name="pCube19" position={[-6.995, 10.813, 0]} scale={[1, 1, 0.1]}>
                      <mesh
                        name="pCube19_monter_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube19_monter_MTL_0.geometry}
                        material={materials.monter_MTL}
                      />
                    </group>
                  </group>
                  <group name="Cube">
                    <group name="pCube18" position={[0, -1, 0]} scale={[1, 0.274, 1]}>
                      <mesh
                        name="pCube18_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube18_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                    <group name="pCube17" position={[0, -1, 0]} scale={[1, 0.274, 1]}>
                      <mesh
                        name="pCube17_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube17_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                    <group name="pCube16" position={[0, -1, 0]} scale={[1, 0.274, 1]}>
                      <mesh
                        name="pCube16_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube16_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                    <group name="pCube15" position={[0, -1, 0]}>
                      <mesh
                        name="pCube15_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube15_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                      <mesh
                        name="pCube14_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube14_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                    <group name="pCube13" position={[0, -1, 0]}>
                      <mesh
                        name="pCube13_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube13_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                    <group name="pCube12" position={[0, -1, 0]}>
                      <mesh
                        name="pCube12_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube12_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                  </group>
                  <group name="TV">
                    <group
                      name="pCube3"
                      position={[0, 5, 0]}
                      rotation={[0, 0, Math.PI]}
                      scale={[16, 9, 0.2]}>
                      <mesh
                        name="pCube3_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube3_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                    <group name="pCube2" position={[0, 7, 0]} scale={[16, 9, 0.2]}>
                      <mesh
                        name="pCube2_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube2_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                    <group name="pCube1" position={[0, 6, 0]} scale={[16, 9, 0.2]}>
                      <mesh
                        name="pCube1_TV_MTL_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCube1_TV_MTL_0.geometry}
                        material={materials.TV_MTL}
                      />
                    </group>
                  </group>
                  <group name="Dec_Top" position={[0, 12, 0]} rotation={[0, 0, Math.PI]}>
                    <group name="cube">
                      <group name="pCube7" position={[-7, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube7_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube7_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube5" position={[-9, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube5_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube5_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube4" position={[-10, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube4_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube4_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube8" position={[-6, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube8_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube8_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube6" position={[-8, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube6_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube6_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                    </group>
                    <group name="cone">
                      <group name="pCube9" position={[-9, -0.53, 0]} scale={0}>
                        <mesh
                          name="pCube9_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube9_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube10" position={[-8.381, -0.53, 0]} scale={0}>
                        <mesh
                          name="pCube10_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube10_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube11" position={[-7.742, -0.53, 0]} scale={0}>
                        <mesh
                          name="pCube11_TV_MTL_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube11_TV_MTL_0.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Dec_Down">
                    <group name="cube_1">
                      <group name="pCube7_1" position={[-7, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube7_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube7_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube5_1" position={[-9, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube5_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube5_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube4_1" position={[-10, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube4_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube4_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube8_1" position={[-6, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube8_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube8_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube6_1" position={[-8, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                        <mesh
                          name="pCube6_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube6_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                    </group>
                    <group name="cone_1">
                      <group name="pCube9_1" position={[-9, -0.53, 0]} scale={0}>
                        <mesh
                          name="pCube9_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube9_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube10_1" position={[-8.381, -0.53, 0]} scale={0}>
                        <mesh
                          name="pCube10_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube10_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                      <group name="pCube11_1" position={[-7.742, -0.53, 0]} scale={0}>
                        <mesh
                          name="pCube11_TV_MTL_0_1"
                          castShadow
                          receiveShadow
                          geometry={nodes.pCube11_TV_MTL_0_1.geometry}
                          material={materials.TV_MTL}
                        />
                      </group>
                    </group>
                    <group name="Logos">
                      <Float>
                          <Git position={[10,8,10]} scale={0.2} onClick={() => window.open('https://github.com/ScorchedPearl', 'GitHub')}></Git>
                          <Insta position={[-10,5,15]}  rotation={[0,-Math.PI/2+0.3,0]}onClick={() => window.open('https://www.instagram.com/vishwas.16_0/', 'Instagram')}></Insta>
                          <Ldn position={[15,2,8]} rotation={[0,-Math.PI/2-0.3,0]}onClick={() => window.open('https://www.linkedin.com/in/vishwas-pahwa-694928328/', 'Instagram')}></Ldn>
                      </Float>
                    </group>
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

useGLTF.preload('models/sci_fi_monitor.glb')
