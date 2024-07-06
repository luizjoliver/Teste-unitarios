import { render ,screen} from "@testing-library/react";
import Transacoes from ".";
import estilos from "../Extrato.module.css"
describe("", () =>{
    test("deve renderizar o mesmo componente com props atualizadas ", () =>{

        const transacao = {
            transacao:'Depósito',
            valor:100
        }
    const {rerender} =  render(<Transacoes estilos={estilos} transacao={transacao}/>)
        const tipoTransacao = screen.getByTestId('tipoTransacao')
        const valorTransacao = screen.getByTestId('valorTransacao')

        expect(tipoTransacao).toHaveTextContent('Depósito')
        expect(valorTransacao).toHaveTextContent('R$ 100')


        const novaTransacao = {
            transacao:'Transferência',
            valor:50
        }


        rerender(<Transacoes estilos={estilos} transacao={novaTransacao}/>)
        const tipoTransacaoNova = screen.getByTestId('tipoTransacao')
        const valorTransacaoNova = screen.getByTestId('valorTransacao')

        expect(tipoTransacaoNova ).toHaveTextContent('Transferência')
        expect(valorTransacaoNova ).toHaveTextContent('R$ 50')  
        
    })
})