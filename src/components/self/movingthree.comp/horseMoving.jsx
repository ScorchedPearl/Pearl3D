"use client"    
import React, { useRef } from 'react'
import { useGLTF, 
useAnimations } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
export default function Model(props) {
  const group = useRef()
  const { nodes, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ankou-with-cart/model.gltf')
const { actions } = useAnimations(animations, group)

const keys={
  w: false,
  a: false,
  s: false,
  d: false
}
let lastKey = '';

const camera=useThree().camera;
   useEffect(() => {
    const duration = 3000; 
    const start = performance.now();

    const animate = (time) => {
     const elapsed = time - start;
     const t = Math.min(elapsed / duration, 1);
     camera.position.x = props.cameraPlacement.x + (props.cameraMovement.x - props.cameraPlacement.x) * t;
     camera.position.y = props.cameraPlacement.y + (props.cameraMovement.y - props.cameraPlacement.y) * t;
     camera.position.z = props.cameraPlacement.z + (props.cameraMovement.z - props.cameraPlacement.z) * t;
     camera.fov = props.cameraPlacement.fov + (props.cameraMovement.fov - props.cameraPlacement.fov) * t;
     camera.updateProjectionMatrix();

     requestAnimationFrame(animate);
    };
    setTimeout(() => {
      const duration = 3000; 
      const start = performance.now();

      const animate = (time) => {
        const elapsed = time - start;
        const t = Math.min(elapsed / duration, 1);
        camera.position.x = props.cameraMovement.x + (props.cameraMovement2.x - props.cameraMovement.x) * t;
        camera.position.y = props.cameraMovement.y + (props.cameraMovement2.y - props.cameraMovement.y) * t;
        camera.position.z = props.cameraMovement.z + (props.cameraMovement2.z - props.cameraMovement.z) * t;
        camera.fov = props.cameraMovement.fov + (props.cameraMovement2.fov - props.cameraMovement.fov) * t;
        camera.updateProjectionMatrix();

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    },20000);

    requestAnimationFrame(animate);
   }, [props.cameraPlacement, props.cameraMovement, camera]);


  


useEffect(()=>{

 
   function handleKeyUp(e) {
    switch(e.key){
      case 'w':
       keys.w=false;
       break;
      case 'a':
       keys.a=false;
       break;
      case 's':
       keys.s=false;
       break;
      case 'd':
       keys.d=false;
       break;
    }
   }
   function handleKeyDown(e) {
    switch(e.key){
      case 'w':
       keys.w=true;
       lastKey='w';
       break;
      case 'a':
       keys.a=true;
       lastKey='a';
       break;
      case 's':
       keys.s=true;
       lastKey='s';
       break;
      case 'd':
       keys.d=true;
       lastKey='d';
       break;
    }
   }
   window.addEventListener('keyup',handleKeyUp );
   window.addEventListener(('keydown'),handleKeyDown );
  let animationFrameId;

  const animate = () => {
    if (keys.w&&lastKey==='w') {
      actions['course_cheval'].play();
      actions['course_charette'].play();
      actions["pose_charette"].play();
      actions["course_ankou"].play();
    } else if(keys.s&&lastKey==='s') {
      actions['course_cheval'].play();
      actions['course_charette'].play();
      actions["pose_charette"].play();
      actions["course_ankou"].play(); 
    }else {
      actions['course_cheval'].stop();
      actions['course_charette'].stop();
      actions["course_ankou"].stop();
      actions["pose_charette"].stop();
    }
    // if (keys.a&&lastKey==='a') {
    //   group.current.position.x -= 0.01;
    // }else if (keys.d&&lastKey==='d') {
    //   group.current.position.x += 0.01;
    // }else {
    // }
    
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.removeEventListener('keydown',handleKeyDown);
    window.removeEventListener('keyup',handleKeyUp);
    cancelAnimationFrame(animationFrameId);
  };
 },[actions, keys]);




  return (
    <group ref={group} {...props} dispose={null}>
<primitive object={nodes.rootankou} />
<group name="ankou" >
<primitive object={nodes.spine004} />
<skinnedMesh geometry={nodes.horse.geometry} material={nodes.horse.material} skeleton={nodes.horse.skeleton} />
<mesh geometry={nodes.horse_coth.geometry} material={nodes.horse_coth.material} rotation={[0, 0.01, 0,]} />
<mesh geometry={nodes.horse_strap.geometry} material={nodes.horse_strap.material} rotation={[0, 0.01, 0,]} />
<mesh geometry={nodes.horse_strap001.geometry} material={nodes.horse_strap001.material} rotation={[0, 0.01, 0,]} />
<mesh geometry={nodes.strap_hook.geometry} material={nodes.strap_hook.material} rotation={[Math.PI / 2, 0, -0.01,]} />
<mesh geometry={nodes.strap_hook001.geometry} material={nodes.strap_hook001.material} position={[1.28, 0, -0.01,]} rotation={[Math.PI / 2, 0, -0.01,]} />
<mesh geometry={nodes.strap_hook002.geometry} material={nodes.strap_hook002.material} position={[0, 0.01, 0.36,]} rotation={[Math.PI / 2, 0, -0.01,]} />
<mesh geometry={nodes.strap_hook003.geometry} material={nodes.strap_hook003.material} position={[1.28, 0.01, 0.35,]} rotation={[Math.PI / 2, 0, -0.01,]} />
</group>
<skinnedMesh geometry={nodes.ankou_sickle.geometry} material={nodes.ankou_sickle.material} skeleton={nodes.ankou_sickle.skeleton} />
<skinnedMesh geometry={nodes.ankou002.geometry} material={nodes.ankou002.material} skeleton={nodes.ankou002.skeleton} />
<group position={[-0.08, 0.81, -0.78,]} >
<primitive object={nodes.cart} />
<skinnedMesh geometry={nodes.accroche_crane.geometry} material={nodes.accroche_crane.material} skeleton={nodes.accroche_crane.skeleton} />
<mesh geometry={nodes.cart_shaft.geometry} material={nodes.cart_shaft.material} position={[0.1, -0.8, 0.78,]} rotation={[Math.PI / 2, 0, -1.56,]} />
<skinnedMesh geometry={nodes.bloc_wheel_D.geometry} material={nodes.bloc_wheel_D.material} skeleton={nodes.bloc_wheel_D.skeleton} />
<skinnedMesh geometry={nodes.bloc_wheel_G.geometry} material={nodes.bloc_wheel_G.material} skeleton={nodes.bloc_wheel_G.skeleton} />
<skinnedMesh geometry={nodes.cart_base.geometry} material={nodes.cart_base.material} skeleton={nodes.cart_base.skeleton} />
<skinnedMesh geometry={nodes.cart_boad_AB.geometry} material={nodes.cart_boad_AB.material} skeleton={nodes.cart_boad_AB.skeleton} />
<skinnedMesh geometry={nodes.cart_boad_AH.geometry} material={nodes.cart_boad_AH.material} skeleton={nodes.cart_boad_AH.skeleton} />
<skinnedMesh geometry={nodes.cart_boad_DB.geometry} material={nodes.cart_boad_DB.material} skeleton={nodes.cart_boad_DB.skeleton} />
<skinnedMesh geometry={nodes.cart_boad_DH.geometry} material={nodes.cart_boad_DH.material} skeleton={nodes.cart_boad_DH.skeleton} />
<skinnedMesh geometry={nodes.cart_boad_GB.geometry} material={nodes.cart_boad_GB.material} skeleton={nodes.cart_boad_GB.skeleton} />
<skinnedMesh geometry={nodes.cart_boad_GH.geometry} material={nodes.cart_boad_GH.material} skeleton={nodes.cart_boad_GH.skeleton} />
<skinnedMesh geometry={nodes.cart_post_AD.geometry} material={nodes.cart_post_AD.material} skeleton={nodes.cart_post_AD.skeleton} />
<skinnedMesh geometry={nodes.cart_post_AG.geometry} material={nodes.cart_post_AG.material} skeleton={nodes.cart_post_AG.skeleton} />
<skinnedMesh geometry={nodes.cart_post_AM.geometry} material={nodes.cart_post_AM.material} skeleton={nodes.cart_post_AM.skeleton} />
<skinnedMesh geometry={nodes.cart_post_Ar.geometry} material={nodes.cart_post_Ar.material} skeleton={nodes.cart_post_Ar.skeleton} />
<skinnedMesh geometry={nodes.cart_post_ArD.geometry} material={nodes.cart_post_ArD.material} skeleton={nodes.cart_post_ArD.skeleton} />
<skinnedMesh geometry={nodes.cart_post_ArG.geometry} material={nodes.cart_post_ArG.material} skeleton={nodes.cart_post_ArG.skeleton} />
<skinnedMesh geometry={nodes.cart_post_crane.geometry} material={nodes.cart_post_crane.material} skeleton={nodes.cart_post_crane.skeleton} />
<skinnedMesh geometry={nodes.cart_post_DMA.geometry} material={nodes.cart_post_DMA.material} skeleton={nodes.cart_post_DMA.skeleton} />
<skinnedMesh geometry={nodes.cart_post_DMAr.geometry} material={nodes.cart_post_DMAr.material} skeleton={nodes.cart_post_DMAr.skeleton} />
<skinnedMesh geometry={nodes.cart_post_GMA.geometry} material={nodes.cart_post_GMA.material} skeleton={nodes.cart_post_GMA.skeleton} />
<skinnedMesh geometry={nodes.cart_post_GMAr.geometry} material={nodes.cart_post_GMAr.material} skeleton={nodes.cart_post_GMAr.skeleton} />
<skinnedMesh geometry={nodes.cart_rope.geometry} material={nodes.cart_rope.material} skeleton={nodes.cart_rope.skeleton} />
<skinnedMesh geometry={nodes.hub_wheel_D.geometry} material={nodes.hub_wheel_D.material} skeleton={nodes.hub_wheel_D.skeleton} />
<skinnedMesh geometry={nodes.hub_wheel_G.geometry} material={nodes.hub_wheel_G.material} skeleton={nodes.hub_wheel_G.skeleton} />
<skinnedMesh geometry={nodes.skull_1.geometry} material={nodes.skull_1.material} skeleton={nodes.skull_1.skeleton} />
<skinnedMesh geometry={nodes.spokes_wheel_D.geometry} material={nodes.spokes_wheel_D.material} skeleton={nodes.spokes_wheel_D.skeleton} />
<skinnedMesh geometry={nodes.spokes_wheel_G.geometry} material={nodes.spokes_wheel_G.material} skeleton={nodes.spokes_wheel_G.skeleton} />
<skinnedMesh geometry={nodes.steel_wheel_D.geometry} material={nodes.steel_wheel_D.material} skeleton={nodes.steel_wheel_D.skeleton} />
<skinnedMesh geometry={nodes.steel_wheel_G.geometry} material={nodes.steel_wheel_G.material} skeleton={nodes.steel_wheel_G.skeleton} />
<skinnedMesh geometry={nodes.wood_wheel_D.geometry} material={nodes.wood_wheel_D.material} skeleton={nodes.wood_wheel_D.skeleton} />
<skinnedMesh geometry={nodes.wood_wheel_G.geometry} material={nodes.wood_wheel_G.material} skeleton={nodes.wood_wheel_G.skeleton} />

</group>
   
    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ankou-with-cart/model.gltf')