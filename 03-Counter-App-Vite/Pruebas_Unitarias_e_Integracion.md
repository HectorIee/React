
## Pruebas unitarias y de integración

- Introducción a las pruebas
    - Pruebas Unitarias 
        Son pruebas enfocadas en pequeñas funcionalidades.
    
    - Ventajas de la pruebas unitarias
        1. Demostrar que la lógica del código fuente de un programa o aplicación se encuentre en buen estado y funcionando de manera ideal.
        2. Permitir el aumento de la legibilidad del código, por lo que el equipo tendrá la posibilidad de realizar los cambios y modificaciones pertinentes de manera más sencilla.
        3. Ejecución lleva solo algunos mili-segundos, por lo que se podrán realizar múltiples de estos test sin una gran inversión de tiempo.

    - Pruebas Integración
        Son pruebas enfocadas en como reaccionan varias piezas en 
        conjunto. se realiza un análisis de los procesos relacionados con el ensamblaje o unión de los componentes
    
    - Características de las pruebas
        1. Fáciles de escribir
        2. Fáciles de leer
        3. Confiables
        4. Rápidas
        5. Principalmente unitarias

- AAA
    - Arrange - Arreglar
        Preparamos el estado inicial , preparamos el ambiente a probar.
            1. Inicializamos variables
            2. Importaciones necesarias
    - Act - Actuar
        Aplicamos acciones o estímulos al sujeto de pruebas, el paso anterior.
            1. Llamar métodos
            2. Simular clicks
            3. Realizar acciones sobre el paso anterior
    - Assert - Afirmar
        Observar el comportamiento resultante, es decir, si los resultados son los esperados.
            1. Son los resultados esperados
                Ej: Que algo cambie, algo incremente o bien que nada suceda.

- Mitos
    1. Hacen que mi aplicación no tenga errores
    2. Las pruebas no pueden fallar 
    3. Hacen mas lenta mi aplicación
    4. Perdida de tiempo
    5. Hay que probar todo
    

- Jest
    Jest es el corredor de pruebas y el marco de prueba utilizado por React. Jest es el entorno donde se ejecuta realmente todas las pruebas. Es por eso que no necesita importar expecty describen sus archivos. Estas funciones ya están disponibles globalmente en el entorno jest.
  
- Expect
  La función expect se utiliza cada vez que desea testear un valor. Rara vez se utiliza expect por sí mismo. En su lugar, utilizarás expect junto a una función de "comparación" para afirmar algo sobre un valor.

    ```javascript
    test('the best flavor is grapefruit', () => {
    expect(bestLaCroixFlavor()).toBe('grapefruit');
    });
    ```
  
- toBe
    Utilice .toBe para comparar valores primitivos o para comprobar la identidad referencial de instancias de objetos. Llama a Object.is para comparar valores, lo cual es incluso mejor para realizar pruebas que === operador de igualdad estricta.

    ```javascript
    const lata = {
    nombre: 'pomelo',
    onzas : 12,
    };

    describe('la lata', () => {
    test('tiene 12 onzas', () => {
        expect(lata.onzas).toBe(12);
    });

    test('tiene un nombre sofisticado', () => {
        expect(lata.nombre).toBe('pomelo');
    });
    });
  ```

- toEqual o toStrictEqual

    toEqual 
    Utilice .toEqual para comparar recursivamente todas las propiedades de instancias de objetos (también conocida como igualdad "profunda"). Llama a Object.is para comparar valores primitivos, lo cual es incluso mejor para realizar pruebas que === operador de igualdad estricta.

    ```javascript
    const can1 = {
      flavor: 'grapefruit',
      ounces: 12,
    };
    const can2 = {
      flavor: 'grapefruit',
      ounces: 12,
    };

    describe('the La Croix cans on my desk', () => {
      test('have all the same properties', () => {
        expect(can1).toEqual(can2);
      });
      test('are not the exact same can', () => {
        expect(can1).not.toBe(can2);
      });
    });
    ```

    toStrictEqual
    Utilice .toStrictEqual para probar que los objetos tengan la misma estructura y tipo. 
    
    Diferencias con .toEqual : 
        - Se verifican las claves con propiedades indefinidas, p. {a: undefined, b: 2} no será igual a {b: 2};
        - Se tienen en cuenta elementos definidos, p. [2] no será igual a [2, undefined];
        - Se comprueba la escasez de la matriz, p. [, 1] no será igual a [undefined, 1];
        - Se comprueban los tipos de objetos, p. una instancia de clase con los campos a y b no será igual a un objeto literal con los campos a y b.

- Enzyme
- Comandos útiles en la terminal para pruebas
- Revisar elementos renderizados en el componente
- Simular eventos