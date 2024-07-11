const Conta = require('./Conta.js');

class ContaCorrente extends Conta{
    constructor(titular, saldo, taxaDeJuros){
        super(titular, saldo);
        this.taxaDeJuros = taxaDeJuros;
    }
    aplicaJuros(){
        this.saldo += this.saldo * this.taxaDeJuros;
        console.log(this.saldo);
    }

}

module.exports = ContaCorrente;
