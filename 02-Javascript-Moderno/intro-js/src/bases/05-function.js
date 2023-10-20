// Function 

const saludar = function (nombre) {
    return `Hola, ${ nombre }`
}

const saludar2  = (nombre) => {
    return `Hola, ${ nombre }`
}

const saludar3  = (nombre) => `Hola, ${ nombre }`

console.log(saludar)
console.log(saludar2('Vegetta'))
console.log(saludar3('Goku'))


const getUser = () => ({
        uid: 'ABSCR',
        username: 'Papi_342'
   
})

const user = getUser()
console.log( user )


// 1.- Tranforma funcion a flecha
// 2.- retornar un objecto implicito

// function getUsuariActivo(nombre) {
//     return {
//         uid: 'ABSCR',
//         username: nombre
//     }
// }

const getUsuariActivo = (nombre) => ({
        uid: 'ABSCR',
        username: nombre  
})

const userActivo = getUsuariActivo('Fernan')
console.log(userActivo)