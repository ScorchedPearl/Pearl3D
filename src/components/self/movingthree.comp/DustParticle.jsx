import  { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

export default function DustParticles({ count = 5000 }) {
 const ref = useRef();

 const particles = useMemo(() => {
   const positions = new Float32Array(count * 3);
   for (let i = 0; i < count; i++) {
     const x = (Math.random() - 0.5) * 20;
     const y = (Math.random() - 0.5) * 20;
     const z = (Math.random() - 0.5) * 20;
     positions.set([x, y, z], i * 3);
   }
   return positions;
 }, [count]);


 useFrame(() => {
   ref.current.rotation.y += 0.0005;
 });

 return (
   <Points ref={ref} positions={particles} stride={3}>
     <PointMaterial
       transparent
       color="#ffffff"
       size={0.05}
       sizeAttenuation
       depthWrite={false}
       opacity={0.8}
     />
   </Points>
 );
}