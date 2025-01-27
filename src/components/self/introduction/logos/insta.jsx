import { useGLTF } from '@react-three/drei'

export default function Insta(props) {
  const { nodes, materials } = useGLTF('models/instagram.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.003']}
        position={[0, 1.017, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.002']}
        position={[0.268, 1.017, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.68}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials['Material.002']}
        position={[0, 1.017, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.341}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['Material.002']}
        position={[0.409, 1.4, -0.38]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.004']}
        position={[1.38, 0.186, 1.105]}
        rotation={[1.689, 0.283, -1.973]}
        scale={0.081}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Material}
          position={[19.25, 3.611, 3.666]}
          rotation={[-2.216, 0.152, 0.203]}
          scale={[0.829, 1.331, 1.802]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Material}
          position={[5.012, -31.754, -7.348]}
          rotation={[-1.477, -0.479, -0.505]}
          scale={[1.615, 2.594, 3.512]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.Material}
          position={[24.446, 0.859, 2.886]}
          rotation={[-2.42, -0.496, -0.831]}
          scale={[1.615, 2.594, 3.512]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.Material}
          position={[2.731, -26.158, -4.436]}
          rotation={[-1.565, 0.13, -0.197]}
          scale={[1.615, 2.594, 3.512]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.Material}
          position={[1.103, -34.362, -7.174]}
          rotation={[-1.844, -0.173, 0.425]}
          scale={[1.615, 2.594, 3.512]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0.686, 0.062, -0.823]}
        rotation={[-0.938, -1.023, 0.229]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-1.211, 0.088, 1.67]}
        rotation={[-1.199, -0.213, -0.027]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-0.705, 0.004, 1.688]}
        rotation={[-0.95, 0.044, 0.592]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-1.303, -0.008, 2.153]}
        rotation={[-0.204, 0.044, 0.591]}
        scale={0.037}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.004']}
        position={[1.373, 0.123, 1.096]}
        rotation={[1.79, 0.216, -2.376]}
        scale={0.069}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.Material}
          position={[3.51, -0.241, 1.958]}
          rotation={[-1.569, 0, 0]}
          scale={3.487}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[1.098, 0.031, -0.446]}
        rotation={[-0.433, -0.033, 1.075]}
        scale={0.019}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.009']}
        position={[0.45, 0.385, 0.957]}
        scale={0.063}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.010']}
        position={[0.415, 0.019, 1.172]}
        scale={0.095}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials['Material.008']}
        position={[0.356, 1.099, 1.308]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials['Material.007']}
        position={[0.249, 1.425, 1.183]}
        scale={0.047}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={materials['Material.005']}
        position={[0.625, 0.835, -1.166]}
        scale={0.074}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials['Material.006']}
        position={[-1.811, 0.656, -1.44]}
        scale={0.046}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials['Material.011']}
        position={[0.249, 2.041, 1.266]}
        scale={0.047}
      />
    </group>
  )
}

useGLTF.preload('models/instagram.glb')
