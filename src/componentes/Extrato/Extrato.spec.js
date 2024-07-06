import { render ,screen} from "@testing-library/react";
import Extrato from ".";

describe("", () =>{
    test("Deve renderizar uma lista de transações", () =>{

        const transacoes = [
            {
                transacao:"Depósito",
                valor:2
            }
        ]
        render(<Extrato transacoes={transacoes}/>)

        const lista = screen.getByRole("listitem")
        expect(lista).toBeInTheDocument()

    })
})