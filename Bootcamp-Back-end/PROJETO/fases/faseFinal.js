const Chefes = require("../personagens/Chefes");
const prompt = require('prompt-sync')();
const { dialogoFaseFinal1,dialogoFaseFinal2 } = require('../dialogos/dialogoFaseFinal');
const HeroiElune = require('../personagens/HeroiElune');
const HeroiHeron = require("../personagens/HeroiHeron");


function faseFinal() {
    dialogoFaseFinal1();

    let verificar = true;

    do {
        const decisaoLutar = prompt('Deseja lutar contra o lider dos trolls? 1 - Sim e 2 - Não :');
        switch (decisaoLutar) {
            case '1':
                if (lutaFinalTroll()) {
                    return true;
                }
                break;
            case '2':
                let confirmacao = prompt('Deseja sair do jogo? 1 - Sim ');
                if (confirmacao === '1') {
                    verificar = false;
                    console.log('Heron e Elune foram derrotados e junto com Terenas foram sacrificados. Fim de jogo.');
                    return false;
                }
            default:
                console.log('Digite um número válido');
                break;
        }

    } while (verificar);
}

function lutaFinalTroll(){
    const heroiHeron = new HeroiHeron('Heron', 100, 20, 5);
    const heroiElune = new HeroiElune('Elune', 100, 20, 5);
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
            dialogoFaseFinal2();
            return true;
        }
        if (heroiElune.vida <= 0 || heroiHeron.vida <= 0) {
            console.log('Heron e Elune foram derrotados e junto com Terenas foram sacrificados.');
            console.log('Tentar novamente? 1 - Sim e 2 - Não :');
            
            const resposta = prompt('Digite o número correspondente a sua resposta: ');
            if (resposta === '1') {
                if (lutaFinalTroll()) {
                    return true;
                }
            }
            if (resposta === '2') {
                let confirmacao = prompt('Deseja sair do jogo? 1 - Sim ');
                if (confirmacao === '1') {
                    console.log('Heron e Elune foram derrotados e junto com Terenas foram sacrificados. Fim de jogo.');
                    return false;
                }
            }
            return false; 
        }
    }
}

module.exports = faseFinal;
