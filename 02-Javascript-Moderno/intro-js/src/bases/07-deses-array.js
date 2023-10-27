//Destructuracion de Objetos

const personajes = [ 'Goku', ' Vegetita', 'Willyrex']
const [, , p3] = personajes
console.log(p3)


const retornarArreglo =  () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornarArreglo()
console.log(letras, numeros)

//TArea
// 1.- Primer valor del arr se llama nombre
// 1.- segundo valor del arr se llama setNombre
const UseState = (valor) =>{
    return [valor, ()=> {console.log('Hola mUndo')}]
}

const [nombre, setNombre] = UseState('goku')

console.log(nombre)
setNombre()