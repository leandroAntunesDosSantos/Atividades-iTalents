const InimigosComuns = require("../personagens/InimigosComuns");


function fase3(heroElune, heroHeron){
    console.log('Heron: Elune voce voltou, eu sabia que voce conseguiria.');
    console.log('Elune: Heron, eu nao poderia deixar minha tribo ser destruida. Estou um pouco ferida mas estou bem.');
    console.log('Heron: Eu sabia que voce era forte o suficiente para vencer essa batalha.');
    console.log('Elune: Obrigada Heron, mas ainda nao acabou. O lider dos trolls ainda esta vivo.');
    console.log('Heron: Eu sei, eu vi ele fugindo para a montanha.');
    console.log('Elune: Vamos Heron, temos que acabar com ele.');
    console.log('Heron: Ainda não é hora elune eu preciso me preparar para essa batalha. Precisamos de equipamentos melhores.');
    console.log('Elune: Voce tem razao, vamos para a cidade dos elfos, la podemos conseguir equipamentos melhores.');

    console.log('Heron e Elune partem para a cidade dos elfos para conseguir equipamentos melhores mas ao chegar la eles descobrem que a cidade foi atacada pelos orcs.');
    console.log('Heron: O que aconteceu aqui?');
    console.log('Elune: Os orcs atacaram a cidade dos elfos, precisamos ajudar.');
    console.log('Heron: Vamos Elune, temos que acabar com eles.');

    const orc = new InimigosComuns('Orc', 100, 20, 5);

    while(heroElune.vida > 0 && heroHeron.vida > 0 && orc.vida > 0){
        //Elune atacando o orc
        const danoHeroi = heroElune.atacar();
        orc.defender(danoHeroi);
        console.log(`Elune ataca o orc com um golpe de espada causando ${danoHeroi} de dano. Vida do orc: ${orc.vida}`);

        //Orc atacando Elune
        const danoInimigo = orc.atacar();
        heroElune.defender(danoInimigo);
        console.log(`O orc ataca Elune com um golpe de machado causando ${danoInimigo} de dano. Vida de Elune: ${heroElune.vida}`);

        //Heron atacando o orc
        const danoHeroi2 = heroHeron.atacar();
        orc.defender(danoHeroi2);
        console.log(`Heron ataca o orc com um golpe de espada causando ${danoHeroi2} de dano. Vida do orc: ${orc.vida}`);

        //Orc atacando Heron
        const danoInimigo2 = orc.atacar();
        heroHeron.defender(danoInimigo2);
        console.log(`O orc ataca Heron com um golpe de machado causando ${danoInimigo2} de dano. Vida de Heron: ${heroHeron.vida}`);

        if(orc.vida <= 0){
            console.log('Heron e Elune derrotaram os orcs e salvaram a cidade dos elfos.');
            console.log('Elune: Conseguimos Heron, salvamos a cidade dos elfos.');
            console.log('Heron: Sim, mas ainda temos que acabar com o lider dos trolls.');
            console.log('Elune: Vamos Heron, temos que acabar com ele.');
            return true;
        }
        if (heroElune.vida <= 0 || heroHeron.vida <= 0){
            console.log('Heron e Elune foram derrotados e a cidade dos elfos foi destruida.');
            console.log('Tentar novamente? ');
            console.log('1 - Sim');
            console.log('2 - Não');
            const resposta = prompt('Digite o número correspondente a sua resposta: ');
            if(resposta === '1') {
                fase3(heroElune, heroHeron);
            }
            if (resposta === '2') {
                console.log('Heron e Elune foram derrotados e a cidade dos elfos foi destruida. Fim de jogo.');
                return false;
            }
            return false;
        }
    }

}

module.exports = fase3;
