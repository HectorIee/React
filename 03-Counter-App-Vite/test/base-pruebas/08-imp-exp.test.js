const { getHeroeById, getHeroesByOwner } = require("../../src/base-pruebas/08-imp-exp");

describe('Pruebas en 08-imp-exp', () => {

    test(' getHeroeById Debe retornar un héroe por id', () => {

        const id = 4
        const hero = getHeroeById(id)

        expect(hero).toEqual({ id: 4, name: 'Flash', owner: 'DC' })

    });

    test(' getHeroeById Debe retornar undefined si no existe id', () => {

        const id = 100
        const hero = getHeroeById(id)

        //Forma corta para verificar que el valor sea false null
        expect(hero).toBeFalsy()

    });

    //Tarea
    //Debe retornar un arreglo con los heroes de DC
    //length === 3
    //toEqual al arreglo filtrado

    //debe de retornar un arreglo con los heroes de Marvel
    //length === 2


    test('getHeroesByOwner debe retornar heroes de DC ', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner( owner )

        expect( heroes.length ).toBe( 3 )
        // expect( heroes ).toEqual([
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        // ]);

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
        // console.log(heroes)
    });

    test('getHeroesByOwner debe retornar heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner( owner )

        expect( heroes.length ).toBe( 2 )
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner))
        // console.log(heroes)

    });

});