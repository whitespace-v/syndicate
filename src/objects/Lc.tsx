import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useWindowDimensions from "../hooks/useWindowDimensions";
import {selectPart} from "../store/reducers/ActionCreators";
type GLTFResult = GLTF & {
  nodes: {
    ['2022_Toyota_Land_Cruiser_300_HIGH']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH001']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH002']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH003']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH004']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH005']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH006']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH008']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH009']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH010']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH011']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH012']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH013']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH014']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH015']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH016']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH017']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH018']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH019']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH020']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH021']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH022']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH023']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH024']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH025']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH026']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH027']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH029']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH030']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH031']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH032']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH033_1']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH033_2']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH034']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH035']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH036']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH037']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH038']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH039']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH040']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH041']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH042']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH043']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH044']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH045']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH046']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH047']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH048']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH049']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH050']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH051']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH028']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH053']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH007']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH054']: THREE.Mesh
    Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
    Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
    Mesh954_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh769_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
    Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
    Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh759_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh716_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh745_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
    Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
    Mesh383_G_44_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
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
    Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
    Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
    Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
    Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570: THREE.Mesh
    Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
    LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
    LKSS_SIZE_028_Mesh_2010: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH056']: THREE.Mesh
    ['2022_Toyota_Land_Cruiser_300_HIGH052']: THREE.Mesh
  }
  materials: {
    black_plastic_matt: THREE.MeshStandardMaterial
    body_color: THREE.MeshStandardMaterial
    ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
    ['Rg2Mtl.001']: THREE.MeshStandardMaterial
    black_plastic_gloss: THREE.MeshStandardMaterial
    ['gum.001']: THREE.MeshStandardMaterial
    ['Rg1Mtl.001']: THREE.MeshStandardMaterial
    ['(null)']: THREE.MeshStandardMaterial
  }
}

export default function Model({dispatch} : {dispatch: any}) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/lc-compressed.glb') as GLTFResult
  const { width } = useWindowDimensions(); //viewport width

  const clickHandler = (e: any) => {
      let new_material = e.object.material.clone();
      let old_material = e.object.material.clone();
      new_material.color.setRGB(0.294117647,0,0.509803922);
      e.object.material = new_material;
      e.object.material.needsUpdate = true
      dispatch(selectPart(e.object.name))
      setTimeout(() => {
          e.object.material = old_material
      }, 500)
  }
  return (
    //@ts-ignore
    <group ref={group} dispose={null}
                //@ts-ignore
                onDoubleClick={width > 630 ? e => {e.stopPropagation(); clickHandler(e)}: null} //desktop
                //@ts-ignore
                   onClick={ width < 630 ? e => {e.stopPropagation(); clickHandler(e)}: null } //mobile
    >
      {/* <mesh name={'0'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <mesh name={'Зона риска'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH001'].geometry} material={materials.body_color} scale={0.01} />
      {/* <mesh name={'2'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH002'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'3'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH003'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <mesh name={'Матовый пластик'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH005'].geometry} material={materials.black_plastic_matt} scale={0.01} />
      <mesh name={'Задние боковые стекла'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH006'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} />
      {/* <mesh name={'8'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH010'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <mesh name={'Молдинг - хром'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH004'].geometry} material={materials['Meshpart12Mtl.001']} scale={0.01} />
      {/* <mesh name={'10'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH011'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'11'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH012'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'12'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH013'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} /> */}
      {/* <mesh name={'13'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH014'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <mesh name={'Передняя оптика'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH015'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} />
      <mesh name={'Днище'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH016'].geometry} material={materials.black_plastic_matt} scale={0.01} />
      {/* <mesh name={'16'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH017'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'17'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH018'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'18'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH019'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'19'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH020'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <mesh name={'20'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH021'].geometry} material={materials.black_plastic_matt} scale={0.01} />
      {/* <mesh name={'21'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH022'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'22'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH023'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'123'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH024'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'124'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH025'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'125'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH026'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'126'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH027'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'127'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH029'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'128'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH030'].geometry} material={materials.black_plastic_gloss} scale={0.01} /> */}
      <mesh name={'Шины'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH031'].geometry} material={materials['gum.001']} scale={0.01} />
      {/* <mesh name={'130'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH032'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <group scale={0.01}>
        {/* <mesh name={'131'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH033_1'].geometry} material={materials['Meshpart12Mtl.001']} /> */}
        <mesh name={'Диски'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH033_2'].geometry} material={materials['Meshpart12Mtl.001']} />
      </group>
      {/* <mesh name={'133'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH034'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'134'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH035'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <mesh name={'Задняя оптика'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH036'].geometry} material={materials['Rg1Mtl.001']} scale={0.01} />
      <mesh name={'136'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH037'].geometry} material={materials.black_plastic_matt} scale={0.01} />
      <mesh name={'137'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH038'].geometry} material={materials.black_plastic_matt} scale={0.01} />
      <mesh name={'Салон крыша'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH039'].geometry} material={materials.black_plastic_matt} scale={0.01} />
      {/* <mesh name={'139'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH040'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'140'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH041'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'141'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH042'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'142'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH043'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'143'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH044'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'144'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH045'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      {/* <mesh name={'145'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH046'].geometry} material={materials.black_plastic_matt} scale={0.01} /> */}
      <mesh name={'Капот'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH047'].geometry} material={materials.body_color} scale={0.01} />
      <mesh name={'Передний бампер'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH048'].geometry} material={materials.body_color} scale={0.01} />
      <mesh name={'Передние двери'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH049'].geometry} material={materials.body_color} scale={0.01} />
      <mesh name={'Задние двери'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH050'].geometry} material={materials.body_color} scale={0.01} />
      <mesh name={'Ручки'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH051'].geometry} material={materials.black_plastic_matt} scale={0.01} />
      <mesh name={'Лобовое стекло'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH028'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} />
      <mesh name={'Передние стекла'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH053'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} />
      {/* <mesh name={'131533'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH007'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} /> */}
      {/* <mesh name={'13154'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH054'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} /> */}
      {/* <mesh name={'13155'} geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={materials['(null)']} position={[4.99, 0, 0]} rotation={[Math.PI / 2, 0, 0]} /> */}
      {/* <mesh name={'13156'} geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={materials['(null)']} position={[4.99, 0, 0]} rotation={[Math.PI / 2, 0, 0]} /> */}
      <mesh name={'Заднее стекло'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH056'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} />
      {/* <mesh name={'13158'} geometry={nodes['2022_Toyota_Land_Cruiser_300_HIGH052'].geometry} material={materials['Rg2Mtl.001']} scale={0.01} /> */}
    </group>
  )
}

useGLTF.preload('/lc-compressed.glb')
