import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {selectPart} from "../store/reducers/ActionCreators";
import useWindowDimensions from "../hooks/useWindowDimensions";

type GLTFResult = GLTF & {
    nodes: {
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
        Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
        Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570: THREE.Mesh
        Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        toyota_alphard: THREE.Mesh
        toyota_alphard001: THREE.Mesh
        toyota_alphard002: THREE.Mesh
        toyota_alphard003: THREE.Mesh
        toyota_alphard004: THREE.Mesh
        toyota_alphard005: THREE.Mesh
        toyota_alphard006: THREE.Mesh
        toyota_alphard007: THREE.Mesh
        toyota_alphard008: THREE.Mesh
        toyota_alphard009: THREE.Mesh
        toyota_alphard010: THREE.Mesh
        toyota_alphard011: THREE.Mesh
        toyota_alphard012: THREE.Mesh
        toyota_alphard013: THREE.Mesh
        toyota_alphard014: THREE.Mesh
        toyota_alphard015: THREE.Mesh
        toyota_alphard016: THREE.Mesh
        toyota_alphard017: THREE.Mesh
        toyota_alphard018: THREE.Mesh
        toyota_alphard019: THREE.Mesh
        toyota_alphard020: THREE.Mesh
        toyota_alphard021: THREE.Mesh
        toyota_alphard022: THREE.Mesh
        toyota_alphard023: THREE.Mesh
        toyota_alphard024: THREE.Mesh
        toyota_alphard025: THREE.Mesh
        toyota_alphard026: THREE.Mesh
        toyota_alphard027: THREE.Mesh
        toyota_alphard028: THREE.Mesh
        toyota_alphard029: THREE.Mesh
        toyota_alphard030: THREE.Mesh
        toyota_alphard031: THREE.Mesh
        toyota_alphard032: THREE.Mesh
        toyota_alphard033: THREE.Mesh
        toyota_alphard034: THREE.Mesh
        toyota_alphard035: THREE.Mesh
        toyota_alphard036: THREE.Mesh
        toyota_alphard037: THREE.Mesh
        toyota_alphard038: THREE.Mesh
        toyota_alphard040: THREE.Mesh
        toyota_alphard041: THREE.Mesh
        toyota_alphard043: THREE.Mesh
        toyota_alphard044: THREE.Mesh
        toyota_alphard046: THREE.Mesh
        toyota_alphard047: THREE.Mesh
        toyota_alphard048: THREE.Mesh
        toyota_alphard049: THREE.Mesh
        toyota_alphard050: THREE.Mesh
        toyota_alphard051: THREE.Mesh
        toyota_alphard054: THREE.Mesh
        toyota_alphard056: THREE.Mesh
        toyota_alphard042: THREE.Mesh
        toyota_alphard057: THREE.Mesh
        toyota_alphard058: THREE.Mesh
        toyota_alphard059: THREE.Mesh
        toyota_alphard039: THREE.Mesh
        toyota_alphard060: THREE.Mesh
        toyota_alphard045: THREE.Mesh
        LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
        LKSS_SIZE_028_Mesh_2010: THREE.Mesh
    }
    materials: {
        black_plastic_matt: THREE.MeshStandardMaterial
        body_color: THREE.MeshStandardMaterial
        black_plastic_gloss: THREE.MeshStandardMaterial
        ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
        ['gum.001']: THREE.MeshStandardMaterial
        ['Rg2Mtl.001']: THREE.MeshStandardMaterial
        ['Rg1Mtl.001']: THREE.MeshStandardMaterial
    }
}

