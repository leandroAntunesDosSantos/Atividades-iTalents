const ContaPoupanca = require('../entidades/ContaPoupanca');
const prompt = require('prompt-sync')();


function criarContaPoupanca(numeroDaConta) {
    const numero = numeroDaConta;
    const titular = prompt('Digite o nome do titular: ');
    const saldo = parseFloat(prompt('Digite o saldo para iniciar a conta: '));
    let taxaDeRendimentos = 0;
    const tipoDeConta = 'Conta Poupança';
    return new ContaPoupanca(numero, titular, saldo, taxaDeRendimentos, tipoDeConta);
}

module.exports = { criarContaPoupanca };
