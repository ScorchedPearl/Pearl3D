"use client"
import Ufo from "@/components/self/profileLoader/ufo"
import { Canvas } from "@react-three/fiber";
const App = () => {
  return(
    <div className="fixed top-0 left-0 h-full w-full">
      <Canvas
      camera={{ position: [20, 5, 0] }} className="h-full w-full">

      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <ambientLight intensity={2} />
      <hemisphereLight args={["#ffffff", "#ffffff", 1]} />
      
      <Ufo rotation={[0,-Math.PI/2,0]} position={[0,-5,0]}/>

      </Canvas>
    </div>
  )
 }
 export default App;