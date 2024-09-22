class Display {
    constructor(displayValorAnterior, displayValorAtual) {
        this.displayValorAtual = displayValorAtual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacao = undefined;
        this.valorAtual = '';
        this.valorAnterior = '';
        this.sinal = {
            somar: '+',
            dividir: '/',
            multiplicar: 'x',
            subtrair: '-', 
        }
    }

    limpar() {
        this.valorAtual = this.valorAtual.toString().slice(0,-1);
        this.imprimirValores();
    }

    limparTudo() {
        this.valorAtual = '';
        this.valorAnterior = '';
        this.tipoOperacao = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacao !== 'igual' && this.calcular();
        this.tipoOperacao = tipo;
        this.valorAnterior = this.valorAtual ? this.valorAtual : this.valorAnterior;
        this.valorAtual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorAtual.includes('.')){
            return
        }
        this.valorAtual = this.valorAtual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorAtual.textContent = this.valorAtual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.sinal[this.tipoOperacao] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorAtual = parseFloat(this.valorAtual);
        if( isNaN(valorAtual)  || isNaN(valorAnterior) ) {
            return
        }
        this.valorAtual = this.calculador[this.tipoOperacao](valorAnterior, valorAtual);
    }
}