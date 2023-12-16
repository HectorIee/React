const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/components/FirstApp");

describe('Pruebas en <FirstApp/> ', () => {
    
    test('Debe de hacer un match con el snapshot', () => {
        //yo tomare una screen a mi componente asi como esta por defecto y si cambia falla la prueba

        const title = 'Hola, soy Goku'
        const { container } = render( <FirstApp title={ title } /> )
        
        expect( container ).toMatchSnapshot()

    });
});