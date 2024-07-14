const serviceContaCorrente = require('./servico/servicoContaCorrente');
const serviceContaPoupanca = require('./servico/servicoContaPoupanca');
const prompt = require('prompt-sync')();

let numeroDaConta = 1;

let listaDeContas = [];

let funcionalidade = true;

//para executar algumas funcionalidades é necessário criar uma conta corrente ou poupança
//e através dessas contas realizar operações para isso é necessário o número da conta
//que é uma variável global que é incrementada a cada conta criada
//Portanto, a primeira conta tem numero 1 a segunda numero 2 e assim por diante
// independente se é poupança ou corrente ela é sequencial
//É possivel criar quantas contas quiser tanto poupanças quanto correntes
//devemos informar o número da conta para realizar operações como depositar, sacar, visualizar saldo

do {
    console.log("");
    console.log('Bem vindo ao banco iTalents');
    console.log('Escolha uma opção: ');
    console.log('1 - Criar Conta Corrente');
    console.log('2 - Criar Conta Poupança');
    console.log('3 - Depositar');
    console.log('4 - Sacar');
    console.log('5 - Visualizar Saldo');
    console.log('6 - Aplicar juros da conta corrente');
    console.log('7 - Aplicar rendimento na conta poupança');
    console.log('8 - Listar contas criadas'); //funcionalidade extra para visualizar as contas criadas
    console.log('9 - Sair');
    console.log("");

    const opcao = parseInt(prompt('Escolha uma opção: '));

    switch (opcao) {
        case 1:
            const contaCorrente = serviceContaCorrente.criarContaCorrente(numeroDaConta);
            if (!contaCorrente) {
                break;
            }
            listaDeContas.push(contaCorrente);
            console.log("");
            console.log('Conta Corrente criada com sucesso');
            console.log('Número da conta: ' + contaCorrente.numeroDaConta);
            console.log("Titular: " + contaCorrente.titular);
            console.log("Saldo: " + contaCorrente.saldo);
            console.log("Tipo de conta: " + contaCorrente.tipoDeConta);
            console.log("");
            numeroDaConta++;
            break;
        case 2:
            const contaPoupanca = serviceContaPoupanca.criarContaPoupanca(numeroDaConta);
            if (!contaPoupanca) {
                break;
            }
            listaDeContas.push(contaPoupanca);
            console.log("");
            console.log('Conta Poupança criada com sucesso');
            console.log('Número da conta: ' + contaPoupanca.numeroDaConta);
            console.log("Titular: " + contaPoupanca.titular);
            console.log("Saldo: " + contaPoupanca.saldo);
            console.log("Tipo de conta: " + contaPoupanca.tipoDeConta);
            console.log("");
            numeroDaConta++;
            break;
        case 3:
            const numeroContaDeposito = parseInt(prompt('Digite o número da conta para depositar: '));
            const contaDeposito = listaDeContas.find(conta => conta.numeroDaConta === numeroContaDeposito);
            if (!contaDeposito) {
                console.log('Conta não encontrada');
                break;
            }
            const valorDeposito = prompt('Digite o valor do depósito: ');
            if(valorDeposito.trim() === '' || isNaN(valorDeposito) || valorDeposito <= 0){
                console.log('Valor de depósito inválido');
                break;
            }
            if(!Number(valorDeposito)){
                console.log('Valor de depósito inválido');
                break;
            }
            contaDeposito.depositar(Number(valorDeposito));
            break;
        case 4:
            const numeroContaSaque = parseInt(prompt('Digite o número da conta para sacar: '));
            const contaSaque = listaDeContas.find(conta => conta.numeroDaConta === numeroContaSaque);
            if (!contaSaque) {
                console.log('Conta não encontrada');
                break;
            }
            const valorSaque = prompt('Digite o valor do saque: ');
            if(valorSaque.trim() === '' || isNaN(valorSaque) || valorSaque <= 0){
                console.log('Valor de saque inválido');
                break;
            }
            if(!Number(valorSaque)){
                console.log('Valor de saque inválido');
                break;
            }
            contaSaque.sacar(Number(valorSaque));
            break;
        case 5:
            const numeroContaSaldo = parseInt(prompt('Digite o número da conta para visualizar o saldo: '));
            const contaSaldo = listaDeContas.find(conta => conta.numeroDaConta === numeroContaSaldo);
            if (!contaSaldo) {
                console.log('Conta não encontrada');
                break;
            }
            console.log("Olá " + contaSaldo.titular);
            console.log(`O saldo da conta é R$${contaSaldo.saldo}`);
            break;
        case 6:
            const numeroContaJuros = parseInt(prompt('Digite o número da conta para aplicar juros: '));
            const contaJuros = listaDeContas.find(conta => conta.numeroDaConta === numeroContaJuros);
            if (!contaJuros){
                console.log('Conta não encontrada');
                break
            }
            if (contaJuros.tipoDeConta === 'Conta Poupança') {
                console.log('A conta que você digitou não é uma conta corrente');
                break
            }
            if (contaJuros.tipoDeConta === 'Conta Corrente') {
                const valorJuros = prompt('Digite a porcentagem de juros: ');
                if(valorJuros.trim() === '' || isNaN(valorJuros) || valorJuros <= 0){
                    console.log('Valor de juros inválido');
                    break;
                }
                if(!Number(valorJuros)){
                    console.log('Valor de juros inválido');
                    break;
                }
                const juroConvertido = valorJuros / 100;
                contaJuros.aplicaJuros(Number(juroConvertido));
                break;
            }
        case 7:
            const numeroContaRendimento = parseInt(prompt('Digite o número da conta para aplicar rendimento: '));
            const contaRendimento = listaDeContas.find(conta => conta.numeroDaConta === numeroContaRendimento);
            if (!contaRendimento) {
                console.log('Conta não encontrada');
                break;
            }
            if (contaRendimento.tipoDeConta === 'Conta Corrente') {
                console.log('A conta que você digitou não é uma conta poupança');
                break;
            }
            if (contaRendimento.tipoDeConta === 'Conta Poupança') {
                const valorRendimento = prompt('Digite a porcentagem de rendimento: ');
                if(valorRendimento.trim() === '' || isNaN(valorRendimento) || valorRendimento <= 0){
                    console.log('Valor de rendimento inválido');
                    break;
                }
                if(!Number(valorRendimento) ){
                    console.log('Valor de rendimento inválido');
                    break;
                }
                const rendimentoConvertido = valorRendimento / 100;
                contaRendimento.aplicaRendimento(rendimentoConvertido);
                break;
            }
        case 8:
            console.log(listaDeContas);
            break;
        case 9:
            console.log('Obrigado por usar o banco iTalents volte sempre');
            funcionalidade = false;
            break;
        default:
            console.log('Opção inválida');
            break;
    }
} while (funcionalidade) ;





