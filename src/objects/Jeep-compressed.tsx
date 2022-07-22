import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useWindowDimensions from "../hooks/useWindowDimensions";
import {selectPart} from "../store/reducers/ActionCreators";

type GLTFResult = GLTF & {
    nodes: {
        Car_Body: THREE.Mesh
        Car_Rear_Emblem: THREE.Mesh
        Car_Front_Emblem: THREE.Mesh
        Car_Number_Front: THREE.Mesh
        Car_Number_Rear: THREE.Mesh
        Car_Wiper_01: THREE.Mesh
        Car_Wiper_02: THREE.Mesh
        Car_Front_Aluminum: THREE.Mesh
        Car_Front_Grille: THREE.Mesh
        Car_Bottom: THREE.Mesh
        Car_X7_Emblem: THREE.Mesh
        Car_xDrive_Emblem: THREE.Mesh
        Car_Headlight_Glass: THREE.Mesh
        Car_Headlight_Chrome: THREE.Mesh
        Car_Headlight_bmwlaser_Left: THREE.Mesh
        Car_Headlight_bmwlaser_Right: THREE.Mesh
        Car_Headlights: THREE.Mesh
        Car_Headlight_Blue: THREE.Mesh
        Car_Headlight_Fog: THREE.Mesh
        Car_Headlight_Plastic: THREE.Mesh
        Car_Tail_Light_Plastic: THREE.Mesh
        Car_Tail_Light_Glass: THREE.Mesh
        Car_Tail_Light_Chrome: THREE.Mesh
        Car_Tail_Lights: THREE.Mesh
        Car_Tail_light_bmw_Left: THREE.Mesh
        Car_Tail_light_bmw_Right: THREE.Mesh
        Car_Black: THREE.Mesh
        Car_Metal: THREE.Mesh
        Car_Plastic: THREE.Mesh
        Car_Rubbers: THREE.Mesh
        Car_Door_Lock_Metal: THREE.Mesh
        Car_Interior_Base: THREE.Mesh
        Car_Seats_Belt_Fabric: THREE.Mesh
        Car_Interior_Mirror: THREE.Mesh
        Car_Seats_Belt_Red: THREE.Mesh
        Car_Seats_Belt_Metal: THREE.Mesh
        Car_Seats_Belt_Plastic: THREE.Mesh
        Car_Pedals_Plastic: THREE.Mesh
        Car_Interior_Fabric: THREE.Mesh
        Car_Pedals_Metal: THREE.Mesh
        Car_Orange_Glass: THREE.Mesh
        Car_Plastic_Grey: THREE.Mesh
        Car_Interior_Leather_Orange: THREE.Mesh
        Car_Interior_Wood: THREE.Mesh
        Car_Interior_Light_Glass: THREE.Mesh
        Car_Interior_Light_Chrome: THREE.Mesh
        Car_Interior_Black: THREE.Mesh
        Car_Interior_Plastic: THREE.Mesh
        Car_Interior_Aluminum: THREE.Mesh
        Car_Wiper_Rear: THREE.Mesh
        Car_Textures: THREE.Mesh
        Car_Alu_textures: THREE.Mesh
        Car_xDrive_Emblem_Black: THREE.Mesh
        Car_Wheel_FL_Metal: THREE.Mesh
        Car_Wheel_FL_Caliper: THREE.Mesh
        Car_Wheel_FL_Brake_Disk: THREE.Mesh
        Car_Wheel_FL_Tire: THREE.Mesh
        Car_Wheel_FL_M: THREE.Mesh
        Car_Door_FL_Rubber: THREE.Mesh
        Car_Door_FL_Plastic: THREE.Mesh
        Car_Door_FL_Interior_Base: THREE.Mesh
        Car_Door_FL_Aluminum: THREE.Mesh
        Car_Door_FL_Wood: THREE.Mesh
        Car_Door_FL_Black: THREE.Mesh
        Car_Door_FL_Light_Glass: THREE.Mesh
        Car_Door_FL_Light_Chrome: THREE.Mesh
        Car_Door_FL_Mirror: THREE.Mesh
        Car_Door_FL_Interior_Orange: THREE.Mesh
        Car_Door_FL_Leather: THREE.Mesh
        Car_Door_FL_buttons: THREE.Mesh
        Car_Door_FL_Alu_textures: THREE.Mesh
        Car_Door_RL_Body: THREE.Mesh
        Car_Door_RL_Black: THREE.Mesh
        Car_Door_RL_Window: THREE.Mesh
        Car_Door_RL_Rubber: THREE.Mesh
        Car_Door_RL_Interior_Base: THREE.Mesh
        Car_Door_RL_Plastic: THREE.Mesh
        Car_Door_RL_Aluminum: THREE.Mesh
        Car_Door_RL_Wood: THREE.Mesh
        Car_Door_RL_Interior_Orange: THREE.Mesh
        Car_Door_RL_Leather: THREE.Mesh
        Car_Door_RL_Alu_textures: THREE.Mesh
        Car_SW_Leather: THREE.Mesh
        Car_SW_Logo: THREE.Mesh
        Car_SW_Aluminum: THREE.Mesh
        Car_SW_Textures: THREE.Mesh
        Car_SW_Alu_textures: THREE.Mesh
        Car_Seat_FL_Leather: THREE.Mesh
        Car_Seat_FL_Metal: THREE.Mesh
        Car_Seat_FL_Plastic: THREE.Mesh
        Car_Seat_FL_Textures: THREE.Mesh
        Car_Seat_FL_Alu_Texture: THREE.Mesh
        Car_Seats_Mid_Leather: THREE.Mesh
        Car_Seats_Mid_Metal: THREE.Mesh
        Car_Seats_Mid_Plastic: THREE.Mesh
        Car_Seats_Mid_Fabric: THREE.Mesh
        Car_Seats_Mid_Textures: THREE.Mesh
        Car_Seats_Mid_Alu_texture: THREE.Mesh
        Car_Seats_Rear_Leather: THREE.Mesh
        Car_Seats_Rear_Metal: THREE.Mesh
        Car_Seats_Rear_Plastic: THREE.Mesh
        Car_Seats_Rear_Fabric: THREE.Mesh
        Car_Wheel_FR_Metal: THREE.Mesh
        Car_Wheel_FR_Caliper: THREE.Mesh
        Car_Wheel_FR_Brake_Disk: THREE.Mesh
        Car_Wheel_FR_M: THREE.Mesh
        Car_Wheel_RL_Metal: THREE.Mesh
        Car_Wheel_RL_Brake_Disk: THREE.Mesh
        Car_Wheel_RL_M: THREE.Mesh
        Car_Wheel_RL_Caliper: THREE.Mesh
        Car_Wheel_RR_Caliper: THREE.Mesh
        Car_Wheel_RR_Metal: THREE.Mesh
        Car_Wheel_RR_Bolts: THREE.Mesh
        Car_Wheel_RR_Brake_Disk: THREE.Mesh
        Car_Wheel_RR_M: THREE.Mesh
        Car_Door_FR_Body: THREE.Mesh
        Car_Door_FR_Rubber: THREE.Mesh
        Car_Door_FR_Plastic: THREE.Mesh
        Car_Door_FR_Interior_Base: THREE.Mesh
        Car_Door_FR_Window: THREE.Mesh
        Car_Door_FR_Aluminum: THREE.Mesh
        Car_Door_FR_Wood: THREE.Mesh
        Car_Door_FR_Black: THREE.Mesh
        Car_Door_FR_Light_Glass: THREE.Mesh
        Car_Door_FR_Light_Chrome: THREE.Mesh
        Car_Door_FR_Mirror: THREE.Mesh
        Car_Door_FR_Interior_Orange: THREE.Mesh
        Car_Door_FR_Leather: THREE.Mesh
        Car_Door_FR_Alu_textures: THREE.Mesh
        Car_Door_RR_Black: THREE.Mesh
        Car_Door_RR_Rubber: THREE.Mesh
        Car_Door_RR_Interior_Base: THREE.Mesh
        Car_Door_RR_Plastic: THREE.Mesh
        Car_Door_RR_Aluminum: THREE.Mesh
        Car_Door_RR_Wood: THREE.Mesh
        Car_Door_RR_Interior_Orange: THREE.Mesh
        Car_Door_RR_Leather: THREE.Mesh
        Car_Door_RR_Alu_textures: THREE.Mesh
        Car_Seat_FR_Leather: THREE.Mesh
        Car_Seat_FR_Metal: THREE.Mesh
        Car_Seat_FR_Plastic: THREE.Mesh
        Car_Seat_FR_Textures: THREE.Mesh
        Car_Seat_FR_Alu_Texture: THREE.Mesh
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
        LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
        LKSS_SIZE_028_Mesh_2010: THREE.Mesh
        Car_Window001: THREE.Mesh
        Car_Window002: THREE.Mesh
        Car_Body001: THREE.Mesh
        Car_Body002: THREE.Mesh
        Car_Body003: THREE.Mesh
        Car_Window003: THREE.Mesh
    }
    materials: {
        body_color: THREE.MeshStandardMaterial
        ['Rg2Mtl.001']: THREE.MeshStandardMaterial
        black_plastic_matt: THREE.MeshStandardMaterial
        ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
        ['Rg1Mtl.001']: THREE.MeshStandardMaterial
        black_plastic_gloss: THREE.MeshStandardMaterial
        ['gum.001']: THREE.MeshStandardMaterial
        ['(null)']: THREE.MeshStandardMaterial
    }
}

