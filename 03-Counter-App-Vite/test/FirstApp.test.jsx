const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/components/FirstApp");

describe('Pruebas en <FirstApp/> ', () => {
    
    test('Debe de hacer un match con el snapshot', () => {
        //yo tomare una screen a mi componente asi como esta por defecto y si cambia falla la prueba

        render( <FirstApp/> )
        
    });
});