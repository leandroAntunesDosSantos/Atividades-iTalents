const prompt = require("prompt-sync")();
const InimigosComuns = require('../personagens/InimigosComuns');



function faseIntrodutoria(heroiHeron) {
    console.log('Heron vasculha a floresta em busca de pistas sobre os ataques a sua tribo.');
    console.log('Heron: O que está acontecendo com a minha tribo?');
    console.log('Heron: Eu preciso encontrar respostas.');
    console.log('Heron: O que é isso?');
    console.log('Heron encontra um orc ferido no chão.');
    console.log('Orc: Por favor, me ajude.');
    console.log('Heron: Como ousa me pedir ajuda, você é um dos responsáveis pelos ataques a minha tribo.');
    console.log('Orc: Eu não queria fazer isso, eles me obrigaram. Minha raça esta sendo corrompida pela oferenda dos deuses através do rei dos trolls.');
    console.log('Heron: O que você quer dizer?');
    console.log('Orc: O rei dos trolls está fazendo oferendas para os deuses para ganhar poder e destruir todas as tribos da floresta.');
    console.log('Heron: Onde posso encontrar o rei dos trolls?');
    console.log('Orc: Ele está na montanha ao norte daqui.');
    console.log('Heron: Obrigado pela informação, vou poupar a sua vida.');
    console.log('No meio do caminho heron encontra um capanga do rei dos trolls.');
    console.log('Capanga: Acho que esqueci de aniquilar você. Não seja por isso farei isso agora.');
    console.log('Heron: Então foi você que atacou a minha tribo.');
    console.log('Capanga: Sim, esperava mais de uma tribo que se dizia forte. Mas vocês são fracos. E agora eu vou acabar com você.');
    console.log('Heron: Não vai ser tão fácil assim.');

    const capanga = new InimigosComuns('Capanga', 100, 20, 5);

    while(heroiHeron.vida > 0 && capanga.vida > 0){
        //Heron atacando o capanga
        const danoHeroi = heroiHeron.atacar();
        capanga.defender(danoHeroi);
        console.log(`Heron ataca o capanga com um golpe de espada causando ${danoHeroi} de dano. Vida do capanga: ${capanga.vida}`);

        //Capanga atacando Heron
        const danoInimigo = capanga.atacar();
        heroiHeron.defender(danoInimigo);
        console.log(`O capanga ataca Heron com um golpe de machado causando ${danoInimigo} de dano. Vida de Heron: ${heroiHeron.vida}`);

        if(capanga.vida <= 0){
            console.log('Heron derrotou o capanga e está pronto para enfrentar o rei dos trolls.');
            return true;
        }
        if (heroiHeron.vida <= 0){
            console.log('Heron foi derrotado pelo capanga.');
            console.log('Tentar novamente? ');
            console.log('1 - Sim');
            console.log('2 - Não');
            const resposta = prompt('Digite o número correspondente a sua resposta: ');
            if(resposta === '1') {
                faseIntrodutoria(heroiHeron);
            }
            if (resposta === '2') {
                console.log('Heron foi derrotado pelo capanga e levado para servir de sacrifício. Fim de jogo.');
                return false;
            }
        }

    }

}



module.exports = faseIntrodutoria;
