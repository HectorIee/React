import { getHeroById } from "../bases/08-imp-ext"

// Promises

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1 = getHeroById(4)
//         //  resolve( p1 )
//         resolve(p1)
//          reject('No se pudo encontarr el heroe')
//     }, 2000)

// }) 


// promesa.then(( heroe ) => {
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err))

const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroById(id)
            //  resolve( p1 )
            if (p1) {
                resolve(p1)
            }
            else{
                reject('No se pudo encontarr el heroe')
            }
        }, 2000)

    })
}

getHeroByIdAsync(5)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err))
