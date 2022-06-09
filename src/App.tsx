import React, {Suspense, useState} from 'react';
import {Environment, OrbitControls } from "@react-three/drei"
import {Canvas} from "@react-three/fiber";
import Bus2 from './models/Bus2'
import BMW from './models/bmw2'
import Merc from './models/Merc'
import Lx from './models/Lx570'

const App = () => {

    const [current,setCurrent] = useState<number>()

    return (
        <>
            <div style={{width: '100wv', height: '100vh'}}>
                <div>
                    <p onClick={() => setCurrent(1)}>BMW</p>
                    <p onClick={() => setCurrent(2)}>Lexus LX 570</p>
                    <p onClick={() => setCurrent(3)}>Mercedes</p>
                    <p onClick={() => setCurrent(4)}>Toyota Alphard</p>
                </div>

                <Canvas
                    shadows dpr={[1, 2]}
                    camera={{ position: [5, 50, 5], fov: 10 }}
                    style={{width: '100wv', height: '50vh', background: '#1d1d1d', border: '1px solid red'}}
                >
                    <Suspense fallback={null}>
                        { current === 1 && <BMW/>}
                        { current === 2 && <Lx/>}
                        { current === 3 && <Merc/>}
                        { current === 4 && <Bus2/>}
                        <Environment preset="city" />
                    </Suspense>
                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
                </Canvas>
            </div>
        </>

    );
}

export default App;
