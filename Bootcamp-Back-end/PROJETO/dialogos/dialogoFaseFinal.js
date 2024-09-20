const prompt = require('prompt-sync')();


const roteiroFinal1 = [
    'Heron e Elune se preparam para partir de manha cedo para a batalha contra o lider dos trolls.',
    'Heron: Elune, eu estou pronto para a batalha.',
    'Elune: Eu tambem estou pronta Heron, vamos acabar com ele.',
    'Heron: Que estranho Elune, eu sinto que algo esta errado.',
    'Elune: O que voce quer dizer Heron?',
    'Heron: Eu nao sei, mas eu sinto que algo esta errado. Não tem ninguem aqui para onde foram',
    'Elune: Eu tambem estou sentindo algo estranho Heron.',
    'Heron: Elune, cuidado!',
    'Rei dos trolls: Sejam bem vindos guerreiros, eu estava esperando por voces.',
    'Heron: Quem é voce?',
    'Rei dos trolls: Eu sou o lider dos trolls, eu sou o rei dos trolls. Tem uma pessoa muito especial para voces aqui.',
    'Heron: Quem?',
    'Rei dos trolls: Terenas, venha aqui.',
    'Terenas: Heron, Elune, me ajudem por favor.',
    'Heron: Terenas? Elune eu pensei que voce tinha acabado com ela.',
    'Elune: Me desculpe Heron, eu nao consegui fazer isso.',
    'Heron: Terenas o que aconteceu? Por que voce esta aqui?',
    'Terenas: Eu fui capturada pelos trolls, eles me obrigaram a trair voces.',
    'Rei dos trolls: Isso mesmo, eu obriguei ela a trair voces. Agora calem a boca criaturas pateticas! Vou fazer uma bela de uma oferenda para os deuses.',
    'Terenas: Por favor me ajudem, eu nao queria fazer isso. Me perdoe... irmã.',
    'Elune: Você disse irmã?',
    'Terenas: Sim, eu sou sua irmã Elune. Eu não queria fazer isso, eu fui obrigada.',
    'Heron: Elune, o que vamos fazer?',
    'Elune: Eu não sei Heron, eu não sei o que fazer.',
    'Rei dos trolls: Silencio! Vou fazer uma oferenda para os deuses, e vocês serão a oferenda.',
    'Heron: Não, não vamos deixar isso acontecer.'
];

const roteiroFinal2 = [
    'Heron e Elune derrotaram o lider dos trolls e salvaram Terenas.',
    'Elune: Conseguimos Heron, salvamos Terenas. Me ajude a levar ela para casa.',
    'Heron: Sim, vamos levar ela para casa.',
    'Terenas: Obrigada terenas minha grande irmã, se não fosse voces eu estaria morta e minha alma seria sacrificada para os deuses.',
    'Heron: Nossa aldeia foi muito prejudicada por causa de voce Terenas',
    'Terenas: Eu sei Heron, e vou pagar pelo que eu fiz',
    'Elune: Vamos levar ela para casa Heron, ela precisa de cuidados.',
    'Terenas foi julgada pelo conselho da tribo e foi condenada a ser exilada da tribo.',
    'Heron e Elune salvaram a tribo e foram condecorados herois.',
    'Fim de jogo'
];

function dialogoFaseFinal1() {
    for (let i = 0; i < roteiroFinal1.length; i++) {
        prompt(roteiroFinal1[i]);
    }
}

function dialogoFaseFinal2() {
    for (let i = 0; i < roteiroFinal2.length; i++) {
        prompt(roteiroFinal2[i]);
    }
}

module.exports = {
    dialogoFaseFinal1,
    dialogoFaseFinal2
}