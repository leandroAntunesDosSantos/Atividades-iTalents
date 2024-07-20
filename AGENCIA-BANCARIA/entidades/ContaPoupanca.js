const Conta = require('./Conta.js');

class ContaPoupanca extends Conta{
    constructor(numeroDaConta,titular, saldo, tipoDeConta){
        super(numeroDaConta,titular, saldo);
        this.tipoDeConta = tipoDeConta;
    }
    // Rendimentos tem bastante variação e podem ser aplicados em diferentes momentos,
    // foi colocado como o cliente responsavel por determinar o rendimento,
    // mas isso é feito internamente dentro do banco levando em conta o perfil do cliente
    // e a situação econõmica do mercado.
    // Rendimento não pode ser negativo para o investimento em questão
    aplicaRendimento(rendimento){
        if(rendimento < 0){
            console.log('Rendimento não pode ser negativo');
            return;
        }
        this.saldo += this.saldo * rendimento;
        console.log(' ');
        console.log(`Rendimento aplicado com sucesso na sua conta ${this.titular}, saldo atual: R$${this.saldo}`);
    }
}

module.exports = ContaPoupanca;
