const prompt = require('prompt-sync')();
const faseIntrodutoria = require('./fases/faseIntrodutoria');
const HeroiHeron = require('./personagens/HeroiHeron');
const HeroiElune = require('./personagens/HeroiElune');
const fase22 = require('./fases/fase2');
const fase33 = require('./fases/fase3');
const final = require('./fases/faseFinal');


const heroiHeron1 = new HeroiHeron('Heron', 1000, 20, 5);
const heroiElune1 = new HeroiElune('Elune', 1000, 20, 5);


let iniciar = false;
let fase2 = false;
let fase3 = false;
let faseFinal = false;

console.log(`Em uma tribo distante Heron é um jovem guerreiro que acaba de receber a missão de 
defender sua tribo que esta sendo constantemente atacada por um grupo de guerreiros inimigos. 
Heron é um guerreiro habilidoso e corajoso, mas ele precisa de sua ajuda para vencer essa batalha. ' 
Você aceita essa missão?`);
console.log('1 - Sim');
console.log('2 - Não');
const resposta = prompt('Digite o número correspondente a sua resposta: ');
if (resposta === '1') {
    console.log('')
    console.log(' Heron esta muito feliz por ter você ao seu lado nessa batalha. Vamos vencer essa guerra juntos!');
    iniciar = true;
}else{
    console.log('Entendo, Heron vai precisar de muita sorte para vencer essa batalha sozinho.');
}


if(iniciar){
    //faseIntrodutoria(heroiHeron1);
    if (faseIntrodutoria(heroiHeron1)){
        fase2 = true;
    }
}

if (fase2){
    //fase22(heroiElune1);
    if (fase22(heroiElune1)){
        fase3 = true;
    }
}
if (fase3){
    //fase33(heroiElune1, heroiHeron1);
    if (fase33(heroiElune1, heroiHeron1)){
        faseFinal = true;
    }
}

if (faseFinal){
    final(heroiHeron1, heroiElune1);
}

