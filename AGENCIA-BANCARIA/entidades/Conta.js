class Conta {
    constructor(numeroDaConta,titular, saldo){
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    sacar(valor){
        //para fins de testes e para facilitar a visualizacao do saldo atual
        //o saldo sera mostrado para o usuario presumindo que ele seja o proprietario da conta
        if(valor > this.saldo){
            console.log('Saldo insuficiente seu saldo disponivel é de: ' + this.saldo);
        }
        this.saldo -= valor;
        //saldo final sera mostrado para o usuario presumindo que ele seja o proprietario da conta
        //afinal nao queremos que terceiros tenham a cesso ao saldo de outras pessoas
        //para facilitar a visualizacao dos testes foi adicionado o saldo atual
        console.log(`saque efetuado com sucesso, saldo atual: ${this.saldo}`);
    }

    depositar(valor){
        this.saldo += valor;
        //deposito sera mostrado para o usuario presumindo que ele seja o proprietario da conta
        //afinal nao queremos que terceiros tenham a cesso ao saldo de outras pessoas.
        //para facilitar a visualizacao dos testes foi adicionado o saldo atual
        console.log(`deposito efetuado com sucesso, saldo atual: ${this.saldo}`);
    }

}

module.exports = Conta;
