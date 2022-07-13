import React from 'react';
import App from './App';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <Provider store={setupStore()}>
            <App />
        </Provider>
    )


