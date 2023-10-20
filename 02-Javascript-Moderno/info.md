# **Temas Puntuales de JS Moderno** #

* Constantes y variables Let

## LET

 `let` es ahora preferible para la declaración de variables. No es una sorpresa, ya que es una mejora de las declaraciones con var. También resuelve el problema con var que acabamos de cubrir. Consideremos por qué esto es así.

let tiene un ámbito de bloque
Un bloque es un trozo de código delimitado por `{}`. Un bloque vive entre llaves. Todo lo que está dentro de llaves es un bloque.

Así que una variable declarada en un bloque con let  solo está disponible para su uso dentro de ese bloque. Permíteme explicar esto con un ejemplo:
```javascript
   let saludar = "dice Hola";
   let tiempos = 4;

   if (tiempos > 3) {
        let hola = "dice Hola tambien";
        console.log(hola);// "dice Hola tambien"
    }
   console.log(hola) // hola is not defined
```

let puede modificarse pero no volver a declararse.
Al igual que var,  una variable declarada con let puede ser actualizada dentro de su ámbito. A diferencia de var, una variable let no puede ser re-declarada dentro de su ámbito. Así que mientras esto funciona:
```javascript
    let saludar = "dice Hola";
    saludar = "dice Hola tambien";
```

## CONST

Las variables declaradas con `const` mantienen valores constantes. Las declaraciones `const` similitudes con las declaraciones `let`.

Las declaraciones `const` tienen un ámbito de bloque
Al igual que las declaraciones let, solamente se puede acceder a las declaraciones `const` dentro del bloque en el que fueron declaradas.

`const` no puede modificarse ni volver a declararse
Esto significa que el valor de una variable declarada con `const` s el mismo dentro de su ámbito. No se puede actualizar ni volver a declarar. Así que si declaramos una variable con `const`, no podemos hacer esto:
```javascript
const saludar = "dice Hola";
saludar = "dice Hola tambien";// error: Assignment to constant variable. 
 
o esto 

 const saludar = "dice Hola";
const saludar = "dice Hola tambien";// error: Identifier 'saludar' has already been declared
```
Por lo tanto, toda declaración const, debe ser inicializada en el momento de la declaración.

Este comportamiento es algo diferente cuando se trata de objetos declarados con const. Mientras que un objeto const no se puede actualizar, las propiedades de este objeto sí se pueden actualizar. Como resultado, si declaramos un objeto const como este:
```javascript
    const saludar = {
        mensaje: "dice Hola",
        tiempos: 4
    }
```

* Template String

Las `Template String` son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

Las Template String se delimitan con el caracter de comillas o tildes invertidas `(` `)` (grave accent), en lugar de las comillas sencillas o dobles.

Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves (${expresión}). Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función.

```javascript
//Templeate String
const nombre = 'Hector'
const apellido = 'Vazquez'
// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = ` ${nombre} ${apellido} `
console.log(nombreCompleto)
function getSaludo(nombre) {
    return 'Hola ' + nombre
}
console.log(`Este es un texto: ${getSaludo(nombre)}`)
```

* Objetos literales

Los literales de objeto son una de las estructuras de datos más utilizadas en JavaScript. Sirven para almacenar colecciones de datos y pueden utilizarse para representar estructuras de datos complejas, como objetos, matrices, funciones e incluso expresiones regulares. Los literales de objeto también se utilizan para almacenar información sobre una instancia concreta de un objeto, como su estado o comportamiento.

Los literales de objeto se escriben en forma de pares clave-valor, donde cada clave es una cadena y cada valor puede ser cualquier tipo de dato válido de JavaScript.

```javascript
const persona = {
  nombre: 'John Doe',
  edad: 30,
  dirección: '123 Main Street'
};
```

Los literales de objeto también pueden contener otros literales de objeto, así como funciones. Por ejemplo, el siguiente literal de objeto almacena información sobre una persona, y también contiene una función que imprime un mensaje de saludo:

```javascript
const persona = {
  nombre: 'Juan Pérez',
  edad: 30,
  dirección: '123 Main Street',
  saludar: function() {
    console.log('Hola, me llamo ' + this.name);
  }
};
```

* Arreglos
  
Los `arrays` son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos.
```javascript
let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2
```

* Desestructruación - important




* Promesas
* Fetch API
* Ternarios
* Async - Await