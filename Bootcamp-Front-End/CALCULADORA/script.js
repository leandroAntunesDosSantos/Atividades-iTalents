const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorAtual = document.getElementById('valor-atual');
const botaoNumeros = document.querySelectorAll('.numero');
const botaoOperadores = document.querySelectorAll('.operador');

let display = new Display(displayValorAnterior, displayValorAtual);

botaoNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botaoOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});