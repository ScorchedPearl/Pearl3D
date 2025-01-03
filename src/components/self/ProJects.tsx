"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FloatingCastle2 from "./Projexts/floatingCastle";
export default function Projects(){
    return (
     <Canvas className="w-full h-full"
     camera={{fov:50 ,position:[30,0,0]} } >
     <ambientLight intensity={2}></ambientLight>
     <FloatingCastle2 position={[0,0,0]}></FloatingCastle2>
     <OrbitControls></OrbitControls>
     </Canvas>
    )
}