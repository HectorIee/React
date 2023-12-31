const { render,screen } = require("@testing-library/react");
const { FirstApp } = require("../src/components/FirstApp");

describe('Pruebas en <FirstApp/> ', () => {

    const title = 'Hola, Soy Goku'
    const subTitle = 'Soy un subtitulo'
    
    test('Debe hacer match con el snapshot', () => {
        
        const { container } = render( <FirstApp title={ title } /> )
        expect( container ).toMatchSnapshot()
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku" ', () => {
    
        render( <FirstApp title={ title } /> )
        expect( screen.getByText(title)).toBeTruthy()
        // screen.debug()   comando para ver el objeto
    });


    test('Debe de mostrar el titulo en un h1', () => {
        
        render( <FirstApp title={ title } /> )
        expect( screen.getByRole( "heading", {level: 1}).innerHTML ).toContain( title )
    });


    test('Debemos de mostrar el subtitulo enviado por props', () => {
        
        render( <FirstApp title={ title } subTitle={ subTitle } /> )
        expect( screen.getAllByText( subTitle ).length ).toBe(2)
    });
})