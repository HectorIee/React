import { useState } from "react";
import AddCategory from "./components/AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Jujutsu Kaisen']);

    const onAddCategory = (newCategory) => {
        if( categories.includes( newCategory ) ) return;

        setCategories([newCategory, ...categories])
        // setCategories( cat => [ ...cat, 'Valorant'])
    }

    return (
        <>
            {/* Titulo */}
            <h1> GifExpertApp </h1>

            {/* Input */}
            <AddCategory
                // setCategories={ setCategories } /
                onNewCategory={onAddCategory}
            />

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
