const ContaCorrente = require('../entidades/ContaCorrente');
const prompt = require('prompt-sync')();


function criarContaCorrente(numeroDaConta) {
    const numero = numeroDaConta;
    const titular = prompt('Digite o nome do titular: ');
    if (!titular.trim()){
        console.log('Nome do titular não pode ser vazio! ');
        return;
    }
    const saldo = parseFloat(prompt('Digite o saldo para iniciar a conta: '));
    if (saldo < 0){
        console.log('Saldo inicial da conta não pode ser negativo! ');
        return;
    }
    const tipoDeConta = 'Conta Corrente';
    return new ContaCorrente(numero, titular, saldo, tipoDeConta);
}

module.exports = { criarContaCorrente };
