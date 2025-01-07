import { useGLTF } from '@react-three/drei'

export default function Food(props) {
  const { nodes, materials } = useGLTF('models/street_food_vendor_challenge_-_kokorec.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube102_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[27.796, 178.376, -23.808]}
        rotation={[-1.669, -Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube103_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-13.907, 194.55, 41.485]}
        rotation={[-1.761, 0.473, 0.531]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder315_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-97.991, 284.024, 1.765]}
        rotation={[-Math.PI / 2, 0.165, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder316_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-81.346, 283.215, 2.07]}
        rotation={[-1.559, 0.003, 1.838]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder317_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-68.898, 282.934, 0.923]}
        rotation={[-1.555, -0.653, 1.847]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder318_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-49.678, 280.695, 0.288]}
        rotation={[-1.57, 1.349, -2.587]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder319_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-40.804, 281.971, -0.231]}
        rotation={[-1.558, -0.284, 1.841]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder320_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-29.111, 282.53, 0.572]}
        rotation={[-0.828, -0.638, -0.885]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder321_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-10.516, 284.024, -1.631]}
        rotation={[-Math.PI / 2, 0.165, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder322_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[3.683, 283.215, 2.188]}
        rotation={[-1.559, 0.003, 1.838]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder323_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[15.785, 282.934, -1.608]}
        rotation={[-1.555, -0.653, 1.847]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder324_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[34.999, 280.695, 1.377]}
        rotation={[-1.57, 1.349, -2.587]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder325_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[49.609, 283.501, -0.046]}
        rotation={[-1.558, 0.055, 1.837]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder326_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[73.528, 282.53, -0.482]}
        rotation={[-0.828, -0.638, -0.885]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder336_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-87.607, 276.187, -5.603]}
        rotation={[0.049, -0.263, 0.187]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder337_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-75.683, 275.69, 9.071]}
        rotation={[3.092, 0.263, -2.955]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder338_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-58.717, 279.096, 6.59]}
        rotation={[-2.657, -0.328, 0.838]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder339_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-86.847, 276.898, 9.071]}
        rotation={[-2.686, -0.327, -2.984]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder340_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[38.202, 275.69, 4.046]}
        rotation={[3.092, -0.307, -2.982]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder341_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[43.622, 273.358, 4.046]}
        rotation={[-2.995, -0.402, -0.296]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder342_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[37.565, 277.389, -3.867]}
        rotation={[0.05, 0.307, 0.159]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder343_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[95.144, 275.69, 4.046]}
        rotation={[3.085, 0.588, -2.936]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder344_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[90.941, 273.358, 4.046]}
        rotation={[-2.997, 0.354, -0.404]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder345_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[97.014, 277.761, 0.215]}
        rotation={[3.015, -0.319, 2.907]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder346_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-20.312, 275.768, -3.867]}
        rotation={[0.05, 0.307, 0.159]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder347_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-47.502, 276.542, 9.071]}
        rotation={[-3.113, 0.071, -2.541]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder348_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[87.59, 275.69, -8.919]}
        rotation={[-0.165, 0.432, 0.22]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder350_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-86.209, 185.197, 73.305]}
        rotation={[-1.474, 0.299, -0.081]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder351_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-67.703, 175.953, 78.263]}
        rotation={[-2.995, -0.402, -0.296]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder352_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-77.94, 178.211, 70.349]}
        rotation={[0.05, -0.305, 0.189]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-68.218, 58.341, 34.056]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[53.662, 182.309, 23.753]}
        rotation={[-1.538, 0.035, -0.753]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-62.29, 75.336, 34.056]}
        rotation={[-1.714, -0.101, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube114_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-68.218, 58.341, 3.409]}
        rotation={[-Math.PI / 2, 0, -2.809]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube115_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-63.227, 75.336, 11.79]}
        rotation={[-1.093, -0.101, Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-63.822, 58.341, -9.21]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube117_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-62.864, 75.336, -9.21]}
        rotation={[-1.714, -0.101, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube118_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-63.067, 59.877, -37.298]}
        rotation={[-Math.PI / 2, 0, -2.809]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube119_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-56.91, 75.336, -31.477]}
        rotation={[-1.093, -0.101, Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder354_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-4.97, 280.695, -13.893]}
        rotation={[-2.787, -0.884, -0.736]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder355_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-3.162, 291.463, 0.083]}
        rotation={[-1.82, -0.138, 0.719]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder356_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-60.925, 283.104, -8.317]}
        rotation={[-0.677, -0.333, -0.565]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder357_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-61.907, 292.696, -1.711]}
        rotation={[-1.558, -0.284, 1.841]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder335_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[117.46, 203.354, 2.736]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder370_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[134.644, 197.792, 16.914]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder311_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-92.294, 191.825, 44.937]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder330_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-100.175, 191.825, 27.238]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-32.654, 187.473, 66.471]}
        rotation={[-1.603, 0.047, 0.58]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-110.309, 209.861, -4.462]}
        rotation={[2.1, -1.447, -1.148]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder349_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[133.496, 176.954, 103.652]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube120_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[40.48, 200.612, 6.574]}
        rotation={[0.071, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube121_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[66.614, 133.828, 92.654]}
        rotation={[0, Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube122_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[31.261, 177.619, 38.585]}
        rotation={[1.755, -0.02, -0.374]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[133.24, 194.247, 119.787]}
        rotation={[0, Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder358_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[58.88, 143.471, 76.9]}
        rotation={[-1.559, 0.003, 1.838]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder359_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[72.894, 143.191, 73.989]}
        rotation={[-1.555, -0.653, 1.847]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder360_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[90.108, 141.779, 74.784]}
        rotation={[-1.57, 1.349, -2.587]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder361_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[49.602, 140.951, 76.088]}
        rotation={[-1.57, 1.349, -2.587]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder362_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[71.895, 140.427, 61.169]}
        rotation={[-1.583, -0.003, -1.304]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder363_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[57.882, 140.146, 64.08]}
        rotation={[-1.586, 0.653, -1.295]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder364_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[38.668, 137.907, 61.981]}
        rotation={[-1.572, -1.349, 0.555]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder365_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[81.173, 137.907, 61.981]}
        rotation={[-1.572, -1.349, 0.555]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder366_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[60.653, 149.772, 65.382]}
        rotation={[-1.559, 0.003, 1.838]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder367_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[72.894, 149.321, 58.836]}
        rotation={[-1.555, -0.653, 1.847]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder368_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[92.107, 147.081, 62.809]}
        rotation={[-1.57, 1.349, -2.587]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder369_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[50.131, 146.28, 63.537]}
        rotation={[-1.57, 1.349, -2.587]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder313_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-57.765, 211.961, -39.629]}
        rotation={[-0.391, 1.48, -1.178]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder333_Auto_Mid_Tex_0.geometry}
        material={materials.Auto_Mid_Tex}
        position={[-3.212, 179.764, -51.081]}
        rotation={[-1.658, -0.045, 0.002]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[-94.215, 172.542, -47.553]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[97.837, 183.665, 31.445]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[45.7, 179.903, -47.553]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[-129.508, 163.895, -55.434]}
        rotation={[-1.581, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder312_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[40.041, 216.611, -32.319]}
        rotation={[-0.419, 1.479, -0.363]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[13.473, 178.711, -37.842]}
        rotation={[-1.679, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[72.703, 178.321, -37.842]}
        rotation={[-1.676, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder314_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[141.9, 178.56, -74.764]}
        rotation={[-1.216, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve002_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[-18.717, 373.137, -43.327]}
        rotation={[-2.787, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder327_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[-115.691, 178.56, -74.764]}
        rotation={[-1.216, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCircle002_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[115.004, 222.018, -30.304]}
        rotation={[-Math.PI / 2, 0.027, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder332_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[-99.401, 365.706, -20.505]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder334_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[40.041, 216.23, -56.472]}
        rotation={[-0.793, 1.471, -1.621]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[0, 35.889, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder353_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[-73.637, 113.843, 75.173]}
        rotation={[-1.32, 1.28, -0.261]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube123_Auto_Mid_Tex_02_0.geometry}
        material={materials.Auto_Mid_Tex_02}
        position={[97.837, 183.665, 31.445]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube082_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[0, 35.889, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube083_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-20.733, 35.889, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube084_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-20.733, 35.889, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube085_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[28.981, 35.889, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube087_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-3.511, 35.889, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube088_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-114.201, 136.261, 31.412]}
        rotation={[-Math.PI / 2, -0.148, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube089_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-110.101, 136.845, -32.878]}
        rotation={[-Math.PI / 2, -0.081, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube090_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-103.871, 99.56, -66.153]}
        rotation={[-1.575, -0.037, -0.122]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube091_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-104.019, 89.511, -63.152]}
        rotation={[-1.602, 1.459, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube092_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-104.019, 56.616, -59.773]}
        rotation={[-1.602, 1.459, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder309_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[0, 199.567, -9.547]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder310_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[0, 199.567, -9.547]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube093_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[35.418, 35.889, -19.603]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube094_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[66.831, 136.261, 91.087]}
        rotation={[-1.423, 0, Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube095_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-21.802, 181.671, 57.452]}
        rotation={[-Math.PI / 2, 0, 0.051]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube096_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[0, 35.889, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube098_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-122.198, 81.74, 47.583]}
        rotation={[-1.574, -0.042, -0.065]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube099_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-114.145, 81.769, 48.152]}
        rotation={[-1.575, -0.041, -0.099]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube100_Custom_Tex_01_0.geometry}
        material={materials.Custom_Tex_01}
        position={[-89.288, 81.74, 49.343]}
        rotation={[-1.57, 0.042, 3.12]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus009_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.826, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder371_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.604, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder372_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.542, 0.186, -0.005]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder373_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.61, 0.535, 0.02]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder374_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.541, 0.349, -0.01]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder375_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.624, 0.884, 0.041]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder376_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.534, 0.698, -0.023]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder377_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.672, 1.232, 0.095]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder378_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.515, 1.047, -0.048]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder379_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[2.8, 1.535, 1.913]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder380_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[-1.411, 1.394, -0.157]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder381_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.665, 1.208, 3.053]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder382_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.411, 1.394, -2.985]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder383_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.622, 0.86, 3.103]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder384_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.515, 1.047, -3.093]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder385_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.609, 0.511, 3.123]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder386_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.534, 0.698, -3.118]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder387_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.605, 0.163, 3.136]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder388_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.879, 0]}
        rotation={[1.541, 0.349, -3.131]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder389_Tires_0.geometry}
        material={materials.Tires}
        position={[90.544, 52.893, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder390_Tires_0.geometry}
        material={materials.Tires}
        position={[90.592, 52.857, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus010_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.826, -77.964]}
        rotation={[-0.096, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder391_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.7, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder392_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.638, 0.186, -0.005]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder393_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.706, 0.535, 0.02]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder394_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.637, 0.349, -0.01]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder395_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.72, 0.884, 0.041]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder396_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.63, 0.698, -0.023]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder397_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.768, 1.232, 0.095]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder398_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.611, 1.047, -0.048]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder399_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[2.704, 1.535, 1.913]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder400_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[-1.507, 1.394, -0.157]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder401_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.569, 1.208, 3.053]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder402_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.315, 1.394, -2.985]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder403_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.526, 0.86, 3.103]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder404_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.419, 1.047, -3.093]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder405_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.513, 0.511, 3.123]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder406_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.438, 0.698, -3.118]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder407_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.509, 0.163, 3.136]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder408_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.879, -77.97]}
        rotation={[1.445, 0.349, -3.131]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder409_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.193, 52.893, -77.971]}
        rotation={[-0.096, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder410_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.145, 52.857, -77.967]}
        rotation={[-0.096, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus011_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.826, 77.77]}
        rotation={[-3.046, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder411_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.441, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder412_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.503, -0.186, 3.136]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder413_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.436, -0.535, -3.122]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder414_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.505, -0.349, 3.131]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder415_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.422, -0.884, -3.101]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder416_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.511, -0.698, 3.118]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder417_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.374, -1.232, -3.047]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder418_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.531, -1.047, 3.093]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder419_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[0.438, -1.535, -1.229]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder420_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[-1.634, -1.394, 2.985]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder421_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.572, -1.208, -0.088]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder422_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.826, -1.394, 0.157]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder423_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.616, -0.86, -0.039]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder424_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.723, -1.047, 0.048]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder425_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.628, -0.511, -0.019]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder426_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.703, -0.698, 0.023]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder427_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.633, -0.163, -0.005]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder428_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.879, 77.775]}
        rotation={[1.696, -0.349, 0.01]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder429_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.69, 52.893, 77.777]}
        rotation={[-3.046, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder430_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.737, 52.857, 77.773]}
        rotation={[-3.046, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus012_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.73, 52.826, 77.77]}
        rotation={[-3.046, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus013_Tires_0.geometry}
        material={materials.Tires}
        position={[-24.152, 52.826, -77.964]}
        rotation={[-0.096, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus014_Tires_0.geometry}
        material={materials.Tires}
        position={[90.584, 52.826, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder329_Ayran_0.geometry}
        material={materials.Ayran}
        position={[141.751, 201.491, -30.304]}
        rotation={[-Math.PI / 2, 0.13, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder331_Ayran_0.geometry}
        material={materials.Ayran}
        position={[165.21, 186.353, -29.643]}
        rotation={[Math.PI / 2, 1.431, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022_Ayran_0.geometry}
        material={materials.Ayran}
        position={[-113.716, 210.832, -34.736]}
        rotation={[2.279, 1.472, 2.953]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023_Ayran_0.geometry}
        material={materials.Ayran}
        position={[-112.742, 243.069, -37.233]}
        rotation={[2.279, 1.472, 3]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024_Ayran_0.geometry}
        material={materials.Ayran}
        position={[-113.147, 244.065, -37.204]}
        rotation={[2.332, 1.474, 3.09]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder247_Metals_0.geometry}
        material={materials.Metals}
        position={[-115.459, 159.413, 0]}
        rotation={[-Math.PI / 2, 1.509, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder248_Metals_0.geometry}
        material={materials.Metals}
        position={[-131.9, 158.298, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube086_Metals_0.geometry}
        material={materials.Metals}
        position={[-24.677, 70.781, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder328_Metals_0.geometry}
        material={materials.Metals}
        position={[0, 199.567, -9.547]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube101_Metals_0.geometry}
        material={materials.Metals}
        position={[-109.953, 238.457, -36.369]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube104_Metals_0.geometry}
        material={materials.Metals}
        position={[-95.716, 238.377, -73.844]}
        rotation={[-1.244, 0, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube105_Metals_0.geometry}
        material={materials.Metals}
        position={[-0.447, 238.377, -73.844]}
        rotation={[-1.244, 0, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106_Metals_0.geometry}
        material={materials.Metals}
        position={[98.04, 238.377, -73.844]}
        rotation={[-1.244, 0, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107_Metals_0.geometry}
        material={materials.Metals}
        position={[110.477, 238.377, -30.84]}
        rotation={[-Math.PI / 2, 0.023, -Math.PI]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('models/street_food_vendor_challenge_-_kokorec.glb')