export default function Model({dispatch} : {dispatch: any}) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/Bus-compressed.glb') as GLTFResult
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
        }, 200)
    }
    return (
        //@ts-ignore
        <group ref={group} dispose={null}
            //@ts-ignore
               onDoubleClick={width > 630 ? e => {e.stopPropagation(); clickHandler(e)}: null} //desktop
            //@ts-ignore
               onClick={ width < 630 ? e => {e.stopPropagation(); clickHandler(e)}: null } //mobile
        >
            <mesh name={'1'} geometry={nodes.toyota_alphard.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'2'} geometry={nodes.toyota_alphard001.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Диски'} geometry={nodes.toyota_alphard002.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Шины'} geometry={nodes.toyota_alphard003.geometry} material={materials['gum.001']} rotation={[Math.PI / 2, 0, 0]} />
            {/*<mesh name={'5'} geometry={nodes.toyota_alphard004.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />*/}
            <mesh name={'6'} geometry={nodes.toyota_alphard005.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'7'} geometry={nodes.toyota_alphard006.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'8'} geometry={nodes.toyota_alphard007.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'9'} geometry={nodes.toyota_alphard008.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'10'} geometry={nodes.toyota_alphard009.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            {/*<mesh name={'11'} geometry={nodes.toyota_alphard010.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />*/}
            <mesh name={'12'} geometry={nodes.toyota_alphard011.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'13'} geometry={nodes.toyota_alphard012.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'14'} geometry={nodes.toyota_alphard013.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'15'} geometry={nodes.toyota_alphard014.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'16'} geometry={nodes.toyota_alphard015.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'17'} geometry={nodes.toyota_alphard016.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            {/*<mesh name={'18'} geometry={nodes.toyota_alphard017.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />*/}
            <mesh name={'19'} geometry={nodes.toyota_alphard018.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'20'} geometry={nodes.toyota_alphard019.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'21'} geometry={nodes.toyota_alphard020.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'22'} geometry={nodes.toyota_alphard021.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Зона Риска'} geometry={nodes.toyota_alphard022.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'24'} geometry={nodes.toyota_alphard023.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Переднее стекло'} geometry={nodes.toyota_alphard024.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Задняя оптика'} geometry={nodes.toyota_alphard025.geometry} material={materials['Rg1Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Передняя оптика'} geometry={nodes.toyota_alphard026.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'28'} geometry={nodes.toyota_alphard027.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'29'} geometry={nodes.toyota_alphard028.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'30'} geometry={nodes.toyota_alphard029.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'31'} geometry={nodes.toyota_alphard030.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'32'} geometry={nodes.toyota_alphard031.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'33'} geometry={nodes.toyota_alphard032.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'34'} geometry={nodes.toyota_alphard033.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={''} geometry={nodes.toyota_alphard034.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={''} geometry={nodes.toyota_alphard035.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            {/*<mesh name={'37'} geometry={nodes.toyota_alphard036.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />*/}
            <mesh name={'38'} geometry={nodes.toyota_alphard037.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Молдинг - хром'} geometry={nodes.toyota_alphard038.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'40'} geometry={nodes.toyota_alphard040.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'41'} geometry={nodes.toyota_alphard041.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'42'} geometry={nodes.toyota_alphard043.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'43'} geometry={nodes.toyota_alphard044.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'44'} geometry={nodes.toyota_alphard046.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'45'} geometry={nodes.toyota_alphard047.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'46'} geometry={nodes.toyota_alphard048.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            {/*<mesh name={'47'} geometry={nodes.toyota_alphard049.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />*/}
            <mesh name={'Заднее боковое стекло'} geometry={nodes.toyota_alphard050.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Лобовое стекло'} geometry={nodes.toyota_alphard051.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Заднее стекло'} geometry={nodes.toyota_alphard054.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'51'} geometry={nodes.toyota_alphard056.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Двери'} geometry={nodes.toyota_alphard042.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'53'} geometry={nodes.toyota_alphard057.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Передний бампер'} geometry={nodes.toyota_alphard058.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Матовый пластик'} geometry={nodes.toyota_alphard059.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'56'} geometry={nodes.toyota_alphard039.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Ручки'} geometry={nodes.toyota_alphard060.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'58'} geometry={nodes.toyota_alphard045.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'59'} geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={nodes.LKSS_SIZE_16001_Mesh_2009.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
            <mesh name={'60'} geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={nodes.LKSS_SIZE_028_Mesh_2010.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
        </group>
    )
}

useGLTF.preload('/Bus-compressed.glb')
