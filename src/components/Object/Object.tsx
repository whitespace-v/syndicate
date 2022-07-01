import React, {Suspense, useState} from 'react';
import {Environment, OrbitControls } from "@react-three/drei"
import {Canvas} from "@react-three/fiber";
import Bus2 from '../../objects/Bus'
import BMW from '../../objects/bmw'
import Merc from '../../objects/Merc'
import Lx from '../../objects/Lx2'
import classes from '../../scss/Object.module.scss'
import {useAppDispatch} from "../../hooks/redux";
import {selectCar} from "../../store/reducers/ActionCreators";
import LX570 from '../../objects/LX570';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Object = () => {

    const { width } = useWindowDimensions(); //viewport width
    const [current,setCurrent] = useState<number>(0)
    const dispatch = useAppDispatch()

    const clickHandler = (i: string, index: number) => {
        setCurrent(index)
        dispatch(selectCar(i))
    }

    return (
        <>
            <div className={classes['Object']}>
                <div className={classes['Object-nav']}>
                    {['Седан','Хетчбэк',
                        // 'Джип',
                        'Микроавтобус'].map((i, index) => (
                        <p onClick={() => clickHandler(i, index)}
                           key={index}
                           className={index === current ?
                               classes['Object-nav-item'] + ' ' + classes['active'] : classes['Object-nav-item']}
                        > &nbsp;{i}&nbsp;</p>
                    ))}
                </div>

                <Canvas shadows dpr={[1, 2]}
                        camera={ width > 630 ? { position: [5, 20, 30], fov: 3} : { position: [5, 50, 30], fov: 3}}>
                    <ambientLight intensity={0.3} />
                    <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
                    <Suspense fallback={null}>
                        { current === 0 && <Merc
                            dispatch={dispatch}
                        />}
                        { current === 1 && <BMW
                            dispatch={dispatch}
                        />}
                        {/*{ current === 2 && <LX570*/}
                        {/*    dispatch={dispatch}*/}
                        {/*/>}*/}
                        { current === 2 && <Bus2
                            dispatch={dispatch}
                        />}
                        <Environment preset="city" />

                    </Suspense>

                    <OrbitControls
                        minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
                        enableZoom={true} enablePan={true}
                        target={[0, 1, 0]}
                    />

                </Canvas>
            </div>
        </>

    );
}

export default Object;