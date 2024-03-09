import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //Llama al React DOM para renderizar componentes
import GifExpertApp from './GifExpertApp'

import './styles.css'

const started = <StrictMode> <GifExpertApp /> </StrictMode>
 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(started);
