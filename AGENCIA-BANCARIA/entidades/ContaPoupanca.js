const Conta = require('./Conta.js');

class ContaPoupanca extends Conta {
    constructor(titular, saldo, rendimento){
        super(titular, saldo);
        this.rendimento = rendimento;
    }
    aplicaRedimento(){
        this.saldo += this.saldo * this.rendimento;
        console.log(this.saldo);
    }
}

module.exports = ContaPoupanca;
