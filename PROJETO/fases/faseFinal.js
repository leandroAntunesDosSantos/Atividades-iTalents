const Chefes = require("../personagens/Chefes");
const prompt = require('prompt-sync')();

const roteiroFase6 = [
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

const roteiroFinal = [
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

function faseFinal(heroiHeron, heroiElune) {
    for (let i = 0; i < roteiroFase6.length; i++) {
        prompt(roteiroFase6[i]);
    }
    const liderTrolls = new Chefes('Rei dos trolls', 200, 20, 5);

    while (heroiHeron.vida > 0 && heroiElune.vida > 0 && liderTrolls.vida > 0) {
        //Elune atacando o lider dos trolls
        const danoHeroi = heroiElune.atacar();
        liderTrolls.defender(danoHeroi);
        console.log(`Elune ataca o lider dos trolls com um golpe de espada causando ${danoHeroi} de dano. Vida do lider dos trolls: ${liderTrolls.vida}`);

        //Lider dos trolls atacando Elune
        const danoInimigo = liderTrolls.atacar();
        heroiElune.defender(danoInimigo);
        console.log(`O lider dos trolls ataca Elune com um golpe de machado causando ${danoInimigo} de dano. Vida de Elune: ${heroiElune.vida}`);

        //Heron atacando o lider dos trolls
        const danoHeroi2 = heroiHeron.atacar();
        liderTrolls.defender(danoHeroi2);
        console.log(`Heron ataca o lider dos trolls com um golpe de espada causando ${danoHeroi2} de dano. Vida do lider dos trolls: ${liderTrolls.vida}`);

        //Lider dos trolls atacando Heron
        const danoInimigo2 = liderTrolls.atacar();
        heroiHeron.defender(danoInimigo2);
        console.log(`O lider dos trolls ataca Heron com um golpe de machado causando ${danoInimigo2} de dano. Vida de Heron: ${heroiHeron.vida}`);

        if (liderTrolls.vida <= 0) {
            for (let i = 0; i < roteiroFinal.length; i++) {
                prompt(roteiroFinal[i]);
            }
            return true;
        }
        if (heroiElune.vida <= 0 || heroiHeron.vida <= 0) {
            console.log('Heron e Elune foram derrotados e junto com Terenas foram sacrificados.');
            console.log('Tentar novamente? ');
            console.log('1 - Sim');
            console.log('2 - Não');
            const resposta = prompt('Digite o número correspondente a sua resposta: ');
            if (resposta === '1') {
                faseFinal(heroiHeron, heroiElune);
            }
            if (resposta === '2') {
                console.log('Heron e Elune foram derrotados e junto com Terenas foram sacrificados. Fim de jogo.');
                return false;
            }
            return false;
        }
    }

}

module.exports = faseFinal;
