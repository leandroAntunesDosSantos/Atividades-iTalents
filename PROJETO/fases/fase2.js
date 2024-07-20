const Chefes = require("../personagens/Chefes");
const prompt = require('prompt-sync')();






function fase2(heroi) {
    console.log('Heron encontra elune chorando em um canto da aldeia.');
    console.log('Elune: Quem fez isso com nossa tribo Heron foi um de nós');
    console.log('Heron: O que você quer dizer?');
    console.log('Elune: Terenas foi quem nos traiu, ela se juntou ao rei dos trolls e nos traiu.');
    console.log('Heron: Terenas, minha melhor amiga? Não acredito.');
    console.log('Elune: Eu vi com meus próprios olhos, ela estava com eles.');
    console.log('Heron: Eu preciso falar com ela.');
    console.log('Elune: Não eu sei o que aconteceu, ela não vai te ouvir. Ela queria ser escolhida para liderar a tribo e não foi pois não era forte o suficiente.');
    console.log('Heron: Ela deixou a ganância tomar conta de seu coração.');
    console.log('Elune: Sim, ela se juntou a eles para nos destruir.');
    console.log('Heron: Eu preciso falar com ela.');
    console.log('Elune: Não Heron, quem vai sou eu eu recebi a benção da deusa da lua e cabe a mim acabar com ela.');
    console.log('Heron: Elune não faça isso.');
    console.log('Elune: Eu vou Heron, eu vou.');

    const chefeTerenas = new Chefes('Terenas', 100, 20, 5);

    while(heroi.vida > 0 && chefeTerenas.vida > 0){
        const danoHeroi = heroi.atacar();
        chefeTerenas.defender(danoHeroi);
        console.log(`Elune ataca Terenas com um golpe de espada causando ${danoHeroi} de dano. Vida de Terenas: ${chefeTerenas.vida}`);
        if(chefeTerenas.vida <= 0){
            console.log('Elune derrotou Terenas e salvou a tribo.');
            console.log('Elune: Tenas você foi minha melhor amiga, mas você escolheu o caminho errado. Os deuses me deram a benção da lua e eu não posso deixar você destruir nossa tribo.');
            console.log('Terenas: Elune, eu não queria fazer isso, eu só queria ser a lider da tribo. Voce sempre foi a favorita de todos.');
            console.log('Elune: Terenas, eu não escolhi ser a favorita, eu fui escolhida pela deusa da lua. Eu não posso deixar você destruir nossa tribo.');
            console.log('Terenas: Eu entendo Elune, acabe com isso.');
            console.log('Elune: Eu não posso fazer isso. Vai embora terenas, eu não quero te ver nunca mais. Direi a todos que você morreu na batalha.');
            console.log('Terenas: Obrigada Elune.');
            return true;
        }
        const danoInimigo = chefeTerenas.atacar();
        heroi.defender(danoInimigo);
        console.log(`Terenas ataca Elune com um golpe de machado causando ${danoInimigo} de dano. Vida de Elune: ${heroi.vida}`);
        if(heroi.vida <= 0){
            console.log('Elune foi derrotado e a tribo foi destruida.');
            console.log('Tentar novamente? ');
            console.log('1 - Sim');
            console.log('2 - Não');
            const resposta = prompt('Digite o número correspondente a sua resposta: ');
            if(resposta === '1') {
                fase2(heroi);
            }
            if (resposta === '2') {
                console.log('Elune foi derrotado e a tribo foi destruida. Fim de jogo.');
                return false;
            }
            return false;
        }
    }

}

module.exports = fase2;
