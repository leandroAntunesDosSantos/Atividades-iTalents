const prompt = require('prompt-sync')();

const roteiro1 = [
    'Heron: Elune voce voltou, eu sabia que voce conseguiria.',
    'Elune: Heron, eu nao poderia deixar minha tribo ser destruida. Estou um pouco ferida mas estou bem.',
    'Heron: Eu sabia que voce era forte o suficiente para vencer essa batalha.',
    'Elune: Obrigada Heron, mas ainda nao acabou. O lider dos trolls ainda esta vivo.',
    'Heron: Eu sei, eu vi ele fugindo para a montanha.',
    'Elune: Vamos Heron, temos que acabar com ele.',
    'Heron: Ainda não é hora elune eu preciso me preparar para essa batalha. Precisamos de equipamentos melhores.',
    'Elune: Voce tem razao, vamos para a cidade dos elfos, la podemos conseguir equipamentos melhores.',
    'Heron e Elune partem para a cidade dos elfos para conseguir equipamentos melhores mas ao chegar la eles descobrem que a cidade foi atacada pelos orcs.',
    'Heron: O que aconteceu aqui?',
    'Elune: Os orcs atacaram a cidade dos elfos, precisamos ajudar.',
    'Heron: Vamos Elune, temos que acabar com eles.'
];

function dialogoFase3_1() {
    for (let i = 0; i < roteiro1.length; i++) {
        prompt(roteiro1[i]);
    }
}

const roteiro2 = [
    'Heron e Elune derrotaram os orcs e salvaram a cidade dos elfos.',
    'Elune: Conseguimos Heron, salvamos a cidade dos elfos.',
    'Heron: Sim, mas ainda temos que acabar com o lider dos trolls.',
    'Elune: Vamos Heron, temos que acabar com ele.'
];

function dialogoFase3_2() {
    for (let i = 0; i < roteiro2.length; i++) {
        prompt(roteiro2[i]);
    }
}

module.exports = {
    dialogoFase3_1,
    dialogoFase3_2
}