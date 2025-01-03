"use client"
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {  PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "./three.comp/heroComp";
import CanvasLoader from "./three.comp/canvasLoader";
import { useMediaQuery } from "react-responsive";
import Target from "./three.comp/target";
import ReactLogo from "./three.comp/reactLogo";
import { calculateSizes } from "@/constants";
import Cube, { Js } from "./three.comp/cube";
import { Tailwind } from "./three.comp/tailwindLogo";
import MongoDB from "./three.comp/monodb";
import Rings from "./three.comp/rings";
import ThreeJs from "./three.comp/threeJs";
import HeroCamera from "./three.comp/heroCamera"; 

import Link from "next/link";
import ButtonV from "../modif/buttonV";
import DustParticles from "./movingthree.comp/DustParticle";
export default function Hero(){
  const mountRef = useRef<HTMLDivElement>(null);
 // const controls=useControls('HackerRoom',{
 //   positionX:{
 //     value:0.,
 //     min:-20,
 //     max:20
 //   },
 //   positionY:{
 //     value:2.5,
 //     min:-20,
 //     max:20
 //   },
 //   positionZ:{
 //     value:2.5,
 //     min:-20,
 //     max:20
 //   },
 //   scale:{
 //     value:0.1,
 //     min:0.01,
 //     max:1
 //   },
 //   rotationX:{
 //     value:0,
 //     min:-20,
 //     max:10
 //   },
 //   rotationY:{
 //     value:0,
 //     min:-20,
 //     max:10
 //   },
 //   rotationZ:{
 //     value:0,
 //     min:-20,
 //     max:10
 //   }
 //  })
  const isSmall=useMediaQuery({query:'(max-width:440px)'})
  const isMobile=useMediaQuery({query:'(max-width:768px)'})
  const isTablet=useMediaQuery({query:'(min-width:768px,max-width:1024px)'})
  const sizes=calculateSizes(isSmall,isMobile,isTablet);
  return(
   <>
   <section className=" min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center ">{`Vishwas's Portfolio`}</h1>
        <p className="hero_tag text-muted-foreground">{`I'm a Full Stack Developer`}</p>
        <div className="w-full h-full absolute inset-0" ref={mountRef}>
         {/* <Leva></Leva> */}
           <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader></CanvasLoader>}>
             
            </Suspense>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              {/* <HackerRoom scale={isMobile?0.1:0.1} position={isMobile?[-0.6,-7.1,2-5]:[-10,-8.9,-0.9]} rotation={isMobile?[0,-2.6,0]:[0,-2.4,0]}></HackerRoom> */}
              <HeroCamera isMobile={isMobile}>
              <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={isMobile?[0,-Math.PI,0]:[0,-Math.PI,0]}>
              </HackerRoom>
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition}></Target>
                <ReactLogo position={sizes.reactLogoPosition}></ReactLogo>
                <Cube position={[-16,-0.3,4.5]} scale={0.80}></Cube>
                <Js position={sizes.cubePosition}></Js>
                {/* <ThreeJs position={[controls.positionX,controls.positionY,controls.positionZ]} scale={controls.scale} rotation={[
                  controls.rotationX,
                  controls.rotationY,
                  controls.rotationZ
                ]}></ThreeJs> */}
                <ThreeJs position={[18,-0.7,-3.3]} scale={0.03}></ThreeJs>
                <MongoDB position={[10.8,8.5,6.1]} scale={0.17}></MongoDB>
                <Tailwind position={[-10,7.5,10]} scale={0.08}></Tailwind>
                <Rings position={sizes.ringPosition}></Rings>
                <DustParticles count={500}></DustParticles>
              </group>
              
              <ambientLight intensity={1} />
              <directionalLight intensity={0.5} position={[10, 10, 10]} />
             {/* <OrbitControls></OrbitControls> */}
           </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-15 c-space">
                 <Link href="/explore" className="w-fit">
                    <ButtonV name="Let's Explore Together" isBeam containerClass="sm:w-fit w-full sm:min-w-96 "></ButtonV>
                 </Link>
        </div>
      </div>
    </section>
    </>
  )
}