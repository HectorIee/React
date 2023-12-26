const { render, screen, fireEvent } = require("@testing-library/react");
const { CounterApp } = require("../src/components/CounterApp");

describe('Pruebas en el <CounterApp /> ', () => {

    const initialValue = 10

    test('Debe de hacer el match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot()
    });

    test('Debe de mostar el valor inicial de 100 en <CounterApp value={100} />', () => {
        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy()
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain( '100' )
    });

    test('Debe de incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    });

    test('Debe de decrementar con el botón -1', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    });

    test('Debe de funcionar el boton de reset', () => {
        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        
        expect( screen.getByText( initialValue )).toBeTruthy()
    });


});