'use client'
import { useState,useEffect } from 'react';
import Lantern from '../streetcomp/lantern';
import Bench from '../streetcomp/bench';
import PhoneBooth from "../streetcomp/phonebooth"
import Food from "../streetcomp/food"
import Bin from "../streetcomp/bin"
import Barrier from "../streetcomp/barrier"
import Abhouse from "../streetcomp/houseab"
export default function Street() {
 const [lanternPosition, setLanternPosition] = useState({
 x: -5,
 y: -1,
 z: 0
 });

 useEffect(() => {
  let animationFrameId = null; 
  let isAnimating = false; 
  let direction = null;

  const updatePosition = () => {
    setLanternPosition((prevPosition) => ({
      ...prevPosition,
      z: direction === 'forward' ? prevPosition.z + 0.105 : prevPosition.z - 0.105,
    }));
    animationFrameId = requestAnimationFrame(updatePosition);
  };

  const handleKeyDown = (event) => {
    if (!isAnimating) {
      if (event.key === 'w') {
        isAnimating = true;
        direction = 'forward';
        animationFrameId = requestAnimationFrame(updatePosition);
      } else if (event.key === 's') {
        isAnimating = true;
        direction = 'backward';
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    }
  };

  const handleKeyUp = (event) => {
    if ((event.key === 'w' || event.key === 's') && isAnimating) {
      isAnimating = false;
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}, []);



  return (
  <>
    {[...Array(24)].map((_, i) => (
    i % 5 === 4 ? (
    <Bench key={i} position={[lanternPosition.x-5, lanternPosition.y, lanternPosition.z - i * 10]} scale={0.03} />
    ) : (
    <Lantern key={i} position={[lanternPosition.x, lanternPosition.y, lanternPosition.z - i * 10]} scale={0.8} />
    )
    ))}
    <PhoneBooth position={[lanternPosition.x+10,lanternPosition.y,lanternPosition.z-20]} scale={2}></PhoneBooth>
    <PhoneBooth position={[lanternPosition.x+10,lanternPosition.y,lanternPosition.z-50]} scale={2}></PhoneBooth>
    <PhoneBooth position={[lanternPosition.x+10,lanternPosition.y,lanternPosition.z-90]} scale={2}></PhoneBooth>
    <Food position={[lanternPosition.x+8,lanternPosition.y,lanternPosition.z-65]} scale={0.01} ></Food>
    <Bin position={[lanternPosition.x+8,lanternPosition.y+1,lanternPosition.z-10]}  scale={1.3}></Bin>
    <Bin position={[lanternPosition.x+1,lanternPosition.y+1,lanternPosition.z-28]}  scale={1.3}></Bin>
    <Bin position={[lanternPosition.x+1,lanternPosition.y+1,lanternPosition.z-46]}  scale={1.3}></Bin>
    <Bin position={[lanternPosition.x+8,lanternPosition.y+1,lanternPosition.z-74]}  scale={1.3}></Bin>
    <Barrier position={[lanternPosition.x+13,lanternPosition.y,lanternPosition.z-18]}  scale={0.02}></Barrier>
    <Barrier position={[lanternPosition.x+13,lanternPosition.y,lanternPosition.z-58]}  scale={0.02}></Barrier>
    <Abhouse position={[lanternPosition.x+13,lanternPosition.y,lanternPosition.z-80]} rotation={[0,Math.PI,0]} ></Abhouse>
    <Abhouse position={[lanternPosition.x-10,lanternPosition.y,lanternPosition.z-10]}  ></Abhouse>
    <Abhouse position={[lanternPosition.x-10,lanternPosition.y,lanternPosition.z-50]}  ></Abhouse>
  </>
  );
}