import React, {useEffect, useRef, useState} from 'react'
import {useGLTF} from '@react-three/drei'

export default function Model({ ...props }) {
        const group = useRef(null)
        //@ts-ignore
        const { nodes, materials } = useGLTF('/Bus.glb')

        const [current, setCurrent] = useState<string>()

        const items = [
                { 'Передняя Оптика': [205, 208, 209, 193, 202, 200, 218, 222, 183] },
                { 'Задняя Оптика': [207] },
        ]

        const findKey = (data: object[], value: number) => data.reduce((res, item) => {
                let [[key, v]] = Object.entries(item)
                v = Array.isArray(v)?v: [v]
                if(v.includes(value)){
                        // @ts-ignore
                        return [...res, key]
                }
                return res
        }, [])


        // const clickHandler = (e: any) => {
        //         //save prev for restore it on prev item
        //         // console.log(findKey(items, id), ' -===- ', id
        //         // e.object.material.color = {r: 0, g: 1, b: 0}
        //         console.log(e.object)
        //         // e.object.push()
        // }
        
        const clickHandler = (e: any) => {
                let new_material = e.object.material.clone();
                new_material.color.setRGB(0,1,0);
                e.object.material = new_material;
                e.object.material.needsUpdate = true
                // and need to call your render function to apply changes to scene
        }

        return (
            <group ref={group} {...props} dispose={null}
                   onDoubleClick={e => {e.stopPropagation(); clickHandler(e)}}
                //@ts-ignore
                //    onClick={e => console.log(e.object.material.color)}
            >
                    <mesh geometry={nodes.Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={nodes.Mesh1244_FARA_f3_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05}/>
                    <mesh geometry={nodes.Mesh241_dvorright1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_.geometry} material={materials.black_plastic_matt} position={[-72.7, 0.53, 4.83]} rotation={[1.83, -0.26, 0]} scale={2.05}/>
                    <mesh geometry={nodes.Mesh954_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05}/>
                    <mesh geometry={nodes.Mesh1078_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05}/>
                    <mesh geometry={nodes.Mesh769_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={nodes.Mesh404_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh885_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh759_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh716_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh745_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1306_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh131_door_rr1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={materials.black_plastic_matt} position={[-72.7, 0.53, 4.83]} rotation={[1.83, -0.26, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={nodes.Mesh402_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material} position={[-3.69, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh383_G_44_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1350_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[-3.61, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={nodes.Mesh10_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.material} position={[-72.45, -0.47, 4.78]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={nodes.Mesh302_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material} position={[-72.68, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh491_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1136_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh750_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1119_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1359_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_matt} position={[5.05, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh506_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry} material={nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.material} position={[-72.7, 0.53, 4.83]} rotation={[1.83, -0.26, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh740_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={nodes.Mesh299_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material} position={[-72.45, -0.47, 4.78]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1058_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={nodes.Mesh61_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh755_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={nodes.Mesh403_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.geometry} material={nodes.Mesh405_chrom0_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX.material} position={[-3.69, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1055_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh337_Component_1_1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lex.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1050_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh723_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh956_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh678_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.45, -0.47, 4.78]} rotation={[Math.PI / 2, Math.PI / 6, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh735_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh485_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh45_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={nodes.Mesh441_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material} position={[-72.68, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1396_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={materials.black_plastic_gloss} position={[5.12, -0.02, 3.81]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={nodes.Mesh292_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material} position={[-3.68, 0, 3.42]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={nodes.Mesh468_plasstik_r1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={nodes.Mesh1431_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh497_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh760_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh483_bumper1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.body_color} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh764_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1115_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh739_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={nodes.Mesh1433_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.geometry} material={nodes.Mesh260_ice_intere1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1056_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX5.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={nodes.Mesh1437_Group14_Group13_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh732_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh43_Group10_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh738_black1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX57.geometry} material={materials.black_plastic_matt} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.Mesh179_boot1_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570.geometry} material={materials.black_plastic_matt} position={[-72.68, -0.02, 4.78]} rotation={[Math.PI / 2, 0, 0]} scale={2.05} />
                    <mesh geometry={nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
                    <mesh geometry={nodes.toyota_alphard.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard001.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard002.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard003.geometry} material={materials['gum.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard004.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard005.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard006.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard007.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard008.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard009.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard010.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard011.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard012.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard013.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard014.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard015.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard016.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard017.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard018.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard019.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard020.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard021.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard022.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard023.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard024.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard025.geometry} material={materials['Rg1Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard026.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard027.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard028.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard029.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard030.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard031.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard032.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard033.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard034.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard035.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard036.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard037.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard038.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard039.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]}/>
                    <mesh geometry={nodes.toyota_alphard040.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard041.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard042.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard043.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard044.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard045.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard046.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.toyota_alphard047.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
                    <mesh geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={nodes.LKSS_SIZE_16001_Mesh_2009.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
                    <mesh geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={nodes.LKSS_SIZE_028_Mesh_2010.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
            </group>
        )
}

useGLTF.preload('/Bus.glb')
