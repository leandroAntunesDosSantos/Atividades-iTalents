const prompt = require("prompt-sync")();
const InimigosComuns = require('../personagens/InimigosComuns');



function faseIntrodutoria(heroiHeron) {
    let luta = false;
    console.log(`Heron vê sua aldeia sendo atacada covardemente por um grupo de saqueadores.`);
    console.log(`O odio toma conta de seu coração e ele decide lutar contra eles.Heron se aproxima de um dos saqueadores e o desafia para um duelo.`)
    console.log('1 - Aceitar o desafio');
    console.log('2 - Fugir');
    const resposta = prompt('Digite o número correspondente a sua resposta: ');
    if (resposta === '1') {
        console.log('O saqueador aceita o desafio e se prepara para a batalha.');
        luta = lutar(heroiHeron);
    }
    if(luta){
        console.log('Apos isso ele retorna para o vilarejo onde encontra o anciao de sua tribo muito ferido.');
        return true;
    }
    if (!luta){
        console.log('Heron foi derrotado e a aldeia foi saqueada. Tentar novamente? ');
        console.log('1 - Sim');
        console.log('2 - Não');
        const resposta = prompt('Digite o número correspondente a sua resposta: ');
        if(resposta === '1') {
            faseIntrodutoria(heroiHeron);
        }
        if (resposta === '2') {
            console.log('Heron foi derrotado e a aldeia foi saqueada. Fim de jogo.');
            return false;
        }
    }
}


function lutar(heroi){
    console.log("[Heron] Voces são covardes, atacando uma aldeia indefesa no meio da noite. Eu vou acabar com vocês!");
    console.log("[Saqueador] Você é só um garoto, não tem chance contra nós.");
    console.log("[Heron] Eu sou Heron, o guerreiro mais habilidoso da tribo. Vamos ver do que você é capaz.");
    const inimigosComuns = new InimigosComuns('Saqueador troll da montanha', 100, 20, 5);

    while(heroi.vida > 0 && inimigosComuns.vida > 0){
        const danoHeroi = heroi.atacar();
        inimigosComuns.defender(danoHeroi);
        console.log(`Heron ataca o saqueador com um golpe de espada causando ${danoHeroi} de dano. Vida do saqueador: ${inimigosComuns.vida}`);
        if(inimigosComuns.vida <= 0){
            console.log('Heron derrotou o saqueador e salvou a aldeia.');
            return true;
        }
        const danoInimigo = inimigosComuns.atacar();
        heroi.defender(danoInimigo);
        console.log(`O saqueador ataca Heron com um golpe de machado causando ${danoInimigo} de dano. Vida de Heron: ${heroi.vida}`);
        if(heroi.vida <= 0){
            console.log('Heron foi derrotado e a aldeia foi saqueada.');
            return false;
        }
    }

    if(heroi.vida > 0){
        return true;
    }
    if(inimigosComuns.vida > 0){
        return false;
    }
}



module.exports = faseIntrodutoria;
