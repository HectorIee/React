import { useState } from "react";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Jujutsu Kaisen']);
    console.log(categories)

    return (
        <>
            {/* Titulo */}
            <h1> GifExpertApp </h1>

            {/* Input */}

            {/* Listado de Gifs */}
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
