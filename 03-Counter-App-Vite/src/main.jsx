import React from "react";
import {createRoot} from "react-dom/client"; // llamada al React DOM para renderizar componentes
import HelloWorld from "./components/HelloWorld"; './components/HelloWorld'
 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelloWorld />
    </React.StrictMode>
);