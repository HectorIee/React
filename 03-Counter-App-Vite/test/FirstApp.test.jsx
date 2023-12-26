const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/components/FirstApp");

describe('Pruebas en <FirstApp/> ', () => {
    
    // test('Debe de hacer un match con el snapshot', () => {
        //yo tomare una screen a mi componente asi como esta por defecto y si cambia falla la prueba

    //     const title = 'Hola, soy Goku'
    //     const { container } = render( <FirstApp title={ title } /> )
    //     expect( container ).toMatchSnapshot()

    // })

    test('Debe de mostrar el titulo en un h1', () => {
        
        const title = 'Hola, soy Goku'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> )
        expect( getByText( title )).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect( h1.innerHTML ).toContain( title )

        expect( getByTestId('test-title').innerHTML ).toContain( title )

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const title = 'Hola, soy Goku'
        const subTitle = 'Soy un subtitulo'
        const { getAllByText } = render( <FirstApp title={ title } subTitle={subTitle} /> )

        expect( getAllByText( subTitle ).length).toBe(2)
    });
})