"use client"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import { useTheme } from 'next-themes';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('models/cube.glb');
  const {theme ,setTheme}=useTheme();
  const texture = useTexture('textures/cube.png');


  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  useEffect(() => {
   
  }, [theme]);

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={1} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}>
    
            <meshMatcapMaterial
            matcap={texture}
            toneMapped={false}
            color={theme==='light' ? '#2596be' : '#e11c49/2' ||theme==='dark' ? '#e11c49/2' : '#2596be'}
          />
          
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/0.glb');

export default Cube;




export function Js(props) {
  const { nodes, materials } = useGLTF('models/0.glb')
  const JsRef = useRef();
  const [hovered, setHovered] = useState(false);
  useGSAP(() => {
   gsap
     .timeline({
       repeat: -1,
       repeatDelay: 0.5,
     })
     .to(JsRef.current.rotation, {
       y: hovered ? '+=2' : `+=${Math.PI * 2}`,
       x: hovered ? '+=2' : `-=${Math.PI * 2}`,
       duration: 2.5,
       stagger: {
         each: 0.15,
       },
     });
 });
  return (
   <Float floatIntensity={2}>
    <group {...props} dispose={null}>
      <group scale={1.612}>
      
        <mesh
          ref={JsRef}
          castShadow
          receiveShadow
          geometry={nodes.Curve003.geometry}
          material={materials['Material.001']}
          position={[0, -0.066, 0.095]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={5.154}
          onPointerEnter={() => setHovered(true)}
        />
      </group>
    </group>
    </Float>
  )
}

useGLTF.preload('models/0.glb')
