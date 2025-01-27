"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Collage from "./profileintro/collage"
import { Float, Html, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
export default function Hero2(){
 useGSAP(()=>{
  gsap.to("#hero",{
    delay: 1,
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
     trigger: "#hero",
     start: "top 80%",
     end: "top 50%",
    },
  }
  )
  gsap.to("#collage",{
   delay: 1.25,
   opacity: 1,
   ease: "power4.out",
   scrollTrigger: {
    trigger: "#image",
    start: "top 80%",
    end: "top 50%",
   },
  }
 )
 gsap.to("#cta",{
  delay: 1.25,
  opacity: 1,
  y: -50,
  ease: "power4.out",
  scrollTrigger: {
   trigger: "#cta",
   start: "top 80%",
   end: "top 50%",
  },
  }
 )
 },[])
  return (
   
  <section className="w-full nav-height relative">
   
    <Canvas className="fixed top-0 left-0 w-full h-full" shadows>
     <Float>
      <Stars />
     </Float>
     <ambientLight intensity={0.5} />
     <spotLight
      position={[10, 10, 10]}
      angle={0.15}
      penumbra={1}
      intensity={5}
      castShadow
     />
     <pointLight position={[-10, -10, -10]} intensity={2} />
     <Html transform>
     <div className="w-full flex-between flex-col h-5/6">
      <p id="hero" className="mb-[15rem]">Hi, Myself Vishwas</p>
      <div className="mt-4 h-full w-full flex flex-row">
      </div>
     </div>
     
      </Html>
     <Collage scale={9} position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]} />
     {/* <OrbitControls /> */}
     
    </Canvas>
   </section>
  )
};