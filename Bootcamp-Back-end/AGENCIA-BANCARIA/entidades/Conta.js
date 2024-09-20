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
            console.log(`Saldo insuficiente na sua conta ${this.titular}seu saldo disponivel é de R$${this.saldo}`);
        }
        this.saldo -= valor;
        //saldo final sera mostrado para o usuario presumindo que ele seja o proprietario da conta
        //afinal nao queremos que terceiros tenham a cesso ao saldo de outras pessoas
        //para facilitar a visualizacao dos testes foi adicionado o saldo atual
        console.log(`saque efetuado com sucesso na sua conta ${this.titular}, saldo atual: ${this.saldo}`);
    }

    depositar(valor){
        if(valor <= 0){
            console.log('Valor de deposito invalido');
            return
        }
        this.saldo += valor;
        //deposito sera mostrado para o usuario presumindo que ele seja o proprietario da conta
        //afinal nao queremos que terceiros tenham a cesso ao saldo de outras pessoas.
        //para facilitar a visualizacao dos testes foi adicionado o saldo atual
        console.log(`deposito efetuado com sucesso na conta de ${this.titular}, saldo atual: ${this.saldo}`);
    }

}

module.exports = Conta;
