const prompt = require('prompt-sync')();
const faseIntrodutoria = require('./fases/faseIntrodutoria');
const HeroiHeron = require('./personagens/HeroiHeron');
const HeroiElune = require('./personagens/HeroiElune');
const fase22 = require('./fases/fase2');

const heroiHeron = new HeroiHeron('Heron', 1000, 20, 5);
const heroiElune = new HeroiElune('Elune', 1000, 20, 5);


let iniciar = false;
let fase2 = false;
let fase3 = false;
let faseFinal = false;

console.log(`Em uma tribo distante heron é um jovem guerreiro que acaba de receber a missao de 
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
    faseIntrodutoria(heroiHeron);
    if (faseIntrodutoria(heroiHeron)){
        fase2 = true;
    }
}

if (fase2){
    fase22(heroiElune);
    if (fase22(heroiElune)){
        fase3 = true;
    }
}
if (fase3){
    console.log('Heron: Elune voce voltou, eu sabia que voce conseguiria.');
    console.log('Elune: Heron, eu nao poderia deixar minha tribo ser destruida. Estou um pouco ferida mas estou bem.');
}

