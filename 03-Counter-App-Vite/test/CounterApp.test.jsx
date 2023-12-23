const { render, screen } = require("@testing-library/react");
const { CounterApp } = require("../src/components/CounterApp");

describe( 'Pruebas en el <CounterApp /> ', () => {
    
    const initialValue = 10

    test('Debe de hacer el match con el snapshot', () => {
        const { container } = render( <CounterApp  value={ initialValue } /> )
        expect( container ).toMatchSnapshot()
    });

    test('Debe de mostar el valor inicial de 100 en <CounterApp value={100} />', () => {
        render( <CounterApp  value={ 100 } /> )
        expect( screen.getByText(100)).toBeTruthy()
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( '100' )
    });
});