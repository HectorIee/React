const { getHeroeByIdAsync } = require("../../src/base-pruebas/09-promesas");

describe('Pruebas en 09-Promesas', () => {

    test('getHeroByIdAsync debe retornar un héroe', (done) => {
        const id = 1
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done();
            })
    });

    test('getHeroByIdAsync debe obtener un error si el heroe no existe', (done) => {
        const id = 122
        getHeroeByIdAsync(id)
            .then(hero => {
                expect( hero ).toBeFalsy();
                done()
            })
            .catch (error => {
                    expect(error).toBe('No se pudo encontrar el héroe')
                    done()
                })
    });


    test("getHeroeByIdAsync debe de retornar un heroe", () => {
        const id = 1;
        const heroe = {
          id: 1,
          name: "Batman",
          owner: "DC",
        };
        return expect(getHeroeByIdAsync(id)).resolves.toEqual(heroe);
      });
      
      test("getHeroeByIdAsync debe de retornar un error si hero no existe", () => {
        const id = 100;
        return expect(getHeroeByIdAsync(id)).rejects.toMatch(
          "No se pudo encontrar el héroe"
        );
      });
});

