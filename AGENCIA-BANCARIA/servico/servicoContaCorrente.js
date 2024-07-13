const ContaCorrente = require('../entidades/ContaCorrente');
const prompt = require('prompt-sync')();


function criarContaCorrente(numeroDaConta) {
    const numero = numeroDaConta;
    const titular = prompt('Digite o nome do titular: ');
    const saldo = parseFloat(prompt('Digite o saldo para iniciar a conta: '));
    let taxaDeJurosInicial = 0;
    const tipoDeConta = 'Conta Corrente';
    return new ContaCorrente(numero, titular, saldo, taxaDeJurosInicial, tipoDeConta);
}

module.exports = { criarContaCorrente };
