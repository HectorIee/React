const { usContext } = require("../../src/base-pruebas/06-deses-obj");

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe retornar objeto ', () => {

        const clave = 212343
        const edad = "12"

        const user = usContext({clave, edad})

        expect( user ).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })

    });

});