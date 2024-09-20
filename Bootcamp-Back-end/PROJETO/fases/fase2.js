const Chefes = require("../personagens/Chefes");
const prompt = require('prompt-sync')();
const { dialogoFase2_1, dialogoFase2_2} = require('../dialogos/dialogoFase2');
const HeroiElune = require('../personagens/HeroiElune');


function fase2() {
    dialogoFase2_1();
    
    let verificar = true;

    do{
        const decisaoLutar = prompt('Deseja lutar contra Terenas? 1 - Sim e 2 - Não :');
        switch(decisaoLutar){
            case '1':
                if(lutarEluneTerenas()){
                    return true;
                }
                break;
            case '2':
                verificar = false;
                console.log('Elune desistiu de lutar contra Terenas e não foi mais encontrada. Fim de jogo.');
                return false;
                 
            default:
                console.log('Digite um número válido');
                break;
        }

    } while(verificar);
}

function lutarEluneTerenas(){
    const heroiHelune = new HeroiElune('Elune', 100, 20, 5);
    const chefeTerenas = new Chefes('Terenas', 100, 20, 5);

    while(heroiHelune.vida > 0 && chefeTerenas.vida > 0){
        const danoHeroi = heroiHelune.atacar();
        chefeTerenas.defender(danoHeroi);
        console.log(`Elune ataca Terenas com um golpe de espada causando ${danoHeroi} de dano. Vida de Terenas: ${chefeTerenas.vida}`);
        if(chefeTerenas.vida <= 0){
            dialogoFase2_2();
            return true;
        }
        const danoInimigo = chefeTerenas.atacar();
        heroiHelune.defender(danoInimigo);
        console.log(`Terenas ataca Elune com um golpe de machado causando ${danoInimigo} de dano. Vida de Elune: ${heroiHelune.vida}`);
        if(heroiHelune.vida <= 0){
            console.log('Elune foi derrotado e a tribo foi destruida.');
            console.log('Tentar novamente? 1 - Sim e 2 - Não :');

            const resposta = prompt('Digite o número correspondente a sua resposta: ');
            if(resposta === '1') {
                if(lutarEluneTerenas()){
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

module.exports = fase2;
