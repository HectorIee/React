//Desestruturación de Objetos
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron'
}

// const {nombre, edad, clave} = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave)


// const retornaPersona = (usario) => {
    // const {nombre, edad, clave} = usario
    // console.log(nombre,edad,clave)
// }
// 
// retornaPersona(persona)

const UseContext = ({clave, nombre, edad, rango = 'Capi'}) => {
    // console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123.44,
            lng: -32.33 
        }
    }
}


const {nombreClave, anios, latlng:{ lat, lng}} = UseContext( persona )

console.log(nombreClave, anios)
console.log(lat, lng)