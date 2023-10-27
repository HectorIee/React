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

Las dos estructuras de datos más utilizadas en JavaScript son Object y Array.
Los objetos nos permiten crear una entidad única que almacena los elementos de datos por clave.
Los Arrays nos permiten reunir elementos de datos en una lista ordenada.
Aunque, cuando los pasamos a una función, puede que no sea necesario que sea un objeto/array como un todo. Puede necesitar piezas individuales.

La asignación de desestructuración es una sintaxis especial que nos permite "desempaquetar" arrays u objetos en un montón de variables, ya que a veces eso es más conveniente.
La desestructuración también funciona muy bien con funciones complejas que tienen muchos parámetros, valores por defecto, etc. Pronto lo veremos.

## Array destructuring
Here’s an example of how an array is destructured into variables:
```javascript
// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
```

## Desestructuración de objetos
La asignación de desestructuración también funciona con objetos.

La sintaxis básica es

let {var1, var2} = {var1:..., var2:...}
Debemos tener un objeto existente en el lado derecho, que queremos dividir en variables. El lado izquierdo contiene un "patrón" tipo objeto para las propiedades correspondientes. En el caso más simple, es una lista de nombres de variables en {...}.

Por ejemplo:
```javascript
let opciones = {
  título: "Menú",
  anchura: 100
  altura: 200
};

let {título, anchura, altura} = opciones;

alert(title); // Menú
alert(anchura); // 100
alert(altura); // 200
```

* Promesas
El objeto `Promise` representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona.

Una promesa pendiente puede cumplirse con un valor o rechazarse con un motivo (error). Cuando ocurre cualquiera de estas opciones, se llama a los controladores asociados en cola por el método then de una promesa. 

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

* Fetch API
La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.

* Ternarios
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.

```js
condición ? expr1 : expr2
```

>condición

Una expresión que se evalúa como true o false.

>expr1, expr2

Expresión con valores de algún tipo.

* Async - Await



https://developer.mozilla.org/es/

