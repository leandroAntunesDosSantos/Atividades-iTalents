const Conta = require('./Conta.js');

class ContaPoupanca extends Conta{
    constructor(numeroDaConta,titular, saldo,rendimento, tipoDeConta){
        super(numeroDaConta,titular, saldo);
        this.rendimento = rendimento;
        this.tipoDeConta = tipoDeConta;
    }
    //rendimentos tem bastante variacao e podem ser aplicados em diferentes momentos,
    //foi colocado como o cliente responsavel por determinar o rendimento,
    //mas isso é feito internamente dentro do banco levando em conta o perfil do cliente
    // e a situação economica do mercado.
    aplicaRendimento(rendimento){
        this.saldo += this.saldo * rendimento;
        console.log(`Rendimento aplicado com sucesso, saldo atual: R$${this.saldo}`);
    }
}

module.exports = ContaPoupanca;
