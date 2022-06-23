import React, {Suspense, useState} from 'react';
import {Environment, OrbitControls, ContactShadows } from "@react-three/drei"
import {Canvas} from "@react-three/fiber";
import Bus2 from '../../objects/Bus2'
import BMW from '../../objects/bmw2'
import Merc from '../../objects/Merc'
import Lx from '../../objects/Lx2'
import classes from '../../scss/Object.module.scss'
import {useAppDispatch} from "../../hooks/redux";
import {selectCar} from "../../store/reducers/ActionCreators";

const Object = () => {

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
                    {['Седан','Хетчбэк','Джип','Микроавтобус'].map((i, index) => (
                        <p onClick={() => clickHandler(i, index)}
                           key={index}
                           className={index === current ?
                               classes['Object-nav-item'] + ' ' + classes['active'] : classes['Object-nav-item']}
                        > &nbsp;{i}&nbsp;</p>
                    ))}
                </div>

                <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 50, 5], fov: 3}}>
                    <ambientLight intensity={0.3} />
                    <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
                    <Suspense fallback={null}>
                        { current === 0 && <Merc
                            dispatch={dispatch}
                        />}
                        { current === 1 && <BMW
                            dispatch={dispatch}
                        />}
                        {/*{ current === 2 && <Lx*/}
                        {/*    dispatch={dispatch}*/}
                        {/*/>}*/}
                        { current === 3 && <Bus2
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