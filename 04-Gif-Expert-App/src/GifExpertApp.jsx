import { useState } from "react";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Jujutsu Kaisen']);

    const onAddCategory = () => {
        setCategories( [ ...categories, 'Valorant' ])
    }

    return (
        <>
            {/* Titulo */}
            <h1> GifExpertApp </h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map((category) => (
                    <li key={category}> {category} </li>
                ))}
            </ol>
            {/* Gif Item */}


        </>
    );
}

export default GifExpertApp;
