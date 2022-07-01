import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import {selectPart} from "../store/reducers/ActionCreators";

type GLTFResult = GLTF & {
    nodes: {
        Ext_brushedmetal_Submesh_210_Root_5: THREE.Mesh
        Ext_rim_aluminiumshiny_Submesh_2940_Root_1: THREE.Mesh
        Ext_aluminiumshiny_Submesh_452_Root_13: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15: THREE.Mesh
        Ext_brushedmetal002_Submesh_766_Root_27: THREE.Mesh
        Ext_carpaint001_Submesh_90445_Root_8: THREE.Mesh
        Ext_carpaint7_Submesh_2397_Root_7: THREE.Mesh
        Ext_carpaint_sensor_Submesh_626_Root_17: THREE.Mesh
        Ext_chrome003_Submesh_30095_Root_4: THREE.Mesh
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
        Ext_tyres_Submesh_5734_Root_28: THREE.Mesh
        Int_chrome_Submesh_96_Root_44: THREE.Mesh
        Int_plasticdiffuse_Submesh_14533_Root_43: THREE.Mesh
        Int_plasticshiny_Submesh_9610_Root_45: THREE.Mesh
        LightsMain_Submesh_134_Root_0: THREE.Mesh
        LightsMain_Submesh_52_Root_0: THREE.Mesh
        Ext_brushedmetal_Submesh_210_Root_5001: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15002: THREE.Mesh
        Ext_chrome003_Submesh_30095_Root_4001: THREE.Mesh
        Ext_brushedmetal_Submesh_210_Root_5002: THREE.Mesh
        Ext_brushedmetal002_Submesh_766_Root_27001: THREE.Mesh
        Ext_brushedmetal_discbrake002_Submesh_890_Root_26001: THREE.Mesh
        Ext_brushedmetal_Submesh_210_Root_5003: THREE.Mesh
        Ext_cover_chrome_Submesh_1195_Root_3003: THREE.Mesh
        Ext_hub_blackpaint_Submesh_41_Root_4003: THREE.Mesh
        Ext_glasstinted_Submesh_868_Root_1001: THREE.Mesh
        Ext_glasstinted_Submesh_868_Root_1002: THREE.Mesh
        Ext_glasstinted_Submesh_868_Root_1003: THREE.Mesh
        Ext_carpaint001_Submesh_90445_Root_8001: THREE.Mesh
        Ext_carpaint001_Submesh_90445_Root_8002: THREE.Mesh
        Ext_carpaint001_Submesh_90445_Root_8003: THREE.Mesh
        Ext_carpaint001_Submesh_90445_Root_8004: THREE.Mesh
        Ext_glassclear_Submesh_6748_Root_2001: THREE.Mesh
        Ext_glassclear_Submesh_6748_Root_2002: THREE.Mesh
        Ext_chrome003_Submesh_30095_Root_4003: THREE.Mesh
        Ext_carpaint001_Submesh_90445_Root_8006: THREE.Mesh
        Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
        Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_: THREE.Mesh
        Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
        Mesh1350_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh1359_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5: THREE.Mesh
        Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX: THREE.Mesh
        Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57: THREE.Mesh
        Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus: THREE.Mesh
        Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
        LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
        LKSS_SIZE_028_Mesh_2010: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15001: THREE.Mesh
        Ext_glassclear_Submesh_6748_Root_2003: THREE.Mesh
        Ext_chrome003_Submesh_30095_Root_4002: THREE.Mesh
    }
    materials: {
        ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
        black_plastic_matt: THREE.MeshStandardMaterial
        black_plastic_gloss: THREE.MeshStandardMaterial
        body_color: THREE.MeshStandardMaterial
        ['Rg2Mtl.001']: THREE.MeshStandardMaterial
        ['gum.001']: THREE.MeshStandardMaterial
        ['Rg1Mtl.001']: THREE.MeshStandardMaterial
        ['(null)']: THREE.MeshStandardMaterial
    }
}

