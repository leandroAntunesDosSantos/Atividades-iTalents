const Conta = require('./Conta.js');

class ContaCorrente extends Conta{
    constructor(numeroDaConta,titular, saldo,taxaDeJurosInicial, tipoDeConta){
        super(numeroDaConta,titular, saldo);
        this.taxaDeJuros = taxaDeJurosInicial;
        this.tipoDeConta = tipoDeConta;
    }
    //como juros tem bastante variacao e podem ser aplicados em diferentes momentos,
    //foi colocado como o cliente responsavel por determinar a taxa de juros,
    //mas isso é feito internamente dentro do banco levando em conta o perfil do cliente
    // e a situação economica do mercado.
    aplicaJuros(taxaDeJuros){
        this.saldo += this.saldo * taxaDeJuros;
        console.log(`Juros aplicados com sucesso, saldo atual: R$${this.saldo}`);
    }
}

module.exports = ContaCorrente;