export default function Model({dispatch} : {dispatch: any}) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/Jeep-compressed.glb') as GLTFResult
    const { width } = useWindowDimensions(); //viewport width
    const clickHandler = (e: any) => {
        let new_material = e.object.material.clone();
        let old_material = e.object.material.clone()
        new_material.color.setRGB(0.294117647,0,0.509803922); //indigo
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
            <mesh name={'Зона риска'}geometry={nodes.Car_Body.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'1'}geometry={nodes.Car_Rear_Emblem.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Шильдик на капоте'}geometry={nodes.Car_Front_Emblem.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'3'}geometry={nodes.Car_Number_Front.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            {/*<mesh name={'4'}geometry={nodes.Car_Number_Rear.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />*/}
            <mesh name={'5'}geometry={nodes.Car_Wiper_01.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'6'}geometry={nodes.Car_Wiper_02.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Горизонтальная решетка радиатора'}geometry={nodes.Car_Front_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Решетка радиатора'}geometry={nodes.Car_Front_Grille.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Днище'}geometry={nodes.Car_Bottom.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Шильдик серии'}geometry={nodes.Car_X7_Emblem.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Шильдик модели'}geometry={nodes.Car_xDrive_Emblem.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передняя оптика'}geometry={nodes.Car_Headlight_Glass.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'13'}geometry={nodes.Car_Headlight_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'14'}geometry={nodes.Car_Headlight_bmwlaser_Left.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'15'}geometry={nodes.Car_Headlight_bmwlaser_Right.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'16'}geometry={nodes.Car_Headlights.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'17'}geometry={nodes.Car_Headlight_Blue.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'18'}geometry={nodes.Car_Headlight_Fog.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'19'}geometry={nodes.Car_Headlight_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'20'}geometry={nodes.Car_Tail_Light_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задняя оптика'}geometry={nodes.Car_Tail_Light_Glass.geometry} material={materials['Rg1Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'22'}geometry={nodes.Car_Tail_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'23'}geometry={nodes.Car_Tail_Lights.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'24'}geometry={nodes.Car_Tail_light_bmw_Left.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'25'}geometry={nodes.Car_Tail_light_bmw_Right.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Матовый пластик'}geometry={nodes.Car_Black.geometry} material={materials.black_plastic_gloss} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Хром на решетке радиатора'}geometry={nodes.Car_Metal.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Матовый пластик'}geometry={nodes.Car_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'29'}geometry={nodes.Car_Rubbers.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'30'}geometry={nodes.Car_Door_Lock_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'31'}geometry={nodes.Car_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'32'}geometry={nodes.Car_Seats_Belt_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'33;'}geometry={nodes.Car_Interior_Mirror.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'34'}geometry={nodes.Car_Seats_Belt_Red.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'35;'}geometry={nodes.Car_Seats_Belt_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'36'}geometry={nodes.Car_Seats_Belt_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'37'}geometry={nodes.Car_Pedals_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'38'}geometry={nodes.Car_Interior_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'39'}geometry={nodes.Car_Pedals_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'40'}geometry={nodes.Car_Orange_Glass.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'41'}geometry={nodes.Car_Plastic_Grey.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'42'}geometry={nodes.Car_Interior_Leather_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'43'}geometry={nodes.Car_Interior_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'44'}geometry={nodes.Car_Interior_Light_Glass.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'45'}geometry={nodes.Car_Interior_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'46'}geometry={nodes.Car_Interior_Black.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'47'}geometry={nodes.Car_Interior_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'48'}geometry={nodes.Car_Interior_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Матовый пластик'}geometry={nodes.Car_Wiper_Rear.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'50'}geometry={nodes.Car_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'51'}geometry={nodes.Car_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'52'}geometry={nodes.Car_xDrive_Emblem_Black.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'53'}geometry={nodes.Car_Wheel_FL_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'54'}geometry={nodes.Car_Wheel_FL_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'55'}geometry={nodes.Car_Wheel_FL_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Шины'}geometry={nodes.Car_Wheel_FL_Tire.geometry} material={materials['gum.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'57'}geometry={nodes.Car_Wheel_FL_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'58'}geometry={nodes.Car_Door_FL_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'59'}geometry={nodes.Car_Door_FL_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'60'}geometry={nodes.Car_Door_FL_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'61'}geometry={nodes.Car_Door_FL_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'62'}geometry={nodes.Car_Door_FL_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Матовый пластик'}geometry={nodes.Car_Door_FL_Black.geometry} material={materials.black_plastic_gloss} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'64'}geometry={nodes.Car_Door_FL_Light_Glass.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'65'}geometry={nodes.Car_Door_FL_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'66'}geometry={nodes.Car_Door_FL_Mirror.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'67'}geometry={nodes.Car_Door_FL_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'68'}geometry={nodes.Car_Door_FL_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'69'}geometry={nodes.Car_Door_FL_buttons.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'70'}geometry={nodes.Car_Door_FL_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задние двери'}geometry={nodes.Car_Door_RL_Body.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Матовый пластик'}geometry={nodes.Car_Door_RL_Black.geometry} material={materials.black_plastic_gloss} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задние боковые стекла'}geometry={nodes.Car_Door_RL_Window.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'74'}geometry={nodes.Car_Door_RL_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'75'}geometry={nodes.Car_Door_RL_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'76'}geometry={nodes.Car_Door_RL_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'77'}geometry={nodes.Car_Door_RL_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'78'}geometry={nodes.Car_Door_RL_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'79'}geometry={nodes.Car_Door_RL_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'80'}geometry={nodes.Car_Door_RL_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'81'}geometry={nodes.Car_Door_RL_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'82'}geometry={nodes.Car_SW_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'83'}geometry={nodes.Car_SW_Logo.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'84'}geometry={nodes.Car_SW_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'85'}geometry={nodes.Car_SW_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'86'}geometry={nodes.Car_SW_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'87'}geometry={nodes.Car_Seat_FL_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'88'}geometry={nodes.Car_Seat_FL_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'89'}geometry={nodes.Car_Seat_FL_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'90'}geometry={nodes.Car_Seat_FL_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'91'}geometry={nodes.Car_Seat_FL_Alu_Texture.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'92'}geometry={nodes.Car_Seats_Mid_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'93'}geometry={nodes.Car_Seats_Mid_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'94'}geometry={nodes.Car_Seats_Mid_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'95'}geometry={nodes.Car_Seats_Mid_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'96'}geometry={nodes.Car_Seats_Mid_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'97'}geometry={nodes.Car_Seats_Mid_Alu_texture.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'98'}geometry={nodes.Car_Seats_Rear_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'99'}geometry={nodes.Car_Seats_Rear_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'100'}geometry={nodes.Car_Seats_Rear_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'101'}geometry={nodes.Car_Seats_Rear_Fabric.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'102'}geometry={nodes.Car_Wheel_FR_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'103'}geometry={nodes.Car_Wheel_FR_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'104'}geometry={nodes.Car_Wheel_FR_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'105'}geometry={nodes.Car_Wheel_FR_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'106'}geometry={nodes.Car_Wheel_RL_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'107'}geometry={nodes.Car_Wheel_RL_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'108'}geometry={nodes.Car_Wheel_RL_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'109'}geometry={nodes.Car_Wheel_RL_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Тормозные колодки'}geometry={nodes.Car_Wheel_RR_Caliper.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'111'}geometry={nodes.Car_Wheel_RR_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Диски'}geometry={nodes.Car_Wheel_RR_Bolts.geometry} material={materials['Meshpart12Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Тормоза'}geometry={nodes.Car_Wheel_RR_Brake_Disk.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'114'}geometry={nodes.Car_Wheel_RR_M.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передние двери'}geometry={nodes.Car_Door_FR_Body.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'116'}geometry={nodes.Car_Door_FR_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'117'}geometry={nodes.Car_Door_FR_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'118'}geometry={nodes.Car_Door_FR_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передние боковые стекла'}geometry={nodes.Car_Door_FR_Window.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'120'}geometry={nodes.Car_Door_FR_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'121'}geometry={nodes.Car_Door_FR_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'122'}geometry={nodes.Car_Door_FR_Black.geometry} material={materials.black_plastic_gloss} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'123'}geometry={nodes.Car_Door_FR_Light_Glass.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'124'}geometry={nodes.Car_Door_FR_Light_Chrome.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'125'}geometry={nodes.Car_Door_FR_Mirror.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'126'}geometry={nodes.Car_Door_FR_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'127'}geometry={nodes.Car_Door_FR_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'128'}geometry={nodes.Car_Door_FR_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'129'}geometry={nodes.Car_Door_RR_Black.geometry} material={materials.black_plastic_gloss} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'130'}geometry={nodes.Car_Door_RR_Rubber.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'131'}geometry={nodes.Car_Door_RR_Interior_Base.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'132'}geometry={nodes.Car_Door_RR_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'133'}geometry={nodes.Car_Door_RR_Aluminum.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'134'}geometry={nodes.Car_Door_RR_Wood.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'135'}geometry={nodes.Car_Door_RR_Interior_Orange.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'136'}geometry={nodes.Car_Door_RR_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'137'}geometry={nodes.Car_Door_RR_Alu_textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'138'}geometry={nodes.Car_Seat_FR_Leather.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'139'}geometry={nodes.Car_Seat_FR_Metal.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'140'}geometry={nodes.Car_Seat_FR_Plastic.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'141'}geometry={nodes.Car_Seat_FR_Textures.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'142'}geometry={nodes.Car_Seat_FR_Alu_Texture.geometry} material={materials.black_plastic_matt} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'205'}geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={materials['(null)']} position={[0, 0, 71.29]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh name={'Заднее стекло'}geometry={nodes.Car_Window001.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'207'}geometry={nodes.Car_Window002.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Капот'}geometry={nodes.Car_Body001.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Передний бампер'}geometry={nodes.Car_Body002.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Задний бампер'}geometry={nodes.Car_Body003.geometry} material={materials.body_color} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
            <mesh name={'Лобовое стекло'}geometry={nodes.Car_Window003.geometry} material={materials['Rg2Mtl.001']} position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.02} />
        </group>
    )
}

useGLTF.preload('/Jeep-compressed.glb')
