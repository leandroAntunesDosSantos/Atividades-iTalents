const Conta = require('./Conta.js');

class ContaCorrente extends Conta{
    constructor(numeroDaConta,titular, saldo, tipoDeConta){
        super(numeroDaConta,titular, saldo);
        this.tipoDeConta = tipoDeConta;
    }
    // Como juros tem bastante variacão e podem ser aplicados em diferentes momentos,
    // foi colocado como o cliente responsavel por determinar a taxa de juros,
    // mas isso é feito internamente dentro do banco considerando o perfil do cliente
    // e a situação economica do mercado.
    // Juros não podem ser negativos
    aplicaJuros(taxaDeJuros){
        if(taxaDeJuros < 0){
            console.log('Juros não podem ser negativos');
            return;
        }
        this.saldo += this.saldo * taxaDeJuros;
        console.log(`Juros aplicados com sucesso na sua conta ${this.titular}, saldo atual: R$${this.saldo}`);
    }
}

module.exports = ContaCorrente;
