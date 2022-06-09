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
        ['mercedes_s-class_s580001']: THREE.Mesh
        ['mercedes_s-class_s580002']: THREE.Mesh
        ['mercedes_s-class_s580003']: THREE.Mesh
        ['mercedes_s-class_s580004']: THREE.Mesh
        ['mercedes_s-class_s580005']: THREE.Mesh
        ['mercedes_s-class_s580006']: THREE.Mesh
        ['mercedes_s-class_s580007']: THREE.Mesh
        ['mercedes_s-class_s580008']: THREE.Mesh
        ['mercedes_s-class_s580009']: THREE.Mesh
        ['mercedes_s-class_s580010']: THREE.Mesh
        ['mercedes_s-class_s580011']: THREE.Mesh
        ['mercedes_s-class_s580012']: THREE.Mesh
        ['mercedes_s-class_s580013']: THREE.Mesh
        ['mercedes_s-class_s580014']: THREE.Mesh
        ['mercedes_s-class_s580015']: THREE.Mesh
        ['mercedes_s-class_s580016']: THREE.Mesh
        ['mercedes_s-class_s580017']: THREE.Mesh
        ['mercedes_s-class_s580018']: THREE.Mesh
        ['mercedes_s-class_s580019']: THREE.Mesh
        ['mercedes_s-class_s580020']: THREE.Mesh
        ['mercedes_s-class_s580021']: THREE.Mesh
        ['mercedes_s-class_s580022']: THREE.Mesh
        ['mercedes_s-class_s580023']: THREE.Mesh
        ['mercedes_s-class_s580024']: THREE.Mesh
        ['mercedes_s-class_s580025']: THREE.Mesh
        ['mercedes_s-class_s580026']: THREE.Mesh
        ['mercedes_s-class_s580028']: THREE.Mesh
        ['mercedes_s-class_s580029']: THREE.Mesh
        ['mercedes_s-class_s580030']: THREE.Mesh
        ['mercedes_s-class_s580032']: THREE.Mesh
        ['mercedes_s-class_s580033']: THREE.Mesh
        ['mercedes_s-class_s580034']: THREE.Mesh
        ['mercedes_s-class_s580035']: THREE.Mesh
        ['mercedes_s-class_s580027']: THREE.Mesh
        ['mercedes_s-class_s580036']: THREE.Mesh
        ['mercedes_s-class_s580037']: THREE.Mesh
        ['mercedes_s-class_s580038']: THREE.Mesh
        ['mercedes_s-class_s580039']: THREE.Mesh
        ['mercedes_s-class_s580040']: THREE.Mesh
        ['mercedes_s-class_s580041']: THREE.Mesh
        ['mercedes_s-class_s580043']: THREE.Mesh
        ['mercedes_s-class_s580042']: THREE.Mesh
        LKSS_SIZE_16001_Mesh_2009: THREE.Mesh
        LKSS_SIZE_028_Mesh_2010: THREE.Mesh
    }
    materials: {
        ['(null)']: THREE.MeshStandardMaterial
        black_plastic_gloss: THREE.MeshStandardMaterial
        black_plastic_matt: THREE.MeshStandardMaterial
        body_color: THREE.MeshStandardMaterial
        ['Meshpart12Mtl.001']: THREE.MeshStandardMaterial
        ['Rg2Mtl.001']: THREE.MeshStandardMaterial
        ['Rg1Mtl.001']: THREE.MeshStandardMaterial
        ['gum.001']: THREE.MeshStandardMaterial
    }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/merc.glb') as GLTFResult
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
            <mesh geometry={nodes['mercedes_s-class_s580'].geometry} material={materials['(null)']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580001'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580002'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580003'].geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580004'].geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580005'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580006'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580007'].geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580008'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580009'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580010'].geometry} material={materials['(null)']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580011'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580012'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580013'].geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580014'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580015'].geometry} material={materials['(null)']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580016'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580017'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580018'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580019'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580020'].geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580021'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580022'].geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580023'].geometry} material={materials['Rg1Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580024'].geometry} material={materials['(null)']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580025'].geometry} material={materials['(null)']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580026'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580028'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580029'].geometry} material={materials['Meshpart12Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580030'].geometry} material={materials['gum.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580032'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580033'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580034'].geometry} material={materials.black_plastic_matt} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580035'].geometry} material={materials.black_plastic_gloss} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580027'].geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580036'].geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580037'].geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580038'].geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580039'].geometry} material={materials.body_color} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580040'].geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580041'].geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580043'].geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes['mercedes_s-class_s580042'].geometry} material={materials['Rg2Mtl.001']} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.LKSS_SIZE_16001_Mesh_2009.geometry} material={nodes.LKSS_SIZE_16001_Mesh_2009.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
            <mesh geometry={nodes.LKSS_SIZE_028_Mesh_2010.geometry} material={nodes.LKSS_SIZE_028_Mesh_2010.material} position={[-63.65, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={1.93} />
        </group>
    )
}

useGLTF.preload('/merc.glb')
