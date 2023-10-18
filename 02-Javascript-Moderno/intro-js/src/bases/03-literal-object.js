//Objetos Literales

const persona = {
    nombre: 'Tony',
    apellido: 'Montana',
    edad: 44,
    direccion: {
        ciudad: "Manzanillo",
        zip: 12314214,
        lat: 312.3123,
        lng: 3221.3454
    }
}

console.log(persona)
// console.log({persona})
// console.table(persona)

const persona2 = {...persona , nombre: 'Peter'}

console.log(persona2)