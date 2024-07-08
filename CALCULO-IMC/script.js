
function calcular(){
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value ;

    if(peso == '' || altura == ''){
        alert('Preencha o campo peso e altura');
        return;
    }
    if(peso <= 0 || altura <= 0){
        alert('Os campos não podem ser 0 ou negativos');
        return;
    }

    const imc = peso / (altura * altura);

    let resultText = '';

    if(imc < 18.5){
        resultText = "Abaixo do peso";
    }else if(imc >= 18.5 && imc <= 24.9){
        resultText = "Peso normal";
    }else if(imc >= 25 && imc <= 29.9){
        resultText = "Sobrepeso";
    }else if(imc >= 30){
        resultText = "Obesidade";
    }

    resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br> ${resultText}`;

}

function limpar(){
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
}