export default function Model({dispatch} : {dispatch: any}) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/LX570.glb') as GLTFResult
    const clickHandler = (e: any) => {
        let new_material = e.object.material.clone();
        let old_material = e.object.material.clone()
        new_material.color.setRGB(0.294117647,0,0.509803922); //indigo
        e.object.material = new_material;
        e.object.material.needsUpdate = true
        dispatch(selectPart(e.object.name))
        setTimeout(() => {
            e.object.material = old_material
        }, 500)
    }
    return (
        //@ts-ignore
        <group ref={group} dispose={null} onDoubleClick={e => {e.stopPropagation(); clickHandler(e)}}>
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5.material} position={[-0.67, 0.36, 0.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1.geometry} material={materials['Meshpart12Mtl.001']} position={[-0.67, 0.36, 0.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_aluminiumshiny_Submesh_452_Root_13.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15.geometry} material={materials.black_plastic_gloss} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27.geometry} material={nodes.Ext_brushedmetal002_Submesh_766_Root_27.material} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8.geometry} material={materials.body_color} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint7_Submesh_2397_Root_7.geometry} material={materials.body_color} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint_sensor_Submesh_626_Root_17.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chrome_exhust_Submesh_1173_Root_14.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chrome_linepattern_Submesh_298_Root_21.geometry} material={nodes.Ext_chrome_linepattern_Submesh_298_Root_21.material} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chrome_squarepattern_Submesh_118_Root_24.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chromeorange_squarepattern_Submesh_8_Root_31.geometry} material={nodes.Ext_chromeorange_squarepattern_Submesh_8_Root_31.material} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chromered_Submesh_9605_Root_32.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chromered_linepattern_Submesh_326_Root_22.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chromered_squarepattern_Submesh_286_Root_20.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_filler_plasticdiffuse_Submesh_3220_Root_23.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_foglight_chrome_Submesh_4724_Root_11.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_foglight_chrome_linepattern_Submesh_551_Root_12.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_foglight_plasticshiny_Submesh_2075_Root_19.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_glassclear_Submesh_6748_Root_2.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_glasstinted_Submesh_868_Root_1.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_plasticdiffuse_Submesh_16253_Root_25.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_plasticdiffuse_floaters_Submesh_92_Root_30.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_plasticshiny_Submesh_28383_Root_18.geometry} material={materials.black_plastic_gloss} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_plasticshiny_plates_Submesh_384_Root_29.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_tyres_Submesh_5734_Root_28.geometry} material={materials['gum.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Int_chrome_Submesh_96_Root_44.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Int_plasticdiffuse_Submesh_14533_Root_43.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Int_plasticshiny_Submesh_9610_Root_45.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.LightsMain_Submesh_134_Root_0.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.LightsMain_Submesh_52_Root_0.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5001.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5001.material} position={[0.68, 0.36, 0.97]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15002.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4001.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5002.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5002.material} position={[-0.67, 0.36, -1.45]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27001.geometry} material={nodes.Ext_brushedmetal002_Submesh_766_Root_27001.material} position={[0, 0.01, -2.59]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26001.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0.01, -2.59]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5003.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5003.material} position={[0.68, 0.36, -1.45]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01} />
            <mesh geometry={nodes.Ext_cover_chrome_Submesh_1195_Root_3003.geometry} material={materials['Meshpart12Mtl.001']} position={[0.68, 0.36, -1.45]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01} />
            <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4003.geometry} material={materials.black_plastic_matt} position={[0.68, 0.36, -1.45]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01} />
            <mesh geometry={nodes.Ext_glasstinted_Submesh_868_Root_1001.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_glasstinted_Submesh_868_Root_1002.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_glasstinted_Submesh_868_Root_1003.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8001.geometry} material={materials.body_color} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8002.geometry} material={materials.body_color} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8003.geometry} material={materials.body_color} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8004.geometry} material={materials.body_color} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_glassclear_Submesh_6748_Root_2001.geometry} material={materials['Rg1Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_glassclear_Submesh_6748_Root_2002.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4003.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8006.geometry} material={materials.black_plastic_matt} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials.black_plastic_matt} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh1350_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh1359_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_gloss} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={materials['(null)']} position={[-2.63, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15001.geometry} material={materials.body_color} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_glassclear_Submesh_6748_Root_2003.geometry} material={materials['Rg2Mtl.001']} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4002.geometry} material={materials.black_plastic_gloss} position={[0, 0.01, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </group>
    )
}

useGLTF.preload('/LX570.glb')
