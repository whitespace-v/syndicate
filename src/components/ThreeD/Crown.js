
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/crown.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials.light_led} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials.black_plastic_matt} position={[-72.7, 0.53, 4.83]} rotation={[1.83, -0.26, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh954_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh769_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials.rims_2} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh319_ice_minute1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials.internal} position={[-3.68, 0, 3.85]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.light_led} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh759_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh716_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh745_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh672_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.black_plastic_matt} position={[-72.7, 0.53, 4.83]} rotation={[1.83, -0.26, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.light_led} position={[-3.69, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh383_G_44_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1350_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_gloss} position={[-3.61, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={materials.rims_2} position={[-72.45, -0.47, 4.78]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials.internal} position={[-72.68, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh13_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={materials.rims_2} position={[-3.69, 0, 4.39]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1136_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh750_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1119_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1359_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry} material={materials.rims_2} position={[-72.7, 0.53, 4.83]} rotation={[1.83, -0.26, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials.internal} position={[-72.45, -0.47, 4.78]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh1058_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.chrome} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh9_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry} material={materials.rims_2} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh755_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.light_led} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.light_led} position={[-3.69, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh674_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1050_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh668_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.45, -0.47, 4.78]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh735_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh707_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh45_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials.tail_light_red} position={[-72.68, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_gloss} position={[-3.61, -0.02, 3.81]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials.internal} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials.tail_light_red} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials.rims_2} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh497_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh760_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh764_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1115_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh739_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials.rims_2} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials.internal} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh51_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.window} position={[-3.61, -0.02, 4.34]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials.rims_2} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={materials.black_plastic_matt} position={[-72.68, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
      <mesh geometry={nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.window} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
      <mesh geometry={nodes.Meshpart1.geometry} material={materials.rims_2} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Crown-WheelBkR_Meshpart2'].geometry} material={materials['gum.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart3.geometry} material={materials['Meshpart3Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart4.geometry} material={materials.rims_2} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Crown-WheelBkL_Meshpart5'].geometry} material={materials['gum.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart6.geometry} material={materials['Meshpart3Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart7.geometry} material={materials.rims_2} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Crown-WheelFtR_Meshpart8'].geometry} material={materials['gum.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart9.geometry} material={materials['Meshpart3Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart10.geometry} material={materials.rims_2} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Crown-WheelFtL_Meshpart11'].geometry} material={materials['gum.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Rg1.geometry} material={materials['Rg1Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Rg2.geometry} material={materials['Rg2Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart12.geometry} material={materials.rims_1} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart13.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart14.geometry} material={materials['Meshpart12Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart15.geometry} material={materials['Meshpart15Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart16.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart17.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart18.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart20.geometry} material={materials['Meshpart20Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart21.geometry} material={materials.rims_1} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart22.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart23.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart24.geometry} material={materials['Meshpart12Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart25.geometry} material={materials['Meshpart13Mtl.002']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart26.geometry} material={materials['Meshpart26Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart27.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart28.geometry} material={materials['Meshpart12Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart29.geometry} material={materials['Meshpart12Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart30.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart31.geometry} material={materials['Rg2Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart32.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart35.geometry} material={materials['Meshpart12Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart37.geometry} material={materials['Meshpart13Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart38.geometry} material={materials.black_plastic_gloss} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart39.geometry} material={materials.rims_1} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart41.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart42.geometry} material={materials['Meshpart42Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.G1.geometry} material={materials['G1Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.G2.geometry} material={materials['G1Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Fg1.geometry} material={materials['Fg1Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart43.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart44.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart45.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart46.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart47.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart48.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart50.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart51.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Crown-Body_Meshpart52'].geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart53.geometry} material={materials.body_color} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.L2.geometry} material={materials['L1Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.L3.geometry} material={materials['Meshpart42Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.L4.geometry} material={materials['L1Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.R1.geometry} material={materials['Meshpart42Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.L5.geometry} material={materials['Meshpart26Mtl.002']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.L6.geometry} material={materials['L1Mtl.002']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Meshpart3001.geometry} material={materials['Meshpart3Mtl.001']} position={[0.01, 0, -1.41]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={materials.None} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
      <mesh geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={materials.None} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
      <mesh geometry={nodes.LKSS_SIZE_00004_Mesh_20004.geometry} material={materials.None} position={[5.41, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
      <mesh geometry={nodes.LKSS_SIZE_00005_Mesh_20005.geometry} material={materials.None} position={[5.41, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
    </group>
  )
}

useGLTF.preload('/crown.glb')
