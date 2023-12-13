import React from "react";
import {createRoot} from "react-dom/client"; // llamada al React DOM para renderizar componentes
import {FirstApp} from "./components/FirstApp";
import {CounterApp} from "./components/CounterApp";

import './styles.css'
 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <CounterApp value={10} /> */}
        <FirstApp  title='Hola, Soy Vegeta' />
    </React.StrictMode>
);