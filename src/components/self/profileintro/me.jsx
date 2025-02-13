import { useGLTF } from '@react-three/drei'

export default function Me(props) {
  const { nodes, materials } = useGLTF('models/me.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.006}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[36.065, 335.473, 106.21]}
            rotation={[-1.702, 0.061, -2.682]}
            scale={[42.719, 51.631, 1.494]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fridge004_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fridge004_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-137.465, 95.22, -117.824]}
            rotation={[2.794, 0.102, -3.141]}
            scale={13.774}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet004_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet004_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet004_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet004_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet004_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group position={[108.57, -27.688, 28.122]} rotation={[-1.756, -0.325, 2.151]} scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1007_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1007_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-99.784, 100.051, 260.416]}
            rotation={[-1.275, -0.066, -0.949]}
            scale={12.461}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve011_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve011_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve011_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[-55.04, -125.573, 243.589]}
            rotation={[-1.003, -0.726, 2.675]}
            scale={8.62}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lait003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lait003_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[-161.824, 220.507, 10.642]}
            rotation={[-1.978, -0.263, -2.943]}
            scale={12.252}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve010_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve010_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[110.095, -80.714, 137.863]}
            rotation={[-1.102, -0.181, -2.987]}
            scale={[29.164, 29.164, 16.376]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve009_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve009_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve009_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[-11.147, 212.399, 333.829]}
            rotation={[-2.381, -0.028, -0.346]}
            scale={[40.955, 49.157, 49.157]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table2003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table2003_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-272.921, -57.85, 46.283]}
            rotation={[-1.782, 0.111, -2.187]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur003_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[231.186, -107.868, 195.558]}
            rotation={[-0.832, -0.341, 0.511]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fourchette003_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fourchette003_red_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[-48.749, -54.58, -44.988]}
            rotation={[-1.722, -0.168, -2.888]}
            scale={15.688}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chantilly003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chantilly003_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-71.156, 200.147, 134.751]}
            rotation={[-0.661, 0.171, 0.309]}
            scale={8.62}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vin007_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vin007_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-170.883, 162.723, 304.119]}
            rotation={[-1.418, -0.515, -2.131]}
            scale={15.688}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.biberon003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.biberon003_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-23.806, -150.127, -70.709]}
            rotation={[-2.225, 0.532, -0.176]}
            scale={20.909}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spray003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spray003_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group position={[93.976, -174.248, 44.826]} rotation={[-2.088, 0.155, 2.763]} scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cintre003_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cintre003_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[135.291, 101.125, 206.965]}
            rotation={[-1.318, 0.107, 0.965]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cadre003_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cadre003_creme_0.geometry}
              material={materials.creme}
            />
          </group>
          <group
            position={[10.404, 214.762, 236.835]}
            rotation={[-1.062, 0.51, -2.435]}
            scale={21.524}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fouet003_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fouet003_creme_0.geometry}
              material={materials.creme}
            />
          </group>
          <group
            position={[194.619, 77.092, -108.221]}
            rotation={[-1.873, 0.472, 2.388]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur2003_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur2003_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[-161.754, -48.017, 157.048]}
            rotation={[-0.631, -0.004, -3.089]}
            scale={23.522}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bidon003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bidon003_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-86.182, 184.147, -133.759]}
            rotation={[-1.097, 0.398, -2.22]}
            scale={28.725}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.couteau003_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.couteau003_red_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[-68.492, -174.046, -17.012]}
            rotation={[-1.506, -0.167, 2.666]}
            scale={47.452}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.oven003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.oven003_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.oven003_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[-159.532, 50.117, -83.613]}
            rotation={[-1.918, 0.191, 2.661]}
            scale={21.58}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.marmite003_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.marmite003_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[242.375, 36.857, -25.046]}
            rotation={[-1.461, -0.043, 2.796]}
            scale={72.926}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.landeau003_red_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.landeau003_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[90.313, -127.695, 186.615]}
            rotation={[-1.395, -0.44, 2.161]}
            scale={13.774}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet003_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet003_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet003_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet003_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[155.628, 241.089, -2.309]}
            rotation={[-1.136, -0.295, 2.116]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1005_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1005_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[33.046, 78.987, 230.117]}
            rotation={[-1.184, 0.495, -2.375]}
            scale={12.461}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve008_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve008_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve008_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[-22.31, -141.847, -149.069]}
            rotation={[-2.027, 0.031, -0.165]}
            scale={8.62}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lait002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lait002_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[102.067, 170.405, -110.768]}
            rotation={[-1.731, -0.29, 1.187]}
            scale={12.252}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve007_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve007_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-321.108, 198.4, 55.109]}
            rotation={[-2.52, -0.325, -2.534]}
            scale={[29.164, 29.164, 16.376]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve006_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve006_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve006_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[116.064, -114.538, -70.758]}
            rotation={[-1.596, -0.047, 1.617]}
            scale={[40.955, 49.157, 49.157]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table2002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table2002_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[29.125, 169.629, -173.239]}
            rotation={[-1.02, -0.267, 2.834]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur002_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[-228.073, 47.364, -57.417]}
            rotation={[-1.474, 0.348, -2.363]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fourchette002_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fourchette002_red_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[-48.975, -76.914, 56.622]}
            rotation={[-1.008, 0.062, 0.616]}
            scale={15.688}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chantilly002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chantilly002_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[36.363, 106.437, -0.216]}
            rotation={[-2.171, -0.145, 0.227]}
            scale={8.62}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vin004_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vin004_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[162.132, -64.769, -83.04]}
            rotation={[-1.781, -0.522, 1.5]}
            scale={15.688}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.biberon002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.biberon002_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[54.146, 209.764, -69.418]}
            rotation={[-1.257, 0.313, -2.739]}
            scale={20.909}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spray002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spray002_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-148.79, -64.066, -137.661]}
            rotation={[-0.063, 0.669, 0.256]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cintre002_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cintre002_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-140.692, -52.079, -69.213]}
            rotation={[-1.317, -0.005, -0.313]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cadre002_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cadre002_creme_0.geometry}
              material={materials.creme}
            />
          </group>
          <group
            position={[-101.29, 113.255, 168.73]}
            rotation={[-1.146, -0.548, -0.775]}
            scale={21.524}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fouet002_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fouet002_creme_0.geometry}
              material={materials.creme}
            />
          </group>
          <group
            position={[-79.415, -191.398, 280.253]}
            rotation={[-1.631, 0.522, -1.522]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur2002_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur2002_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[-11.957, 245.008, -12.253]}
            rotation={[-1.128, 0.026, -3.086]}
            scale={23.522}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bidon002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bidon002_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-195.755, 118.851, -28.335]}
            rotation={[-1.6, -0.627, 1.701]}
            scale={28.725}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.couteau002_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.couteau002_red_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[-32.993, -49.731, 474.094]}
            rotation={[-2.008, -0.454, 1.82]}
            scale={72.926}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bmx002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bmx002_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bmx002_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[140.361, 260.623, 146.257]}
            rotation={[-1.531, -0.274, -0.522]}
            scale={21.58}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.marmite002_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.marmite002_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[181.831, -101.667, 325.952]}
            rotation={[-0.791, -0.922, -0.209]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1004_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1004_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-244.796, 232.14, -5.889]}
            rotation={[-1.814, 0.317, -2.763]}
            scale={72.926}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.landeau002_red_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.landeau002_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-85.027, -86.847, -96.241]}
            rotation={[-1.224, 0.616, -2.441]}
            scale={13.774}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet002_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet002_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet002_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet002_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet002_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[201.019, 110.304, -33.443]}
            rotation={[-2.471, 0.149, -0.035]}
            scale={12.461}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve005_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve005_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve005_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[13.297, 207.113, 101.571]}
            rotation={[-1.048, 0.608, 0.887]}
            scale={8.62}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lait001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.lait001_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[-65.375, -9.838, 130.808]}
            rotation={[-0.733, 0.997, -2.591]}
            scale={12.252}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve004_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve004_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-116.65, -58.949, 104.739]}
            rotation={[-1.561, 0.525, -1.664]}
            scale={[29.164, 29.164, 16.376]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve003_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve003_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.conserve003_rose_0.geometry}
              material={materials.rose}
            />
          </group>
          <group
            position={[-299.494, -51.535, -45.63]}
            rotation={[-1.065, -0.448, 2.24]}
            scale={[40.955, 49.157, 49.157]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table2001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table2001_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[154.068, -30.571, 190.996]}
            rotation={[-1.392, -0.146, -0.488]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur001_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[-325.707, -12.205, -173.363]}
            rotation={[-1.542, 0.297, -0.863]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fourchette001_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fourchette001_red_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[59.139, 363.529, 130.591]}
            rotation={[-1.128, 0.026, -3.086]}
            scale={15.688}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chantilly001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.chantilly001_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-295.614, 59.757, -19.867]}
            rotation={[-1.77, 0.798, 2.14]}
            scale={8.62}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vin002_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.vin002_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[17.921, 14.496, -90.922]}
            rotation={[-2.295, 0.225, -2.93]}
            scale={15.688}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.biberon001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.biberon001_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[16.071, -63.256, 51.011]}
            rotation={[-1.213, -0.3, 2.859]}
            scale={20.909}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spray001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.spray001_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group
            position={[-227.654, 182.825, -69.037]}
            rotation={[-1.408, 0.316, 3.007]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cintre001_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cintre001_plateau_0.geometry}
              material={materials.plateau}
            />
          </group>
          <group position={[89.155, -3.77, -67.623]} rotation={[-1.169, 0.041, -0.143]} scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cadre001_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cadre001_creme_0.geometry}
              material={materials.creme}
            />
          </group>
          <group
            position={[-37.438, 132.376, 59.504]}
            rotation={[-1.606, -1.021, 1.445]}
            scale={21.524}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fouet001_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.fouet001_creme_0.geometry}
              material={materials.creme}
            />
          </group>
          <group
            position={[-165.39, 135.878, 199.219]}
            rotation={[-2.043, -0.329, -2.269]}
            scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur2001_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ordinateur2001_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[94.705, -42.218, -167.215]}
            rotation={[-1.596, -0.047, 1.617]}
            scale={23.522}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bidon001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bidon001_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[129.985, 23.84, 104.43]}
            rotation={[-2.32, -0.468, 0.629]}
            scale={28.725}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.couteau001_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.couteau001_red_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[232.573, 115.354, 137.168]}
            rotation={[-1.264, 0.29, -0.081]}
            scale={47.452}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.oven001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.oven001_table_0.geometry}
              material={materials.table}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.oven001_violet_0.geometry}
              material={materials.violet}
            />
          </group>
          <group
            position={[168.415, 35.112, -249.796]}
            rotation={[-1.243, -0.274, 1.553]}
            scale={72.926}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bmx001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bmx001_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bmx001_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-18.516, -65.191, 290.905]}
            rotation={[-0.881, -0.195, -0.39]}
            scale={21.58}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.marmite001_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.marmite001_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group position={[-177.906, 71.937, 76.81]} rotation={[-0.727, -0.029, -3.03]} scale={35}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1001_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.table1001_table_0.geometry}
              material={materials.table}
            />
          </group>
          <group
            position={[-10.545, 154.581, 36.263]}
            rotation={[-2.951, -0.027, -0.018]}
            scale={13.774}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet001_rose_0.geometry}
              material={materials.rose}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet001_creme_0.geometry}
              material={materials.creme}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet001_plateau_0.geometry}
              material={materials.plateau}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet001_violet_0.geometry}
              material={materials.violet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hochet001_table_0.geometry}
              material={materials.table}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.womanMesh002_outline_0.geometry}
            material={materials.outline}
            position={[-28.862, 12.549, 234.733]}
            rotation={[0.149, 0, 0]}
            scale={21.068}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.womanMesh001_body_0.geometry}
            material={materials.body}
            position={[-28.862, 12.549, 234.733]}
            rotation={[0.149, 0, 0]}
            scale={21.068}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere269_rose_0.geometry}
            material={materials.rose}
            position={[403.292, 68.799, -123.951]}
            rotation={[-0.787, -0.909, 2.429]}
            scale={2.126}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere268_red_0.geometry}
            material={materials.material}
            position={[205.032, -111.877, 229.348]}
            rotation={[-2.203, -0.057, -0.941]}
            scale={2.203}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere267_violet_0.geometry}
            material={materials.violet}
            position={[-446.814, 55.156, 76.767]}
            rotation={[-0.855, 1.219, 0.384]}
            scale={4.47}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere266_table_0.geometry}
            material={materials.table}
            position={[87.427, -155.72, 274.274]}
            rotation={[-1.837, -0.28, -2.425]}
            scale={1.244}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere265_plateau_0.geometry}
            material={materials.plateau}
            position={[52.076, 233.783, 211.601]}
            rotation={[-1.367, -0.483, -0.601]}
            scale={1.767}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere264_creme_0.geometry}
            material={materials.creme}
            position={[346.613, -174.71, -69.812]}
            rotation={[-1.543, -0.367, -0.475]}
            scale={4.099}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere263_rose_0.geometry}
            material={materials.rose}
            position={[-242.391, -22.599, -30.088]}
            rotation={[-1.351, 0.634, 0.884]}
            scale={4.01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere262_red_0.geometry}
            material={materials.material}
            position={[-70.113, 119.987, 493.189]}
            rotation={[-2.082, 0.42, -2.053]}
            scale={4.209}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere261_violet_0.geometry}
            material={materials.violet}
            position={[-431.942, -48.439, -110.53]}
            rotation={[-1.189, 0.126, 3.103]}
            scale={1.788}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere260_table_0.geometry}
            material={materials.table}
            position={[-303.352, -105.089, 108.345]}
            rotation={[3.089, -0.047, 0.236]}
            scale={3.642}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere259_plateau_0.geometry}
            material={materials.plateau}
            position={[-114.278, -268.588, 40.83]}
            rotation={[-1.288, -0.334, -1.158]}
            scale={2.355}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere258_creme_0.geometry}
            material={materials.creme}
            position={[79.048, 250.82, 100.992]}
            rotation={[-1.331, -0.205, -1.285]}
            scale={1.497}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere257_rose_0.geometry}
            material={materials.rose}
            position={[-204.987, -138.347, -53.902]}
            rotation={[-1.793, -0.225, 0.87]}
            scale={4.871}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere256_red_0.geometry}
            material={materials.material}
            position={[-79.347, -197.949, 38.858]}
            rotation={[-2.061, 1.528, 2.287]}
            scale={4.724}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere255_violet_0.geometry}
            material={materials.violet}
            position={[55.939, 255.209, -18.237]}
            rotation={[-1.155, -0.113, -1.111]}
            scale={2.493}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere254_table_0.geometry}
            material={materials.table}
            position={[353.039, 56.918, -148.891]}
            rotation={[-1.707, -0.643, 0.836]}
            scale={2.752}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere253_plateau_0.geometry}
            material={materials.plateau}
            position={[-129.041, 106.642, 372.547]}
            rotation={[-2.601, 0.24, -2.217]}
            scale={4.784}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere252_creme_0.geometry}
            material={materials.creme}
            position={[-341.467, -44.434, 60.879]}
            rotation={[-1.582, -0.076, 2.424]}
            scale={2.226}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere251_rose_0.geometry}
            material={materials.rose}
            position={[-403.622, -90.264, 132.709]}
            rotation={[-0.657, -0.02, 2.268]}
            scale={3.993}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere250_red_0.geometry}
            material={materials.material}
            position={[26.721, -40.496, -159.019]}
            rotation={[-1.31, 0.14, 1.471]}
            scale={1.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere249_violet_0.geometry}
            material={materials.violet}
            position={[-144.402, 209.119, 155.285]}
            rotation={[-1.32, 0.183, 0.837]}
            scale={2.197}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere248_table_0.geometry}
            material={materials.table}
            position={[-48.888, 213.618, 198.113]}
            rotation={[-1.804, -0.71, 0.8]}
            scale={2.784}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere247_plateau_0.geometry}
            material={materials.plateau}
            position={[265.048, -20.119, -38.006]}
            rotation={[-1.652, 0.561, -1.227]}
            scale={2.924}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere246_creme_0.geometry}
            material={materials.creme}
            position={[-326.803, -30.427, -101.738]}
            rotation={[-1.564, 0.538, 1.481]}
            scale={1.317}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere245_rose_0.geometry}
            material={materials.rose}
            position={[-225.247, -299.329, 223.263]}
            rotation={[-1.572, 0.258, 2.056]}
            scale={4.535}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere244_red_0.geometry}
            material={materials.material}
            position={[-61.531, -164.102, 195.462]}
            rotation={[-1.156, -0.55, -0.795]}
            scale={4.304}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere243_violet_0.geometry}
            material={materials.violet}
            position={[554.324, 78.782, -141.7]}
            rotation={[-1.232, 0.047, 1.387]}
            scale={4.071}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere242_table_0.geometry}
            material={materials.table}
            position={[40.801, -276.836, 152.329]}
            rotation={[-1.59, -0.214, 0.39]}
            scale={1.671}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere241_plateau_0.geometry}
            material={materials.plateau}
            position={[87.135, -261.818, -8.279]}
            rotation={[-1.381, -0.033, -0.709]}
            scale={1.922}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere240_creme_0.geometry}
            material={materials.creme}
            position={[414.598, 40.788, -219.47]}
            rotation={[-2.331, -0.999, 0.297]}
            scale={3.204}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere239_rose_0.geometry}
            material={materials.rose}
            position={[-456.155, 198.318, 171.795]}
            rotation={[-1.93, 0.853, -2.497]}
            scale={4.577}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere238_red_0.geometry}
            material={materials.material}
            position={[82.243, -225.813, 165.311]}
            rotation={[-1.869, 0.006, -1.084]}
            scale={3.128}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere237_violet_0.geometry}
            material={materials.violet}
            position={[-26.583, 0.321, 305.59]}
            rotation={[-1.367, 0.033, 2.874]}
            scale={1.533}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere236_table_0.geometry}
            material={materials.table}
            position={[-292.074, -56.476, 138.157]}
            rotation={[-2.21, 1.312, 2.549]}
            scale={3.281}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere235_plateau_0.geometry}
            material={materials.plateau}
            position={[-50.275, -21.31, 446.364]}
            rotation={[-2.964, 0.232, -2.934]}
            scale={4.861}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere234_creme_0.geometry}
            material={materials.creme}
            position={[201.335, -163.815, 199.614]}
            rotation={[-2.323, -0.444, 0.122]}
            scale={2.708}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere233_rose_0.geometry}
            material={materials.rose}
            position={[427.422, -196.766, 23.584]}
            rotation={[-1.867, 0.133, -1.511]}
            scale={4.752}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere232_red_0.geometry}
            material={materials.material}
            position={[-52.587, 252.274, 84.771]}
            rotation={[-0.725, -0.32, -0.639]}
            scale={2.784}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere231_violet_0.geometry}
            material={materials.violet}
            position={[-18.399, 191.145, 18.272]}
            rotation={[-0.423, -0.056, -0.169]}
            scale={1.871}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere230_table_0.geometry}
            material={materials.table}
            position={[-92.376, 0.274, -212.827]}
            rotation={[-0.175, -0.222, -2.911]}
            scale={1.795}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere229_plateau_0.geometry}
            material={materials.plateau}
            position={[159.107, 260.526, 39.254]}
            rotation={[-0.491, -0.185, -2.433]}
            scale={4.019}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere228_creme_0.geometry}
            material={materials.creme}
            position={[105.69, 143.158, 445.877]}
            rotation={[-2.045, 0.666, 1.148]}
            scale={3.384}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere227_rose_0.geometry}
            material={materials.rose}
            position={[-300.253, 146.541, -61.882]}
            rotation={[-0.27, 0.322, 2.316]}
            scale={4.58}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere226_red_0.geometry}
            material={materials.material}
            position={[-14.48, -9.964, 49.688]}
            rotation={[-1.407, -0.209, 1.71]}
            scale={1.713}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere225_violet_0.geometry}
            material={materials.violet}
            position={[-334.661, 104.247, 161.257]}
            rotation={[-1.133, 0.07, 2.674]}
            scale={2.637}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere224_table_0.geometry}
            material={materials.table}
            position={[240.034, 207.73, 112.323]}
            rotation={[-2.41, 0.201, -0.606]}
            scale={2.138}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere223_plateau_0.geometry}
            material={materials.plateau}
            position={[-326.309, 200.176, 275.476]}
            rotation={[-2.122, -0.49, 1.489]}
            scale={4.458}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere222_creme_0.geometry}
            material={materials.creme}
            position={[328.81, -225.485, 172.449]}
            rotation={[-1.727, -0.413, -0.829]}
            scale={4.514}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere221_rose_0.geometry}
            material={materials.rose}
            position={[346.072, 308.378, -130.544]}
            rotation={[-1.984, -0.264, -0.624]}
            scale={4.443}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere220_red_0.geometry}
            material={materials.material}
            position={[88.337, 169.056, 63.868]}
            rotation={[-1.151, 0.416, 0.745]}
            scale={1.431}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere219_violet_0.geometry}
            material={materials.violet}
            position={[-296.656, 203.383, 172.031]}
            rotation={[-2.645, 1.318, 2.734]}
            scale={3.639}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere218_table_0.geometry}
            material={materials.table}
            position={[-345.711, -11.051, 261.673]}
            rotation={[-0.909, 0.386, 2.713]}
            scale={3.654}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere217_plateau_0.geometry}
            material={materials.plateau}
            position={[187.397, -218.607, 110.782]}
            rotation={[-1.745, -1.067, 1.511]}
            scale={4.453}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere216_creme_0.geometry}
            material={materials.creme}
            position={[-182.65, 214.175, -42.83]}
            rotation={[-0.965, 0.226, 0.33]}
            scale={3.103}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere215_rose_0.geometry}
            material={materials.rose}
            position={[79.277, 135.226, -32.099]}
            rotation={[-1.087, 0.643, 0.813]}
            scale={1.583}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere214_red_0.geometry}
            material={materials.material}
            position={[356.514, 114.507, -162.553]}
            rotation={[-2.976, -1.37, -0.053]}
            scale={1.433}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere213_violet_0.geometry}
            material={materials.violet}
            position={[410.715, -84.55, -283.57]}
            rotation={[-1.216, -0.367, 1.884]}
            scale={4.145}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere212_table_0.geometry}
            material={materials.table}
            position={[-234.763, -109.772, 62.644]}
            rotation={[-1.475, -0.034, 2.569]}
            scale={1.97}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere211_plateau_0.geometry}
            material={materials.plateau}
            position={[144.239, -44.36, 68.248]}
            rotation={[-1.429, 0.118, -1.198]}
            scale={1.396}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere210_creme_0.geometry}
            material={materials.creme}
            position={[-4.743, 290.689, 27.589]}
            rotation={[-1.371, -0.469, 1.211]}
            scale={2.028}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere209_rose_0.geometry}
            material={materials.rose}
            position={[-63.477, -40.321, -46.471]}
            rotation={[-1.123, 0.428, 0.362]}
            scale={1.914}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere208_red_0.geometry}
            material={materials.material}
            position={[147.41, 129.88, -100.048]}
            rotation={[-0.862, 0.552, 0.572]}
            scale={1.882}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere207_violet_0.geometry}
            material={materials.violet}
            position={[-320.971, 52.864, 38.941]}
            rotation={[-1.321, 0.743, 0.589]}
            scale={2.314}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere206_table_0.geometry}
            material={materials.table}
            position={[-199.995, 91.855, 201.458]}
            rotation={[-2.031, 0.35, 2.121]}
            scale={1.721}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere205_plateau_0.geometry}
            material={materials.plateau}
            position={[-213.977, 7.301, 229.687]}
            rotation={[-1.81, 0.754, 1.735]}
            scale={2.192}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere204_creme_0.geometry}
            material={materials.creme}
            position={[-212.844, -177.339, 41.033]}
            rotation={[-0.38, 0.647, -3.099]}
            scale={2.746}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere203_rose_0.geometry}
            material={materials.rose}
            position={[182.879, 353.968, 157.277]}
            rotation={[-1.855, -0.427, -1.152]}
            scale={2.865}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere202_red_0.geometry}
            material={materials.material}
            position={[-220.706, -165.179, -182.728]}
            rotation={[-1.36, 0.104, 1.017]}
            scale={3.855}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere201_violet_0.geometry}
            material={materials.violet}
            position={[-360.521, 4.34, 134.59]}
            rotation={[-1.782, 0.921, 2.819]}
            scale={3.711}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere200_table_0.geometry}
            material={materials.table}
            position={[9.655, 29.476, 87.701]}
            rotation={[-1.524, -0.187, -1.179]}
            scale={1.41}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere199_plateau_0.geometry}
            material={materials.plateau}
            position={[277.654, 94.403, -318.108]}
            rotation={[-1.288, 0.092, 2.183]}
            scale={4.514}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere198_creme_0.geometry}
            material={materials.creme}
            position={[-267.812, -9.51, 279.667]}
            rotation={[-1.733, 0.92, 1.573]}
            scale={2.581}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere197_rose_0.geometry}
            material={materials.rose}
            position={[-36.936, 22.532, -175.093]}
            rotation={[-0.504, -0.628, 2.641]}
            scale={1.728}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere196_red_0.geometry}
            material={materials.material}
            position={[-379.685, 4.178, -180.612]}
            rotation={[0.339, 0.719, 2.785]}
            scale={3.095}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere195_violet_0.geometry}
            material={materials.violet}
            position={[-479.978, -124.138, -248.615]}
            rotation={[-1.983, 0.427, 3.042]}
            scale={3.38}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere194_table_0.geometry}
            material={materials.table}
            position={[-56.494, -91.029, -109.037]}
            rotation={[-1.138, -1.055, 1.579]}
            scale={4.726}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere193_plateau_0.geometry}
            material={materials.plateau}
            position={[64.295, 221.798, -69.937]}
            rotation={[-0.821, 0.202, -0.626]}
            scale={2.695}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere192_creme_0.geometry}
            material={materials.creme}
            position={[-181.522, 240.996, -111.652]}
            rotation={[-0.849, 0.525, -2.765]}
            scale={3.284}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere191_rose_0.geometry}
            material={materials.rose}
            position={[228.457, -6.277, -130.251]}
            rotation={[-1.522, 0.364, -0.793]}
            scale={3.24}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere190_red_0.geometry}
            material={materials.material}
            position={[-58.661, -133.857, 314.761]}
            rotation={[-2.013, 0.356, -2.265]}
            scale={4.209}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere189_violet_0.geometry}
            material={materials.violet}
            position={[-111.524, -213.691, 119.259]}
            rotation={[-1.613, -0.151, -1.789]}
            scale={2.673}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere188_table_0.geometry}
            material={materials.table}
            position={[-252.691, 86.413, 192.688]}
            rotation={[-1.544, 0.175, -0.472]}
            scale={1.894}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere187_plateau_0.geometry}
            material={materials.plateau}
            position={[436.777, 130.906, -191.761]}
            rotation={[-1.845, -0.384, 0.215]}
            scale={2.302}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere186_creme_0.geometry}
            material={materials.creme}
            position={[195.277, -129.417, -146.119]}
            rotation={[-1.732, -0.17, 0.594]}
            scale={3.887}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere185_rose_0.geometry}
            material={materials.rose}
            position={[371.742, -81.661, -91.518]}
            rotation={[-2.444, -0.193, -0.093]}
            scale={2.527}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere184_red_0.geometry}
            material={materials.material}
            position={[-119.27, -116.758, 90.741]}
            rotation={[-1.705, -0.01, 1.707]}
            scale={2.845}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere183_violet_0.geometry}
            material={materials.violet}
            position={[144.434, -12.953, 45.596]}
            rotation={[-1.918, 0.451, 1.783]}
            scale={3.56}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere182_table_0.geometry}
            material={materials.table}
            position={[-100.48, -274.974, -76.33]}
            rotation={[-1.009, -0.249, 2.166]}
            scale={4.742}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere181_plateau_0.geometry}
            material={materials.plateau}
            position={[-328.207, 138.708, 28.089]}
            rotation={[-1.964, 1.307, 1.988]}
            scale={3.874}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere180_creme_0.geometry}
            material={materials.creme}
            position={[-3.967, -232.094, 240.668]}
            rotation={[-1.766, -0.126, -0.171]}
            scale={3.38}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere179_rose_0.geometry}
            material={materials.rose}
            position={[-66.942, -73.304, 259.471]}
            rotation={[-1.401, 0.527, -2.188]}
            scale={1.769}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere178_red_0.geometry}
            material={materials.material}
            position={[-389.354, 17.908, -48.728]}
            rotation={[-1.808, 0.022, 1.505]}
            scale={3.431}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere177_violet_0.geometry}
            material={materials.violet}
            position={[422.942, -96.621, 165.179]}
            rotation={[-1.842, -0.614, -1.127]}
            scale={4.546}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere176_table_0.geometry}
            material={materials.table}
            position={[-232.247, 122.027, 11.925]}
            rotation={[-1.93, 0.322, -3.136]}
            scale={1.444}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere175_plateau_0.geometry}
            material={materials.plateau}
            position={[-118.975, 10.632, 331.306]}
            rotation={[-2.259, 0.088, -2.737]}
            scale={2.958}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere174_creme_0.geometry}
            material={materials.creme}
            position={[-75.362, -43.016, -101.174]}
            rotation={[-1.332, -1.311, 1.865]}
            scale={1.504}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere173_rose_0.geometry}
            material={materials.rose}
            position={[275.408, 281.712, -109.118]}
            rotation={[-0.089, -0.594, -1.88]}
            scale={4.641}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere172_red_0.geometry}
            material={materials.material}
            position={[114.497, 102.996, 374.53]}
            rotation={[-1.972, -0.099, 2.382]}
            scale={2.646}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere171_violet_0.geometry}
            material={materials.violet}
            position={[233.238, 163.571, 76.111]}
            rotation={[-1.366, -1.411, 1.362]}
            scale={2.777}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere170_table_0.geometry}
            material={materials.table}
            position={[-95.447, -48.436, -176.129]}
            rotation={[-1.562, -0.899, 1.395]}
            scale={2.134}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere169_plateau_0.geometry}
            material={materials.plateau}
            position={[-223.448, -12.915, -156.414]}
            rotation={[-1.643, 0.534, 1.764]}
            scale={2.882}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere168_creme_0.geometry}
            material={materials.creme}
            position={[-236.004, 22.585, 22.218]}
            rotation={[-1.91, 0.224, 1.6]}
            scale={2.189}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere167_rose_0.geometry}
            material={materials.rose}
            position={[121.753, -190.201, 301.868]}
            rotation={[-1.584, 0.115, -1.935]}
            scale={2.575}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere166_red_0.geometry}
            material={materials.material}
            position={[-319.371, -7.357, 44.478]}
            rotation={[-1.628, 0.483, 1.461]}
            scale={4.614}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere165_violet_0.geometry}
            material={materials.violet}
            position={[31.937, 94.659, -283.928]}
            rotation={[-1.11, 0.113, 2.297]}
            scale={4.329}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere164_table_0.geometry}
            material={materials.table}
            position={[55.694, 240.878, 136.598]}
            rotation={[-1.735, 0.144, -0.572]}
            scale={1.712}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere163_plateau_0.geometry}
            material={materials.plateau}
            position={[-254.269, 44.644, -85.708]}
            rotation={[-1.419, 0.161, 3.104]}
            scale={1.768}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere162_creme_0.geometry}
            material={materials.creme}
            position={[147.555, 65.042, -29.108]}
            rotation={[-1.551, -0.023, 1.868]}
            scale={1.556}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere161_rose_0.geometry}
            material={materials.rose}
            position={[137.966, 101.975, 108.439]}
            rotation={[-1.493, -1.003, -1.835]}
            scale={2.624}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere160_red_0.geometry}
            material={materials.material}
            position={[417.985, -123.248, -208.146]}
            rotation={[-0.64, -0.458, -0.017]}
            scale={3.874}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere159_violet_0.geometry}
            material={materials.violet}
            position={[-56.487, 390.894, -58.748]}
            rotation={[-0.65, -0.568, -1.76]}
            scale={4.26}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere158_table_0.geometry}
            material={materials.table}
            position={[6.737, 10.146, -169.804]}
            rotation={[-0.631, 0.032, 0.66]}
            scale={3.326}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere157_plateau_0.geometry}
            material={materials.plateau}
            position={[39.773, -122.97, -170.803]}
            rotation={[-1.61, 0.357, -0.613]}
            scale={2.062}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere156_creme_0.geometry}
            material={materials.creme}
            position={[-55.275, 152.099, -124.066]}
            rotation={[-2.941, 0.657, 0.102]}
            scale={2.894}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere155_rose_0.geometry}
            material={materials.rose}
            position={[173.747, 268.389, 186.491]}
            rotation={[-2.257, -0.606, -2.187]}
            scale={3.845}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere154_red_0.geometry}
            material={materials.material}
            position={[197.444, -302.739, -6.739]}
            rotation={[-1.394, -0.277, 1.531]}
            scale={3.613}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere153_violet_0.geometry}
            material={materials.violet}
            position={[-11.65, 229.526, 39.246]}
            rotation={[-1.801, -0.095, 0.391]}
            scale={1.924}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere152_table_0.geometry}
            material={materials.table}
            position={[372.678, -25.642, -19.163]}
            rotation={[-1.561, -0.244, -1.69]}
            scale={4.145}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere151_plateau_0.geometry}
            material={materials.plateau}
            position={[232.201, 131.262, 122.477]}
            rotation={[-1.644, -0.525, -0.73]}
            scale={2.89}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere150_creme_0.geometry}
            material={materials.creme}
            position={[-384.824, -88.776, 276.802]}
            rotation={[-2.076, 0.34, -2.929]}
            scale={4.809}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere149_rose_0.geometry}
            material={materials.rose}
            position={[345.303, 75.283, -201.294]}
            rotation={[-1.923, 0.399, -0.917]}
            scale={2.39}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere148_red_0.geometry}
            material={materials.material}
            position={[-357.913, -176.637, -14.579]}
            rotation={[-1.148, 0.127, -3.12]}
            scale={4.515}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere147_violet_0.geometry}
            material={materials.violet}
            position={[-331.078, 311.903, -112.648]}
            rotation={[-0.126, -0.27, 1.95]}
            scale={4.72}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere146_table_0.geometry}
            material={materials.table}
            position={[91.084, 100.015, 248.766]}
            rotation={[2.869, -0.151, -0.078]}
            scale={3.41}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere145_plateau_0.geometry}
            material={materials.plateau}
            position={[-90.152, -145.595, -115.648]}
            rotation={[-1.658, -0.729, 0.871]}
            scale={2.213}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere144_creme_0.geometry}
            material={materials.creme}
            position={[321.056, -17.139, 215.595]}
            rotation={[0.47, -1.103, -2.379]}
            scale={4.782}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere143_rose_0.geometry}
            material={materials.rose}
            position={[-219.09, -180.444, 293.304]}
            rotation={[-1.689, 0.348, -2.398]}
            scale={3.428}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere142_red_0.geometry}
            material={materials.material}
            position={[-72.101, -18.04, -147.541]}
            rotation={[-0.901, -0.251, 2.594]}
            scale={1.388}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere141_violet_0.geometry}
            material={materials.violet}
            position={[-192.095, -59.906, 146.699]}
            rotation={[-1.318, -0.824, 1.867]}
            scale={2.448}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere140_table_0.geometry}
            material={materials.table}
            position={[-34.035, -125.832, -2.512]}
            rotation={[-1.695, -0.217, 0.855]}
            scale={3.378}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere139_plateau_0.geometry}
            material={materials.plateau}
            position={[113.585, 8.756, 281.344]}
            rotation={[-1.047, 0.992, -2.342]}
            scale={3.338}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere138_creme_0.geometry}
            material={materials.creme}
            position={[-39.656, -23.892, 213.49]}
            rotation={[-2.414, -0.634, -2.092]}
            scale={3.7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere137_rose_0.geometry}
            material={materials.rose}
            position={[-307.974, 82.269, -227.847]}
            rotation={[-1.755, -0.086, -2.672]}
            scale={4.141}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere136_red_0.geometry}
            material={materials.material}
            position={[-167.905, 133.818, -51.732]}
            rotation={[-1.264, 0.323, 2.316]}
            scale={4.608}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere135_violet_0.geometry}
            material={materials.violet}
            position={[-25.558, -84.723, -172.772]}
            rotation={[-1.233, -0.243, 1.309]}
            scale={2.38}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere134_table_0.geometry}
            material={materials.table}
            position={[395.244, -115.227, 7.399]}
            rotation={[-0.833, -0.272, -2.59]}
            scale={4.415}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere133_plateau_0.geometry}
            material={materials.plateau}
            position={[133.13, -236.174, 128.202]}
            rotation={[-1.977, 0.222, -0.518]}
            scale={3.725}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere132_creme_0.geometry}
            material={materials.creme}
            position={[171.702, -44.161, 213.766]}
            rotation={[-2.697, -0.214, -0.235]}
            scale={1.608}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere131_rose_0.geometry}
            material={materials.rose}
            position={[282.704, -221.307, 404.035]}
            rotation={[-2.212, -0.051, -1.094]}
            scale={4.818}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere130_red_0.geometry}
            material={materials.material}
            position={[-215.031, -241.195, -46.249]}
            rotation={[-0.991, -0.202, 2.106]}
            scale={3.951}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere129_violet_0.geometry}
            material={materials.violet}
            position={[-348.822, -190.501, 232.884]}
            rotation={[-1.964, 1.121, -1.72]}
            scale={4.779}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere128_table_0.geometry}
            material={materials.table}
            position={[-5.529, 55.161, 45.496]}
            rotation={[-1.142, -0.24, -0.184]}
            scale={1.51}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere127_plateau_0.geometry}
            material={materials.plateau}
            position={[-227.865, -97.02, 157.389]}
            rotation={[-1.433, 0.336, 2.277]}
            scale={1.305}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere126_creme_0.geometry}
            material={materials.creme}
            position={[313.34, -48.621, 48.596]}
            rotation={[-1.888, -0.229, -0.734]}
            scale={2.897}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere125_rose_0.geometry}
            material={materials.rose}
            position={[-11.286, -242.345, -105.031]}
            rotation={[-1.148, -0.708, 1.67]}
            scale={4.419}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere124_red_0.geometry}
            material={materials.material}
            position={[28.556, 132.844, -28.389]}
            rotation={[-1.248, -1.406, -1.341]}
            scale={1.379}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere123_violet_0.geometry}
            material={materials.violet}
            position={[-408.378, 20.423, 191.575]}
            rotation={[-1.055, -0.004, 2.554]}
            scale={4.557}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere122_table_0.geometry}
            material={materials.table}
            position={[-29.112, 130.572, 380.182]}
            rotation={[-2.003, 0.582, -1.491]}
            scale={2.363}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere121_plateau_0.geometry}
            material={materials.plateau}
            position={[-359.724, -144.261, 114.731]}
            rotation={[-1.587, 0.547, 2.235]}
            scale={3.371}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere120_creme_0.geometry}
            material={materials.creme}
            position={[-2.09, 129.742, -180.977]}
            rotation={[-0.653, -0.489, 1.843]}
            scale={3.761}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere119_rose_0.geometry}
            material={materials.rose}
            position={[-274.59, 370.784, 21.358]}
            rotation={[0.44, 0.569, 2.229]}
            scale={4.926}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere118_red_0.geometry}
            material={materials.material}
            position={[-14.044, 59.428, 283.017]}
            rotation={[-1.532, 0.17, -0.19]}
            scale={2.564}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere117_violet_0.geometry}
            material={materials.violet}
            position={[255.055, 363.383, -13.867]}
            rotation={[1.768, -1.256, -2.499]}
            scale={4.563}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere116_table_0.geometry}
            material={materials.table}
            position={[-183.539, 251.722, 92.122]}
            rotation={[-1.201, 0.148, -0.729]}
            scale={1.513}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere115_plateau_0.geometry}
            material={materials.plateau}
            position={[358.077, -14.499, -251.105]}
            rotation={[-1.533, -0.587, 0.658]}
            scale={4.113}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere114_creme_0.geometry}
            material={materials.creme}
            position={[334.152, -87.294, 244.756]}
            rotation={[-1.274, 0.477, -1.854]}
            scale={4.617}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere113_rose_0.geometry}
            material={materials.rose}
            position={[375.984, 10.907, -111.054]}
            rotation={[-1.75, -0.407, 0.418]}
            scale={1.999}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere112_red_0.geometry}
            material={materials.material}
            position={[54.279, 201.576, -143.564]}
            rotation={[-1.296, -0.196, -0.151]}
            scale={2.664}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere111_violet_0.geometry}
            material={materials.violet}
            position={[-203.788, 246.528, 268.016]}
            rotation={[-2.669, 0.623, -2.27]}
            scale={4.38}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere110_table_0.geometry}
            material={materials.table}
            position={[106.784, -50.073, -182.803]}
            rotation={[-1.497, -0.061, 1.38]}
            scale={3.125}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere109_plateau_0.geometry}
            material={materials.plateau}
            position={[252.933, -203.132, 138.602]}
            rotation={[-1.669, -0.204, -1.878]}
            scale={3.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere108_creme_0.geometry}
            material={materials.creme}
            position={[153.219, 108.147, 270.119]}
            rotation={[-2.83, -0.242, -0.367]}
            scale={1.652}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere107_rose_0.geometry}
            material={materials.rose}
            position={[-170.592, 158.637, 37.334]}
            rotation={[-1.093, 0.631, 0.287]}
            scale={2.789}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere106_red_0.geometry}
            material={materials.material}
            position={[241.42, -293.05, 124.368]}
            rotation={[-1.479, -0.166, -1.611]}
            scale={3.26}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere105_violet_0.geometry}
            material={materials.violet}
            position={[45.693, -303.337, -208.563]}
            rotation={[-1.247, 0.669, -1.799]}
            scale={4.857}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere104_table_0.geometry}
            material={materials.table}
            position={[58.025, -252.664, 123.343]}
            rotation={[-2.752, -0.468, -3.139]}
            scale={1.805}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere103_plateau_0.geometry}
            material={materials.plateau}
            position={[8.644, 224.895, 500.632]}
            rotation={[-2.27, 0.826, -2.057]}
            scale={4.386}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere102_creme_0.geometry}
            material={materials.creme}
            position={[-199.904, 184.285, -120.536]}
            rotation={[-1.805, 0.524, 1.23]}
            scale={3.409}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere101_rose_0.geometry}
            material={materials.rose}
            position={[81.048, 347.844, 56.382]}
            rotation={[-1.094, -1.254, -0.596]}
            scale={3.622}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere100_red_0.geometry}
            material={materials.material}
            position={[27.151, -113.788, -85.474]}
            rotation={[-1.495, 0.08, 0.396]}
            scale={1.348}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere099_violet_0.geometry}
            material={materials.violet}
            position={[150.19, 162.675, 172.833]}
            rotation={[-1.394, -0.139, -0.107]}
            scale={1.663}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere098_table_0.geometry}
            material={materials.table}
            position={[260.242, -264.319, 55.484]}
            rotation={[-1.843, -0.095, -0.769]}
            scale={4.411}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere097_plateau_0.geometry}
            material={materials.plateau}
            position={[461.148, 53.23, -146.551]}
            rotation={[-1.893, -0.244, -0.355]}
            scale={2.936}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere096_creme_0.geometry}
            material={materials.creme}
            position={[31.461, -92.72, -296.12]}
            rotation={[-1.644, 0.631, 2.581]}
            scale={4.569}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere095_rose_0.geometry}
            material={materials.rose}
            position={[86.922, 95.403, 11.087]}
            rotation={[-2.231, 0.915, 2.28]}
            scale={1.449}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere094_red_0.geometry}
            material={materials.material}
            position={[58.99, 89.147, 66.299]}
            rotation={[-1.832, -0.146, -0.9]}
            scale={1.99}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere093_violet_0.geometry}
            material={materials.violet}
            position={[-282.159, -53.082, -300.467]}
            rotation={[-0.781, 0.595, -1.933]}
            scale={4.613}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere092_table_0.geometry}
            material={materials.table}
            position={[-43.042, 43.798, 144.047]}
            rotation={[-1.424, 0.003, -0.971]}
            scale={1.304}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere091_plateau_0.geometry}
            material={materials.plateau}
            position={[335.075, -218.439, 318.172]}
            rotation={[-1.069, -0.466, 3.012]}
            scale={4.77}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere090_creme_0.geometry}
            material={materials.creme}
            position={[-218.128, 136.817, 252.045]}
            rotation={[-2.339, 0.079, 0.063]}
            scale={2.935}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere089_rose_0.geometry}
            material={materials.rose}
            position={[-107.57, 85.19, -38.717]}
            rotation={[-0.816, 0.49, 1.051]}
            scale={4.024}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere088_red_0.geometry}
            material={materials.material}
            position={[-140.007, -277.937, 311.359]}
            rotation={[-1.544, -0.374, -1.156]}
            scale={4.378}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere087_violet_0.geometry}
            material={materials.violet}
            position={[-24.96, 146.501, 229.388]}
            rotation={[-1.104, -0.091, -0.325]}
            scale={1.938}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere086_table_0.geometry}
            material={materials.table}
            position={[-69.985, 77.551, -134.026]}
            rotation={[-1.236, -1.032, 1.093]}
            scale={3.542}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere085_plateau_0.geometry}
            material={materials.plateau}
            position={[159.661, 38.853, 66.735]}
            rotation={[-1.296, -0.006, 1.126]}
            scale={1.833}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere084_creme_0.geometry}
            material={materials.creme}
            position={[114.568, 97.185, -40.044]}
            rotation={[-1.147, -0.046, 2.858]}
            scale={1.801}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere083_rose_0.geometry}
            material={materials.rose}
            position={[341.96, 74.606, 174.171]}
            rotation={[-1.914, -0.934, 0.637]}
            scale={3.216}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere082_red_0.geometry}
            material={materials.material}
            position={[-100.176, 304.451, 69.717]}
            rotation={[-1.224, 0.515, -1.417]}
            scale={2.685}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere081_violet_0.geometry}
            material={materials.violet}
            position={[283.814, -148.664, 293.377]}
            rotation={[-2.203, 0.14, -0.909]}
            scale={4.001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere080_table_0.geometry}
            material={materials.table}
            position={[-181.6, -180.152, -304.481]}
            rotation={[-1.246, 0.004, 1.308]}
            scale={4.778}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere079_plateau_0.geometry}
            material={materials.plateau}
            position={[163.141, -106.56, -20.618]}
            rotation={[-1.468, -0.034, -0.905]}
            scale={3.476}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere078_creme_0.geometry}
            material={materials.creme}
            position={[-217.823, 69.465, 318.971]}
            rotation={[-1.858, 0.288, -1.502]}
            scale={3.681}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere077_rose_0.geometry}
            material={materials.rose}
            position={[-131.657, -327.109, 130.097]}
            rotation={[-1.518, 0.332, 1.068]}
            scale={4.496}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere076_red_0.geometry}
            material={materials.material}
            position={[162.846, -36.839, 316.275]}
            rotation={[-2.246, -0.191, -1.806]}
            scale={4.584}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere075_violet_0.geometry}
            material={materials.violet}
            position={[-218.093, 64.851, 69.484]}
            rotation={[-1.434, -0.276, 2.501]}
            scale={1.261}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere074_table_0.geometry}
            material={materials.table}
            position={[106.799, -18.248, -276.373]}
            rotation={[0.221, 0.215, -3.001]}
            scale={4.686}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere073_plateau_0.geometry}
            material={materials.plateau}
            position={[-262.808, -234.472, 100.853]}
            rotation={[-1.753, -0.166, 1.305]}
            scale={4.587}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere072_creme_0.geometry}
            material={materials.creme}
            position={[297.37, -154.351, 110.645]}
            rotation={[-2.778, 0.293, -0.576]}
            scale={2.608}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere071_rose_0.geometry}
            material={materials.rose}
            position={[-232.568, -82.982, -78.376]}
            rotation={[-1.256, -0.045, 2.256]}
            scale={4.147}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere070_red_0.geometry}
            material={materials.material}
            position={[-153.817, 17.869, 163.247]}
            rotation={[-1.851, 0.479, -2.723]}
            scale={4.74}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere069_violet_0.geometry}
            material={materials.violet}
            position={[-0.443, 219.275, -63.167]}
            rotation={[-1.225, 0.571, -0.292]}
            scale={3.55}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere068_table_0.geometry}
            material={materials.table}
            position={[-306.895, 28.364, 195.28]}
            rotation={[-0.881, 0.383, 2.645]}
            scale={2.701}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere067_plateau_0.geometry}
            material={materials.plateau}
            position={[-368.886, -95.767, -146.605]}
            rotation={[-2.252, -0.001, -2.84]}
            scale={3.377}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere066_creme_0.geometry}
            material={materials.creme}
            position={[76.207, -350.548, 134.091]}
            rotation={[-1.378, -0.783, -1.36]}
            scale={3.453}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere065_rose_0.geometry}
            material={materials.rose}
            position={[69.482, -203.232, 240.534]}
            rotation={[-2.417, -0.424, -2.992]}
            scale={1.257}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere064_red_0.geometry}
            material={materials.material}
            position={[246.056, -299.381, -108.625]}
            rotation={[-1.34, -0.039, -1.929]}
            scale={4.756}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere063_violet_0.geometry}
            material={materials.violet}
            position={[159.987, 275.357, 340.996]}
            rotation={[-2.314, 0.042, 1.79]}
            scale={4.13}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere062_table_0.geometry}
            material={materials.table}
            position={[525.771, -276.001, 126.978]}
            rotation={[-1.632, -0.608, -2.945]}
            scale={4.45}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere061_plateau_0.geometry}
            material={materials.plateau}
            position={[248.418, 208.363, -62.644]}
            rotation={[-0.993, -0.597, -0.293]}
            scale={4.987}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere060_creme_0.geometry}
            material={materials.creme}
            position={[-310.458, 204.904, -124.745]}
            rotation={[-1.716, 0.191, 0.883]}
            scale={4.013}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere059_rose_0.geometry}
            material={materials.rose}
            position={[78.878, -34.872, 119.619]}
            rotation={[-1.454, -0.57, -1.323]}
            scale={1.722}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere058_red_0.geometry}
            material={materials.material}
            position={[53.94, 288.256, -257.211]}
            rotation={[-1.586, 0.276, -3.044]}
            scale={4.101}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere057_violet_0.geometry}
            material={materials.violet}
            position={[-206.868, 108.036, 59.319]}
            rotation={[-2.268, -0.461, 0.88]}
            scale={1.729}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere056_table_0.geometry}
            material={materials.table}
            position={[331.523, -187.093, 30.302]}
            rotation={[-1.618, -0.487, -1.074]}
            scale={3.426}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere055_plateau_0.geometry}
            material={materials.plateau}
            position={[271.153, 134.378, -83.438]}
            rotation={[-1.898, -0.126, 0.71]}
            scale={2.936}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere054_creme_0.geometry}
            material={materials.creme}
            position={[104.939, 220.133, -135.703]}
            rotation={[-0.549, 1.01, 0.595]}
            scale={1.646}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere053_rose_0.geometry}
            material={materials.rose}
            position={[-1.376, 123.649, 270.952]}
            rotation={[-0.967, -0.123, 0.062]}
            scale={1.489}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere052_red_0.geometry}
            material={materials.material}
            position={[111.456, 5.94, 442.667]}
            rotation={[-2.835, 0.075, -0.488]}
            scale={4.547}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere051_violet_0.geometry}
            material={materials.violet}
            position={[267.307, -93.878, 181.534]}
            rotation={[-1.784, -0.09, -0.915]}
            scale={2.552}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere050_table_0.geometry}
            material={materials.table}
            position={[389.281, 162.245, 110.554]}
            rotation={[-1.924, -1.015, -1.164]}
            scale={4.943}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere049_plateau_0.geometry}
            material={materials.plateau}
            position={[204.615, -254.827, 330.469]}
            rotation={[-1.89, 0.19, 1.47]}
            scale={4.074}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere048_creme_0.geometry}
            material={materials.creme}
            position={[-249.939, 153.644, -137.666]}
            rotation={[-1.79, 0.396, 2.284]}
            scale={2.064}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere047_rose_0.geometry}
            material={materials.rose}
            position={[2.237, -69.927, 343.072]}
            rotation={[-2.254, 0.344, 2.139]}
            scale={3.387}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere046_red_0.geometry}
            material={materials.material}
            position={[180.496, -144.583, 354.561]}
            rotation={[-2.307, 0.401, -0.971]}
            scale={3.868}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere045_violet_0.geometry}
            material={materials.violet}
            position={[-24.289, 312.581, -81.456]}
            rotation={[-0.605, 0.23, 2.166]}
            scale={2.805}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere044_table_0.geometry}
            material={materials.table}
            position={[173.742, -225.656, -30.312]}
            rotation={[-1.517, -0.233, -0.486]}
            scale={2.644}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere043_plateau_0.geometry}
            material={materials.plateau}
            position={[-38.394, 233.618, -23.439]}
            rotation={[-1.049, 0.106, -0.857]}
            scale={2.34}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere042_creme_0.geometry}
            material={materials.creme}
            position={[175.502, -153.655, 141.139]}
            rotation={[-1.073, -0.855, 2.457]}
            scale={2.796}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere041_rose_0.geometry}
            material={materials.rose}
            position={[105.05, 47.691, -75.855]}
            rotation={[-1.634, -0.618, 1.311]}
            scale={4.039}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere040_red_0.geometry}
            material={materials.material}
            position={[-225.898, 117.841, 177.939]}
            rotation={[-2.161, 0.235, 2.548]}
            scale={2.364}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere039_violet_0.geometry}
            material={materials.violet}
            position={[93.593, 149.807, -160.962]}
            rotation={[-1.036, 0.663, 0.828]}
            scale={2.292}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere038_table_0.geometry}
            material={materials.table}
            position={[82.591, -186.185, -110.996]}
            rotation={[-1.672, -0.068, 1.201]}
            scale={1.605}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere037_plateau_0.geometry}
            material={materials.plateau}
            position={[8.861, -327.278, 252.272]}
            rotation={[-2.138, 0.215, -0.809]}
            scale={4.653}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere036_creme_0.geometry}
            material={materials.creme}
            position={[91.747, 324.957, -32.8]}
            rotation={[-1.559, -0.512, 0.641]}
            scale={3.07}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere035_rose_0.geometry}
            material={materials.rose}
            position={[-159.835, -207.05, -178.197]}
            rotation={[-1.231, 0.106, 1.384]}
            scale={3.308}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere034_red_0.geometry}
            material={materials.material}
            position={[-255.618, 158.327, 80.464]}
            rotation={[-1.598, 0.362, -2.47]}
            scale={1.815}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere033_violet_0.geometry}
            material={materials.violet}
            position={[-213.987, -63.06, 28.72]}
            rotation={[-1.605, 0.08, 2.309]}
            scale={1.336}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere032_table_0.geometry}
            material={materials.table}
            position={[100.549, -253.899, 63.742]}
            rotation={[-1.508, -0.107, -0.473]}
            scale={2.515}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere031_plateau_0.geometry}
            material={materials.plateau}
            position={[-67.342, 7.391, -57.768]}
            rotation={[-0.437, 0.223, 0.225]}
            scale={2.227}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere030_creme_0.geometry}
            material={materials.creme}
            position={[-240.826, 173.668, 128.419]}
            rotation={[-1.654, 0.534, 2.733]}
            scale={2.504}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere029_rose_0.geometry}
            material={materials.rose}
            position={[10.117, 503.413, -37.064]}
            rotation={[0.602, 0.044, -1.311]}
            scale={4.807}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere028_red_0.geometry}
            material={materials.material}
            position={[119.416, 12.042, 121.201]}
            rotation={[-1.997, -0.775, -1.746]}
            scale={2.704}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere027_violet_0.geometry}
            material={materials.violet}
            position={[-125.377, -156.058, 301.462]}
            rotation={[-1.788, 0.157, -2.177]}
            scale={3.524}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere026_table_0.geometry}
            material={materials.table}
            position={[74.017, 44.9, -112.313]}
            rotation={[-1.513, -0.685, -1.928]}
            scale={3.135}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere025_plateau_0.geometry}
            material={materials.plateau}
            position={[108.802, 168.982, 346.849]}
            rotation={[2.792, -1.24, 3.118]}
            scale={2.696}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere024_creme_0.geometry}
            material={materials.creme}
            position={[42.119, 47.112, 2.561]}
            rotation={[-1.205, 0.017, 1.417]}
            scale={1.976}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere023_rose_0.geometry}
            material={materials.rose}
            position={[-442.689, 164.156, 37.195]}
            rotation={[-2.631, 1.017, -0.73]}
            scale={4.245}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere022_red_0.geometry}
            material={materials.material}
            position={[-112.743, 16.578, 275.051]}
            rotation={[-2.336, -0.152, -1.643]}
            scale={3.564}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere021_violet_0.geometry}
            material={materials.violet}
            position={[84.88, -0.291, 229.251]}
            rotation={[-2.206, -0.038, -2.9]}
            scale={1.237}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere020_table_0.geometry}
            material={materials.table}
            position={[295.237, -46.593, -194.467]}
            rotation={[-1.283, -0.198, 0.442]}
            scale={3.786}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere019_plateau_0.geometry}
            material={materials.plateau}
            position={[218.866, -173.096, -96.073]}
            rotation={[-1.521, 0.056, -0.732]}
            scale={3.662}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere018_creme_0.geometry}
            material={materials.creme}
            position={[66.095, -84.329, -16.179]}
            rotation={[-1.976, 0.057, 0.072]}
            scale={3.276}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere017_rose_0.geometry}
            material={materials.rose}
            position={[110.127, 141.033, 45.418]}
            rotation={[-1.413, 0.119, 1.112]}
            scale={1.601}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere016_red_0.geometry}
            material={materials.material}
            position={[-260.589, 241.658, -234.162]}
            rotation={[-1.131, -0.281, -0.721]}
            scale={4.604}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere015_violet_0.geometry}
            material={materials.violet}
            position={[79.643, -92.724, 153.917]}
            rotation={[-1.465, 0.029, 1.911]}
            scale={3.919}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere014_table_0.geometry}
            material={materials.table}
            position={[112.525, 257.61, -184.734]}
            rotation={[-1.679, 0.004, 0.996]}
            scale={2.582}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere013_plateau_0.geometry}
            material={materials.plateau}
            position={[206.953, -52.994, -73.446]}
            rotation={[-2.547, -0.584, -0.342]}
            scale={2.488}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere012_creme_0.geometry}
            material={materials.creme}
            position={[-164.707, -226.373, 137.788]}
            rotation={[-0.471, -0.129, -0.476]}
            scale={2.41}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere011_rose_0.geometry}
            material={materials.rose}
            position={[-62.808, 200.444, 82.646]}
            rotation={[-0.846, 0.54, -1.563]}
            scale={4.605}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere010_red_0.geometry}
            material={materials.material}
            position={[-202.827, 312.304, -37.126]}
            rotation={[0.76, 1.258, -3.034]}
            scale={4.15}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere009_violet_0.geometry}
            material={materials.violet}
            position={[-334.118, 35.151, -28.095]}
            rotation={[-2.6, -0.333, 0.386]}
            scale={2.206}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere008_table_0.geometry}
            material={materials.table}
            position={[230.31, -156.207, -253.546]}
            rotation={[-1.247, -0.334, 1.958]}
            scale={4.442}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere007_plateau_0.geometry}
            material={materials.plateau}
            position={[28.608, -139.882, 158.505]}
            rotation={[-1.926, -0.112, 2.988]}
            scale={1.488}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere006_creme_0.geometry}
            material={materials.creme}
            position={[-32.139, -50.807, 94.826]}
            rotation={[-1.53, -0.55, 0.919]}
            scale={3.644}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fauteuil008_violet_0.geometry}
            material={materials.violet}
            position={[61.416, -269.821, 344.595]}
            rotation={[-1.562, 1.384, 1.994]}
            scale={[19.084, 17.162, 15.945]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chaise003_table_0.geometry}
            material={materials.table}
            position={[10.968, -258.534, 77.053]}
            rotation={[-2.231, 0.318, -3.133]}
            scale={35}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cruche003_table_0.geometry}
            material={materials.table}
            position={[-41.225, -275.853, 214.349]}
            rotation={[-1.745, -0.44, 1.827]}
            scale={11.973}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pelle003_plateau_0.geometry}
            material={materials.plateau}
            position={[-83.303, -13.527, -93.871]}
            rotation={[-1.515, -0.777, 1.961]}
            scale={13.077}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bananes003_plateau_0.geometry}
            material={materials.plateau}
            position={[-110.092, 242.636, 64.046]}
            rotation={[-1.921, 0.074, -2.015]}
            scale={4.555}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vin006_plateau_0.geometry}
            material={materials.plateau}
            position={[153.361, -215.96, 116.483]}
            rotation={[-0.598, -0.389, 3.07]}
            scale={8.62}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chaise002_table_0.geometry}
            material={materials.table}
            position={[-2.157, -89.217, 213.509]}
            rotation={[-0.656, 0.178, 3.037]}
            scale={35}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cruche002_table_0.geometry}
            material={materials.table}
            position={[31.213, 275.213, -146.209]}
            rotation={[-1.171, -0.092, -1.946]}
            scale={11.973}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fauteuil005_red_0.geometry}
            material={materials.material}
            position={[-260.094, -81.358, 350.297]}
            rotation={[-2.956, -0.259, 2.799]}
            scale={[19.084, 17.162, 15.945]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pelle002_plateau_0.geometry}
            material={materials.plateau}
            position={[-58.093, 113.554, -122.722]}
            rotation={[-1.17, -1.197, 1.932]}
            scale={13.077}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bananes002_plateau_0.geometry}
            material={materials.plateau}
            position={[0.765, -133.421, 78.624]}
            rotation={[-1.723, -0.12, -1.834]}
            scale={4.555}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vin003_plateau_0.geometry}
            material={materials.plateau}
            position={[22.808, 351.037, 101.479]}
            rotation={[-0.527, 0.207, 0.933]}
            scale={8.62}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chaise001_table_0.geometry}
            material={materials.table}
            position={[107.379, 144.913, 311.401]}
            rotation={[-1.702, 0.061, -2.682]}
            scale={35}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cruche001_table_0.geometry}
            material={materials.table}
            position={[-77.398, -137.844, 161.166]}
            rotation={[-1.833, 0.656, 1.592]}
            scale={11.973}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pelle001_plateau_0.geometry}
            material={materials.plateau}
            position={[117.251, -49.679, 244.53]}
            rotation={[-1.471, 0.528, -1.675]}
            scale={13.077}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bananes001_plateau_0.geometry}
            material={materials.plateau}
            position={[7.617, 226.805, 142.003]}
            rotation={[-2.245, -0.737, -0.086]}
            scale={4.555}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vin001_plateau_0.geometry}
            material={materials.plateau}
            position={[-178.494, 190.444, -119.682]}
            rotation={[-1.408, 0.316, 3.007]}
            scale={8.62}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/me.glb')
