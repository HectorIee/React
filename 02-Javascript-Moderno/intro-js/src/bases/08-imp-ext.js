//Importaciones y  exportaciones

import {heroes, /* owners */} from "../data/heroes";

// console.log(owners)

const getHeroById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroById(5));

const HeroesByOwner = owner =>{
    return heroes.filter((heroe) => heroe.owner === owner );
}

// console.log(HeroesByOwner('DC'))

export {
    getHeroById,
    HeroesByOwner
}