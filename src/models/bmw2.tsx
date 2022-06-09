import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L: THREE.Mesh
        Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_: THREE.Mesh
        Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016: THREE.Mesh
        ['mercedes_s-class_s580']: THREE.Mesh
        BMW: THREE.Mesh
        BMW002: THREE.Mesh
        BMW003: THREE.Mesh
        BMW004: THREE.Mesh
        BMW005: THREE.Mesh
        BMW006: THREE.Mesh
        BMW007: THREE.Mesh
        BMW008: THREE.Mesh
        BMW009: THREE.Mesh
        BMW010: THREE.Mesh
        BMW011: THREE.Mesh
        BMW012: THREE.Mesh
        BMW013: THREE.Mesh
        BMW014: THREE.Mesh
        BMW015: THREE.Mesh
        BMW016: THREE.Mesh
        BMW017: THREE.Mesh
        BMW018: THREE.Mesh
        BMW019: THREE.Mesh
        BMW020: THREE.Mesh
        BMW021: THREE.Mesh
        BMW022: THREE.Mesh
        BMW023: THREE.Mesh
        BMW024: THREE.Mesh
        BMW025: THREE.Mesh
        BMW027_1: THREE.Mesh
        BMW027_2: THREE.Mesh
        BMW028: THREE.Mesh
        BMW029: THREE.Mesh
        BMW030: THREE.Mesh
        BMW031: THREE.Mesh
        BMW033: THREE.Mesh
        BMW034: THREE.Mesh
        BMW037: THREE.Mesh
        BMW038: THREE.Mesh
        BMW039: THREE.Mesh
        BMW032: THREE.Mesh
        BMW035: THREE.Mesh
        BMW041: THREE.Mesh
        BMW026: THREE.Mesh
        BMW001: THREE.Mesh
        BMW040: THREE.Mesh
        LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
        LKSS_SIZE_028_Mesh_2010: THREE.Mesh
    }
    materials: {
        ['(null)']: THREE.MeshStandardMaterial
        ['Rg2Mtl.001']: THREE.MeshStandardMaterial
        black_plastic_matt: THREE.MeshStandardMaterial
        black_plastic_gloss: THREE.MeshStandardMaterial
        ['Rg1Mtl.001']: THREE.MeshStandardMaterial
        body_color: THREE.MeshStandardMaterial
        ['gum.001']: THREE.MeshStandardMaterial
        ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
        ['(null).001']: THREE.MeshStandardMaterial
    }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/bmw2.glb') as GLTFResult
    const clickHandler = (e: any) => {
        let new_material = e.object.material.clone();
        new_material.color.setRGB(0,1,0);
        e.object.material = new_material;
        e.object.material.needsUpdate = true
        // and need to call your render function to apply changes to scene
    }
    return (
        //@ts-ignore
        <group ref={group} {...props} dispose={null} onDoubleClick={e => {e.stopPropagation(); clickHandler(e)}}>
            <mesh geometry={nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.geometry} material={nodes.Mesh1494_Group26_Group25_Group1_G_2016_Lexus_LX570__1_1_Lexus_L.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
            <mesh geometry={nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.geometry} material={nodes.Mesh7_Group3_Group2_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_.material} position={[-72.7, 0.53, 4.83]} rotation={[1.83, -0.26, 0]} scale={2.05} />
            <mesh geometry={nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.geometry} material={nodes.Mesh1410_Group8_Group1_G_2016_Lexus_LX570__1_1_Lexus_LX570_2016.material} position={[-72.75, 0, 4.83]} rotation={[1.83, 0.24, -0.13]} scale={2.05} />
            <mesh geometry={nodes['mercedes_s-class_s580'].geometry} material={materials['(null)']} position={[6.49, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.BMW.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW002.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW003.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW004.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW005.geometry} material={materials['Rg1Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW006.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW007.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW008.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW009.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW010.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW011.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW012.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW013.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW014.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW015.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW016.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW017.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW018.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW019.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW020.geometry} material={materials['gum.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW021.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW022.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW023.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW024.geometry} material={materials['(null).001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW025.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.49}>
                <mesh geometry={nodes.BMW027_1.geometry} material={materials.body_color} />
                <mesh geometry={nodes.BMW027_2.geometry} material={materials.body_color} />
            </group>
            <mesh geometry={nodes.BMW028.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW029.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW030.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW031.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW033.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW034.geometry} material={materials['(null).001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW037.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW038.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW039.geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW032.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW035.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW041.geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW026.geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW001.geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.BMW040.geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} scale={0.49} />
            <mesh geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={nodes.LKSS_SIZE_16001_Mesh_2009.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
            <mesh geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={nodes.LKSS_SIZE_028_Mesh_2010.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
        </group>
    )
}

useGLTF.preload('/БМВ_модель2.glb')
