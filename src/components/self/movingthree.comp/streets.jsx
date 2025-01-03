'use client'
import { useState,useEffect } from 'react';
import Lantern from '../streetcomp/lantern';
import Bench from '../streetcomp/bench';

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
  </>
  );
}