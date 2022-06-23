import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Ext_brushedmetal_Submesh_210_Root_5: THREE.Mesh
        Ext_cover_chrome_Submesh_1195_Root_3: THREE.Mesh
        Ext_hub_blackpaint_Submesh_41_Root_4: THREE.Mesh
        Ext_rim_aluminiumshiny_Submesh_2940_Root_1: THREE.Mesh
        Ext_rim_blackpaint_Submesh_6350_Root_2: THREE.Mesh
        Ext_aluminiumshiny_Submesh_452_Root_13: THREE.Mesh
        Ext_aluminiumshny_Submesh_8616_Root_16: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15: THREE.Mesh
        Ext_brushedmetal002_Submesh_766_Root_27: THREE.Mesh
        Ext_brushedmetal_discbrake002_Submesh_890_Root_26: THREE.Mesh
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
        Ext_tyres_Submesh_5734_Root_28: THREE.Mesh
        Int_chrome_Submesh_96_Root_44: THREE.Mesh
        Int_plasticdiffuse_Submesh_14533_Root_43: THREE.Mesh
        Int_plasticshiny_Submesh_9610_Root_45: THREE.Mesh
        LightsMain_Submesh_134_Root_0: THREE.Mesh
        LightsMain_Submesh_52_Root_0: THREE.Mesh
        Ext_brushedmetal_Submesh_210_Root_5001: THREE.Mesh
        Ext_cover_chrome_Submesh_1195_Root_3001: THREE.Mesh
        Ext_hub_blackpaint_Submesh_41_Root_4001: THREE.Mesh
        Ext_rim_aluminiumshiny_Submesh_2940_Root_1001: THREE.Mesh
        Ext_rim_blackpaint_Submesh_6350_Root_2001: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15001: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15002: THREE.Mesh
        Ext_chrome003_Submesh_30095_Root_4001: THREE.Mesh
        Ext_brushedmetal_Submesh_210_Root_5002: THREE.Mesh
        Ext_cover_chrome_Submesh_1195_Root_3002: THREE.Mesh
        Ext_hub_blackpaint_Submesh_41_Root_4002: THREE.Mesh
        Ext_rim_aluminiumshiny_Submesh_2940_Root_1002: THREE.Mesh
        Ext_rim_blackpaint_Submesh_6350_Root_2002: THREE.Mesh
        Ext_brushedmetal002_Submesh_766_Root_27001: THREE.Mesh
        Ext_brushedmetal_discbrake002_Submesh_890_Root_26001: THREE.Mesh
        Ext_tyres_Submesh_5734_Root_28001: THREE.Mesh
        Ext_brushedmetal_Submesh_210_Root_5003: THREE.Mesh
        Ext_cover_chrome_Submesh_1195_Root_3003: THREE.Mesh
        Ext_hub_blackpaint_Submesh_41_Root_4003: THREE.Mesh
        Ext_rim_aluminiumshiny_Submesh_2940_Root_1003: THREE.Mesh
        Ext_rim_blackpaint_Submesh_6350_Root_2003: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15003: THREE.Mesh
        Ext_blackpaint_Submesh_13718_Root_15004: THREE.Mesh
        Ext_chrome003_Submesh_30095_Root_4002: THREE.Mesh
    }
    materials: {}
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/lx2.glb') as GLTFResult

    const clickHandler = (e: any) => {
        let new_material = e.object.material.clone();
        new_material.color.setRGB(0,1,0);
        e.object.material = new_material;
        e.object.material.needsUpdate = true
    }
    return (
        //@ts-ignore
        <group ref={group} {...props} dispose={null} onDoubleClick={e => {e.stopPropagation(); clickHandler(e)}}>
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5.material} position={[-79.5, 40.75, 134.95]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_cover_chrome_Submesh_1195_Root_3.geometry} material={nodes.Ext_cover_chrome_Submesh_1195_Root_3.material} position={[-79.5, 40.75, 134.95]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4.geometry} material={nodes.Ext_hub_blackpaint_Submesh_41_Root_4.material} position={[-79.5, 40.75, 134.95]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1.geometry} material={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1.material} position={[-79.5, 40.75, 134.95]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2.geometry} material={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2.material} position={[-79.5, 40.75, 134.95]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_aluminiumshiny_Submesh_452_Root_13.geometry} material={nodes.Ext_aluminiumshiny_Submesh_452_Root_13.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_aluminiumshny_Submesh_8616_Root_16.geometry} material={nodes.Ext_aluminiumshny_Submesh_8616_Root_16.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15.geometry} material={nodes.Ext_blackpaint_Submesh_13718_Root_15.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27.geometry} material={nodes.Ext_brushedmetal002_Submesh_766_Root_27.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26.geometry} material={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_carpaint001_Submesh_90445_Root_8.geometry} material={nodes.Ext_carpaint001_Submesh_90445_Root_8.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_carpaint1_Submesh_1692_Root_10.geometry} material={nodes.Ext_carpaint1_Submesh_1692_Root_10.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_carpaint2_Submesh_1686_Root_9.geometry} material={nodes.Ext_carpaint2_Submesh_1686_Root_9.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_carpaint7_Submesh_2397_Root_7.geometry} material={nodes.Ext_carpaint7_Submesh_2397_Root_7.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_carpaint_sensor_Submesh_626_Root_17.geometry} material={nodes.Ext_carpaint_sensor_Submesh_626_Root_17.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4.geometry} material={nodes.Ext_chrome003_Submesh_30095_Root_4.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome2_Submesh_1361_Root_5.geometry} material={nodes.Ext_chrome2_Submesh_1361_Root_5.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome3_Submesh_1376_Root_6.geometry} material={nodes.Ext_chrome3_Submesh_1376_Root_6.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome_exhust_Submesh_1173_Root_14.geometry} material={nodes.Ext_chrome_exhust_Submesh_1173_Root_14.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome_linepattern_Submesh_298_Root_21.geometry} material={nodes.Ext_chrome_linepattern_Submesh_298_Root_21.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome_squarepattern_Submesh_118_Root_24.geometry} material={nodes.Ext_chrome_squarepattern_Submesh_118_Root_24.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chromeorange_squarepattern_Submesh_8_Root_31.geometry} material={nodes.Ext_chromeorange_squarepattern_Submesh_8_Root_31.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chromered_Submesh_9605_Root_32.geometry} material={nodes.Ext_chromered_Submesh_9605_Root_32.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chromered_linepattern_Submesh_326_Root_22.geometry} material={nodes.Ext_chromered_linepattern_Submesh_326_Root_22.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chromered_squarepattern_Submesh_286_Root_20.geometry} material={nodes.Ext_chromered_squarepattern_Submesh_286_Root_20.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_filler_plasticdiffuse_Submesh_3220_Root_23.geometry} material={nodes.Ext_filler_plasticdiffuse_Submesh_3220_Root_23.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_foglight_chrome_Submesh_4724_Root_11.geometry} material={nodes.Ext_foglight_chrome_Submesh_4724_Root_11.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_foglight_chrome_linepattern_Submesh_551_Root_12.geometry} material={nodes.Ext_foglight_chrome_linepattern_Submesh_551_Root_12.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_foglight_plasticshiny_Submesh_2075_Root_19.geometry} material={nodes.Ext_foglight_plasticshiny_Submesh_2075_Root_19.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_glassclear_Submesh_6748_Root_2.geometry} material={nodes.Ext_glassclear_Submesh_6748_Root_2.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_glasstinted_Submesh_868_Root_1.geometry} material={nodes.Ext_glasstinted_Submesh_868_Root_1.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_plasticdiffuse_Submesh_16253_Root_25.geometry} material={nodes.Ext_plasticdiffuse_Submesh_16253_Root_25.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_plasticdiffuse_floaters_Submesh_92_Root_30.geometry} material={nodes.Ext_plasticdiffuse_floaters_Submesh_92_Root_30.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_plasticshiny_Submesh_28383_Root_18.geometry} material={nodes.Ext_plasticshiny_Submesh_28383_Root_18.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_plasticshiny_plates_Submesh_384_Root_29.geometry} material={nodes.Ext_plasticshiny_plates_Submesh_384_Root_29.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_tyres_Submesh_5734_Root_28.geometry} material={nodes.Ext_tyres_Submesh_5734_Root_28.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Int_chrome_Submesh_96_Root_44.geometry} material={nodes.Int_chrome_Submesh_96_Root_44.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Int_plasticdiffuse_Submesh_14533_Root_43.geometry} material={nodes.Int_plasticdiffuse_Submesh_14533_Root_43.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Int_plasticshiny_Submesh_9610_Root_45.geometry} material={nodes.Int_plasticshiny_Submesh_9610_Root_45.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.LightsMain_Submesh_134_Root_0.geometry} material={nodes.LightsMain_Submesh_134_Root_0.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.LightsMain_Submesh_52_Root_0.geometry} material={nodes.LightsMain_Submesh_52_Root_0.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5001.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5001.material} position={[80.12, 40.75, 134.95]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_cover_chrome_Submesh_1195_Root_3001.geometry} material={nodes.Ext_cover_chrome_Submesh_1195_Root_3001.material} position={[80.12, 40.75, 134.95]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4001.geometry} material={nodes.Ext_hub_blackpaint_Submesh_41_Root_4001.material} position={[80.12, 40.75, 134.95]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1001.geometry} material={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1001.material} position={[80.12, 40.75, 134.95]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2001.geometry} material={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2001.material} position={[80.12, 40.75, 134.95]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15001.geometry} material={nodes.Ext_blackpaint_Submesh_13718_Root_15001.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15002.geometry} material={nodes.Ext_blackpaint_Submesh_13718_Root_15002.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4001.geometry} material={nodes.Ext_chrome003_Submesh_30095_Root_4001.material} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5002.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5002.material} position={[-79.5, 40.75, -149.4]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_cover_chrome_Submesh_1195_Root_3002.geometry} material={nodes.Ext_cover_chrome_Submesh_1195_Root_3002.material} position={[-79.5, 40.75, -149.4]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4002.geometry} material={nodes.Ext_hub_blackpaint_Submesh_41_Root_4002.material} position={[-79.5, 40.75, -149.4]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1002.geometry} material={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1002.material} position={[-79.5, 40.75, -149.4]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2002.geometry} material={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2002.material} position={[-79.5, 40.75, -149.4]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_brushedmetal002_Submesh_766_Root_27001.geometry} material={nodes.Ext_brushedmetal002_Submesh_766_Root_27001.material} position={[0, 0, -284.35]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26001.geometry} material={nodes.Ext_brushedmetal_discbrake002_Submesh_890_Root_26001.material} position={[0, 0, -284.35]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_tyres_Submesh_5734_Root_28001.geometry} material={nodes.Ext_tyres_Submesh_5734_Root_28001.material} position={[0, 0, -284.35]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_brushedmetal_Submesh_210_Root_5003.geometry} material={nodes.Ext_brushedmetal_Submesh_210_Root_5003.material} position={[80.12, 40.75, -149.4]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_cover_chrome_Submesh_1195_Root_3003.geometry} material={nodes.Ext_cover_chrome_Submesh_1195_Root_3003.material} position={[80.12, 40.75, -149.4]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_hub_blackpaint_Submesh_41_Root_4003.geometry} material={nodes.Ext_hub_blackpaint_Submesh_41_Root_4003.material} position={[80.12, 40.75, -149.4]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1003.geometry} material={nodes.Ext_rim_aluminiumshiny_Submesh_2940_Root_1003.material} position={[80.12, 40.75, -149.4]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2003.geometry} material={nodes.Ext_rim_blackpaint_Submesh_6350_Root_2003.material} position={[80.12, 40.75, -149.4]} rotation={[Math.PI / 2, 0, -Math.PI]} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15003.geometry} material={nodes.Ext_blackpaint_Submesh_13718_Root_15003.material} position={[0, 0, -284.35]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_blackpaint_Submesh_13718_Root_15004.geometry} material={nodes.Ext_blackpaint_Submesh_13718_Root_15004.material} position={[0, 0, -284.35]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Ext_chrome003_Submesh_30095_Root_4002.geometry} material={nodes.Ext_chrome003_Submesh_30095_Root_4002.material} position={[0, 0, -284.35]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}

useGLTF.preload('/lx2.glb')
