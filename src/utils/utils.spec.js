import { calculaNovoSaldo } from "."

describe("Quando eu realizo uma transacao", () =>{
    test('que é um deposito , o saldo deve aumentar ', () =>{
        const transacao = {
            transacao : 'Depósito',
            valor:50
        }

        const novoSaldo = calculaNovoSaldo(transacao,100)

        expect(novoSaldo).toBe(150)
    })

    test('que é uma transferência , o saldo deve diminuir ', () =>{
        const transacao = {
            transacao : 'Transferência',
            valor:50
        }

        const novoSaldo = calculaNovoSaldo(transacao,100)

        expect(novoSaldo).toBe(50)
    })
})

