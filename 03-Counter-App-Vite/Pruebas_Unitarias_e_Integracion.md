
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
    
    

- Primeras pruebas
- Jest
- Expect
- toBe
- Enzyme
- Comandos útiles en la terminal para pruebas
- Revisar elementos renderizados en el componente
- Simular eventos