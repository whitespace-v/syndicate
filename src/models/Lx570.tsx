import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
    Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
    Mesh954_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh769_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
    Mesh319_ice_minute1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
    Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
    Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh759_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh716_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh745_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
    Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
    Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
    Mesh383_G_44_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1350_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
    Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570: THREE.Mesh
    Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
    Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh1136_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh750_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1119_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh1359_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
    Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_: THREE.Mesh
    Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
    Mesh1058_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh755_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
    Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
    Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex: THREE.Mesh
    Mesh1050_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh735_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh45_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
    Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
    Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
    Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
    Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
    Mesh497_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh760_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh764_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1115_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh739_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
    Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
    Mesh51_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
    Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570: THREE.Mesh
    Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
    Ext_aluminiumshiny_Submesh_452_Root_13: THREE.Mesh
    Ext_aluminiumshny_Submesh_8616_Root_16: THREE.Mesh
    Ext_blackpaint_Submesh_13718_Root_15: THREE.Mesh
    Ext_brushedmetal002_Submesh_766_Root_27: THREE.Mesh
    Ext_carpaint001_Submesh_90445_Root_8: THREE.Mesh
    Ext_carpaint1_Submesh_1692_Root_10: THREE.Mesh
    Ext_carpaint2_Submesh_1686_Root_9: THREE.Mesh
    Ext_carpaint7_Submesh_2397_Root_7: THREE.Mesh
    Ext_carpaint_sensor_Submesh_626_Root_17: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4: THREE.Mesh
    Ext_chrome2_Submesh_1361_Root_5: THREE.Mesh
    Ext_chrome3_Submesh_1376_Root_6: THREE.Mesh
    Ext_chrome_exhust_Submesh_1173_Root_14: THREE.Mesh
    Ext_chrome_linepattern_Submesh_298_Root_21: THREE.Mesh
    Ext_chrome_squarepattern_Submesh_118_Root_24: THREE.Mesh
    Ext_chromeorange_squarepattern_Submesh_8_Root_31: THREE.Mesh
    Ext_chromered_Submesh_9605_Root_32: THREE.Mesh
    Ext_chromered_linepattern_Submesh_326_Root_22: THREE.Mesh
    Ext_chromered_squarepattern_Submesh_286_Root_20: THREE.Mesh
    Ext_filler_plasticdiffuse_Submesh_3220_Root_23: THREE.Mesh
    Ext_foglight_chrome_Submesh_4724_Root_11: THREE.Mesh
    Ext_foglight_chrome_linepattern_Submesh_551_Root_12: THREE.Mesh
    Ext_foglight_plasticshiny_Submesh_2075_Root_19: THREE.Mesh
    Ext_glassclear_Submesh_6748_Root_2: THREE.Mesh
    Ext_glasstinted_Submesh_868_Root_1: THREE.Mesh
    Ext_plasticdiffuse_Submesh_16253_Root_25: THREE.Mesh
    Ext_plasticdiffuse_floaters_Submesh_92_Root_30: THREE.Mesh
    Ext_plasticshiny_Submesh_28383_Root_18: THREE.Mesh
    Ext_plasticshiny_plates_Submesh_384_Root_29: THREE.Mesh
    Int_chrome_Submesh_96_Root_44: THREE.Mesh
    Int_plasticdiffuse_Submesh_14533_Root_43: THREE.Mesh
    Int_plasticshiny_Submesh_9610_Root_45: THREE.Mesh
    LightsMain_Submesh_134_Root_0: THREE.Mesh
    LightsMain_Submesh_52_Root_0: THREE.Mesh
    Ext_brushedmetal_Submesh_210_Root_5001: THREE.Mesh
    Ext_blackpaint_Submesh_13718_Root_15001: THREE.Mesh
    Ext_brushedmetal_discbrake002_Submesh_890_Root_26001: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4001: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4003: THREE.Mesh
    Ext_brushedmetal002_Submesh_766_Root_27001_Ext_brushedmetal002_Submesh_766_Root_27002: THREE.Mesh
    Ext_brushedmetal_Submesh_210_Root_5002_Ext_brushedmetal_Submesh_210_Root_5004: THREE.Mesh
    Ext_hub_blackpaint_Submesh_41_Root_4002_Ext_hub_blackpaint_Submesh_41_Root_4004_1: THREE.Mesh
    Ext_hub_blackpaint_Submesh_41_Root_4002_Ext_hub_blackpaint_Submesh_41_Root_4004_2: THREE.Mesh
    Ext_hub_blackpaint_Submesh_41_Root_4002_Ext_hub_blackpaint_Submesh_41_Root_4004_3: THREE.Mesh
    Ext_blackpaint_Submesh_13718_Root_15002_Ext_blackpaint_Submesh_13718_Root_15003: THREE.Mesh
    Ext_brushedmetal_discbrake002_Submesh_890_Root_26002: THREE.Mesh
    Ext_tyres_Submesh_5734_Root_28002_Ext_tyres_Submesh_5734_Root_28004: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4002_Ext_chrome003_Submesh_30095_Root_4005: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4004_Ext_chrome003_Submesh_30095_Root_4006: THREE.Mesh
    Ext_brushedmetal002_Submesh_766_Root_27002_Ext_brushedmetal002_Submesh_766_Root_27003: THREE.Mesh
    Ext_brushedmetal_Submesh_210_Root_5003_Ext_brushedmetal_Submesh_210_Root_5005: THREE.Mesh
    Ext_blackpaint_Submesh_13718_Root_15003_Ext_blackpaint_Submesh_13718_Root_15004: THREE.Mesh
    Ext_brushedmetal_discbrake002_Submesh_890_Root_26003: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4005_Ext_chrome003_Submesh_30095_Root_4007: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4006_Ext_chrome003_Submesh_30095_Root_4008: THREE.Mesh
    Ext_brushedmetal002_Submesh_766_Root_27003_Ext_brushedmetal002_Submesh_766_Root_27004: THREE.Mesh
    Ext_brushedmetal_Submesh_210_Root_5004_Ext_brushedmetal_Submesh_210_Root_5006: THREE.Mesh
    Ext_blackpaint_Submesh_13718_Root_15004_Ext_blackpaint_Submesh_13718_Root_15005: THREE.Mesh
    Ext_brushedmetal_discbrake002_Submesh_890_Root_26004: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4007_Ext_chrome003_Submesh_30095_Root_4009: THREE.Mesh
    Ext_chrome003_Submesh_30095_Root_4008_Ext_chrome003_Submesh_30095_Root_4010: THREE.Mesh
    LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
    LKSS_SIZE_028_Mesh_2010: THREE.Mesh
  }
  materials: {
    ['(null)']: THREE.MeshStandardMaterial
    black_plastic_matt: THREE.MeshStandardMaterial
    body_color: THREE.MeshStandardMaterial
    black_plastic_gloss: THREE.MeshStandardMaterial
    ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
    ['Rg2Mtl.001']: THREE.MeshStandardMaterial
    ['Meshpart12Mtl._ff']: THREE.MeshStandardMaterial
    ['gum.001']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/lx570.glb') as GLTFResult
     const clickHandler = (e: any) => {
        let new_material = e.object.material.clone();
        new_material.color.setRGB(0,1,0);
        e.object.material = new_material;
        e.object.material.needsUpdate = true
        // and need to call your render function to apply changes to scene
    }
  return (
  //@ts-ignore
    <group ref={group} {...props} dispose={null}  onDoubleClick={e => {e.stopPropagation(); clickHandler(e)}}>
      <mesh geometry={nodes.Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh954_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh769_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh319_ice_minute1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh759_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh716_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh745_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh383_G_44_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.body_color} />
      <mesh geometry={nodes.Mesh1350_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_gloss} />
      <mesh geometry={nodes.Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} />
      <mesh geometry={nodes.Mesh1136_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh750_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1119_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1359_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} />
      <mesh geometry={nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh1058_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh755_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1050_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh735_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} />
      <mesh geometry={nodes.Mesh45_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh497_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} />
      <mesh geometry={nodes.Mesh760_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} />
      <mesh geometry={nodes.Mesh764_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1115_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh739_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh51_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.Ext_aluminiumshiny_Submesh_452_Root_13.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_aluminiumshny_Submesh_8616_Root_16.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8.geometry} material={materials.body_color} />
      <mesh geometry={nodes.Ext_carpaint1_Submesh_1692_Root_10.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_carpaint2_Submesh_1686_Root_9.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_carpaint7_Submesh_2397_Root_7.geometry} material={materials.black_plastic_gloss} />
      <mesh geometry={nodes.Ext_carpaint_sensor_Submesh_626_Root_17.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_chrome2_Submesh_1361_Root_5.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_chrome3_Submesh_1376_Root_6.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_chrome_exhust_Submesh_1173_Root_14.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chrome_linepattern_Submesh_298_Root_21.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chrome_squarepattern_Submesh_118_Root_24.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chromeorange_squarepattern_Submesh_8_Root_31.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chromered_Submesh_9605_Root_32.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chromered_linepattern_Submesh_326_Root_22.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chromered_squarepattern_Submesh_286_Root_20.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_filler_plasticdiffuse_Submesh_3220_Root_23.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_foglight_chrome_Submesh_4724_Root_11.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_foglight_chrome_linepattern_Submesh_551_Root_12.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_foglight_plasticshiny_Submesh_2075_Root_19.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_glassclear_Submesh_6748_Root_2.geometry} material={materials['Rg2Mtl.001']} />
      <mesh geometry={nodes.Ext_glasstinted_Submesh_868_Root_1.geometry} material={materials['Rg2Mtl.001']} />
      <mesh geometry={nodes.Ext_plasticdiffuse_Submesh_16253_Root_25.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_plasticdiffuse_floaters_Submesh_92_Root_30.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_plasticshiny_Submesh_28383_Root_18.geometry} material={materials.black_plastic_gloss} />
      <mesh geometry={nodes.Ext_plasticshiny_plates_Submesh_384_Root_29.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Int_chrome_Submesh_96_Root_44.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Int_plasticdiffuse_Submesh_14533_Root_43.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Int_plasticshiny_Submesh_9610_Root_45.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.LightsMain_Submesh_134_Root_0.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.LightsMain_Submesh_52_Root_0.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5001.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15001.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26001.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4001.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4003.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27001_Ext_brushedmetal002_Submesh_766_Root_27002.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5002_Ext_brushedmetal_Submesh_210_Root_5004.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4002_Ext_hub_blackpaint_Submesh_41_Root_4004_1.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4002_Ext_hub_blackpaint_Submesh_41_Root_4004_2.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4002_Ext_hub_blackpaint_Submesh_41_Root_4004_3.geometry} material={materials['Meshpart12Mtl._ff']} />
      <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15002_Ext_blackpaint_Submesh_13718_Root_15003.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26002.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_tyres_Submesh_5734_Root_28002_Ext_tyres_Submesh_5734_Root_28004.geometry} material={materials['gum.001']} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4002_Ext_chrome003_Submesh_30095_Root_4005.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4004_Ext_chrome003_Submesh_30095_Root_4006.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27002_Ext_brushedmetal002_Submesh_766_Root_27003.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5003_Ext_brushedmetal_Submesh_210_Root_5005.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15003_Ext_blackpaint_Submesh_13718_Root_15004.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26003.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4005_Ext_chrome003_Submesh_30095_Root_4007.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4006_Ext_chrome003_Submesh_30095_Root_4008.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27003_Ext_brushedmetal002_Submesh_766_Root_27004.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5004_Ext_brushedmetal_Submesh_210_Root_5006.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15004_Ext_blackpaint_Submesh_13718_Root_15005.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26004.geometry} material={materials.black_plastic_matt} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4007_Ext_chrome003_Submesh_30095_Root_4009.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4008_Ext_chrome003_Submesh_30095_Root_4010.geometry} material={materials['Meshpart12Mtl.001']} />
      <mesh geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={materials['(null)']} />
      <mesh geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={materials['(null)']} />
    </group>
  )
}

useGLTF.preload('/lx570.glb')