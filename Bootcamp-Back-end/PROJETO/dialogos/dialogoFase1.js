const prompt = require('prompt-sync')();


function dialogoFase1(){
    const roteiroFase1 = [
        'Heron vasculha a floresta em busca de pistas sobre os ataques a sua tribo.',
        'Heron: O que está acontecendo com a minha tribo?',
        'Heron: Eu preciso encontrar respostas.',
        'Heron: O que é isso?',
        'Heron encontra um orc ferido no chão.',
        'Orc: Por favor, me ajude.',
        'Heron: Como ousa me pedir ajuda, você é um dos responsáveis pelos ataques a minha tribo.',
        'Orc: Eu não queria fazer isso, eles me obrigaram. Minha raça esta sendo corrompida pela oferenda dos deuses através do rei dos trolls.',
        'Heron: O que você quer dizer?',
        'Orc: O rei dos trolls está fazendo oferendas para os deuses para ganhar poder e destruir todas as tribos da floresta.',
        'Heron: Onde posso encontrar o rei dos trolls?',
        'Orc: Ele está na montanha ao norte daqui.',
        'Heron: Obrigado pela informação, vou poupar a sua vida.',
        'No meio do caminho heron encontra um capanga do rei dos trolls.',
        'Capanga: Acho que esqueci de aniquilar você. Não seja por isso farei isso agora.',
        'Heron: Então foi você que atacou a minha tribo.',
        'Capanga: Sim, esperava mais de uma tribo que se dizia forte. Mas vocês são fracos. E agora eu vou acabar com você.',
        'Heron: Não vai ser tão fácil assim.'  
    ];
    for (let i = 0; i < roteiroFase1.length; i++) {
         prompt(roteiroFase1[i]);
    }
}

module.exports = dialogoFase1;