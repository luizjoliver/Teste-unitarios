import { render, screen } from '@testing-library/react';
import Saldo from '.';

describe("Componente saldo" , () =>{
    test('deve renderizar o saldo com o valor monetário', () =>{
        render(<Saldo saldo={1000}/>)

        const saldo = screen.getByTestId('saldo')
        expect(saldo).toHaveTextContent('R$ 1000')
    })
})