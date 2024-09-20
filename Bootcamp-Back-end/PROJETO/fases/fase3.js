const InimigosComuns = require("../personagens/InimigosComuns");
const prompt = require('prompt-sync')();
const {dialogoFase3_1, dialogoFase3_2} = require('../dialogos/dialogoFase3');
const HeroiElune = require('../personagens/HeroiElune');


function fase3(){
    dialogoFase3_1();

    let verificar = true;

    do{
        const decisaoLutar = prompt('Deseja lutar contra os orcs? 1 - Sim e 2 - Não :');
        switch(decisaoLutar){
            case '1':
                if(lutarEluneOrc()){
                    dialogoFase3_2();
                    return true;
                }
                break;
            case '2':
                let confirmacao = prompt('Deseja sair do jogo? 1 - Sim ');
                if(confirmacao === '1'){
                    verificar = false;
                    console.log('Elune desistiu de lutar contra os orcs e não foi mais encontrada. Fim de jogo.');
                    return false;
                }
            default:
                console.log('Digite um número válido');
                break;
        }

    } while(verificar);
}

function lutarEluneOrc(){

    const heroElune = new HeroiElune('Elune', 100, 20, 5);
    const orc = new InimigosComuns('Orc', 100, 20, 5);

    while(heroElune.vida > 0 && orc.vida > 0){
        //Elune atacando o orc
        const danoHeroi = heroElune.atacar();
        orc.defender(danoHeroi);
        console.log(`Elune ataca o orc com um golpe de espada causando ${danoHeroi} de dano. Vida do orc: ${orc.vida}`);

        //Orc atacando Elune
        const danoInimigo = orc.atacar();
        heroElune.defender(danoInimigo);
        console.log(`O orc ataca Elune com um golpe de machado causando ${danoInimigo} de dano. Vida de Elune: ${heroElune.vida}`);

        if(orc.vida <= 0){
            return true;
        }
        
        if(heroElune.vida <= 0){
            console.log('Elune foi derrotado e a tribo foi destruida.');
            console.log('Tentar novamente? 1 - Sim e 2 - Não :');

            const resposta = prompt('Digite o número correspondente a sua resposta: ');
            if(resposta === '1') {
                if(lutarEluneOrc()){
                    return true;
                }
            }
            if (resposta === '2') {
                let confirmacao = prompt('Deseja sair do jogo? 1 - Sim ');
                if (confirmacao === '1') {
                    console.log('Elune foi derrotada e a tribo foi destruida. Fim de jogo.');
                    return false;
                }
            }
            return false;

        }
    }
}

module.exports = fase3;
