const { getUser, getUsuarioActivo } = require("../../src/base-pruebas/05-funciones");

// toEqual

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABSCR',
            username: 'Papi_342'
        }

        const user = getUser()
        expect(testUser).toEqual(user)

    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Fernando'

        const user = getUsuarioActivo(name)

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        })

    });

});