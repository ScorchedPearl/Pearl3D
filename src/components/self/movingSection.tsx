"use client"
import { Canvas, useThree } from "@react-three/fiber";
import Model from "./movingthree.comp/horseMoving";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Leva, useControls } from "leva";
import { useEffect} from "react";
import Sky from "./skycomp/sky"
import IntroScreen from "./introduction/screen"
import House from "./movingthree.comp/house"
import Street from "./movingthree.comp/streets"
export default function movingSection(){
 const controls=useControls('HackerRoom',{
  positionX:{
    value:15.,
    min:-200,
    max:200
  },
  positionY:{
    value:5,
    min:-200,
    max:200
  },
  positionZ:{
    value:10,
    min:-200,
    max:200
  },
  scale:{
    value:25,
    min:0.01,
    max:500
  },
  rotationX:{
    value:0,
    min:-20,
    max:10
  },
  rotationY:{
    value:0,
    min:-20,
    max:10
  },
  rotationZ:{
    value:0,
    min:-20,
    max:10
  }
 })
 const texture = useLoader(THREE.TextureLoader, 'textures/texturefloo2.png');
 texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
 texture.repeat.set(1000, 1000);
 let key:string
  useEffect(() => {
   const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'w') {
     key="w";
    } else if (event.key === 's') {
     key="s";
    }
    else{
     key="";
    }
   };
   const updateTextureOffsetWKey = () => {

    texture.offset.y += 0.01;
   };
   const updateTextureOffsetSKey = () => {
    texture.offset.y -= 0.01;
   };
   let interval: NodeJS.Timeout | null = null;

   const handleKeyUp = () => {
    if (interval) {
     clearInterval(interval);
     interval = null;
    }
   };

   const handleKeyDownWithInterval = (event: KeyboardEvent) => {
    handleKeyDown(event);
    if (!interval) {
     if(key==="w"){
      interval = setInterval(updateTextureOffsetWKey, 16);
     }
     else if(key==="s"){
      interval = setInterval(updateTextureOffsetSKey, 16);
     }
    }
   };

   window.addEventListener('keydown', handleKeyDownWithInterval);
   window.addEventListener('keyup', handleKeyUp);

   return () => {
    window.removeEventListener('keydown', handleKeyDownWithInterval);
    window.removeEventListener('keyup', handleKeyUp);
    if (interval) {
     clearInterval(interval);
    }
   };
  }, [texture]);
 let meshPosition={
  x:0,
  y:-1,
  z:0,
 }
   

   const cameraPlacement = {
     x: 15,
     y: 5,
     z: 10,
     fov: 25
   };
   const cameraMovement = {
     x: 0,
     y: 5,
     z: 15,
     fov: 75
   };
   const cameraMovement2={
      x: 0,
      y: 5,
      z: 15,
      fov: 75
   }
   const cameraMovement3={
    x: -20,
    y: 5,
    z: 0,
    fov: 100
  }

  return (
  <>
   <div className="w-full h-full absolute inset-0">
  <audio autoPlay loop>
      <source src="audio/uareawizardharry.mp3" type="audio/mpeg" />
  </audio>
   
   <Canvas
    className="h-full w-full"
    shadows
    camera={{ position: [cameraMovement2.x, cameraMovement2.y, cameraMovement2.z], fov: cameraMovement2.fov }}
   >
    <Sky position={[10,50,0]}></Sky>
    <mesh
     receiveShadow
     rotation={[-Math.PI / 2, 0, 0]}
     position={[meshPosition.x, meshPosition.y, meshPosition.z]}
    >
     <planeGeometry args={[10000, 10000]} />
     <meshStandardMaterial map={texture} />
     
    </mesh>
      <Street></Street>
     <IntroScreen position={[cameraMovement2.x, cameraMovement2.y, cameraMovement2.z-100]} scale={250}></IntroScreen>
      <House position={[cameraMovement2.x-150, 0, cameraMovement2.z-150]} scale={10}></House>
     <Model cameraPlacement={cameraPlacement}
     cameraMovement={cameraMovement}cameraMovement2={cameraMovement3}position={[0,-0.9,0]} scale={1} 
      rotation={[0, -Math.PI, 0]}
      >
      </Model>
     <ambientLight intensity={0.2} />

     <spotLight
      position={[5, 10, 5]}
      angle={0.3}
      penumbra={0.5}
      intensity={2}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-bias={-0.001}
     />

     <directionalLight
      position={[10, 10, 10]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
     />

     <OrbitControls />
    </Canvas>
   </div>
  </>
 )
}