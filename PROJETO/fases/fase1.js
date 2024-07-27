const prompt = require("prompt-sync")();
const HeroiHeron = require("../personagens/HeroiHeron");
const InimigosComuns = require('../personagens/InimigosComuns');
const dialogoFase = require("../dialogos/dialogoFase1");


function fase1() {
    dialogoFase();

    let verificador = true;

    do{
        const lutar = prompt('Deseja lutar contra o capanga? 1 - Sim e 2 - Não :');
        switch(lutar){
            case '1':
                verificador = false;
                const result = lutaCapanga();
                if(result){
                    return true;
                }
                if(!result){
                    return false;
                }
                break;
            case '2':
                verificador = false;
                prompt('Irei pra outro destino até mais amigo. Fim de jogo.');
                return false;
            default:
                prompt('Digite um número válido');
                break;
        }
    
    } while(verificador);

}

function lutaCapanga(){
    const heroiHeron = new HeroiHeron('Heron', 100, 20, 5);
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
            console.log('Heron derrotou o capanga e está pronto para enfrentar inimigos ainda mais fortes.');
            return true;
        }
        if (heroiHeron.vida <= 0){
            console.log('Heron foi derrotado pelo capanga.');
            let verificar = true;
            
            do{
                const resposta = prompt('Tentar novamente? 1 - Sim e 2 - Não :');
                
                switch(resposta){
                    case '1':
                        verificar = false;
                        if(lutaCapanga()){
                            return true;
                        }
                        break;
                    case '2':
                        let confirmacao = prompt('Você realmente deseja desistir da missão? 1 - Sim ');
                        if(confirmacao === '1'){
                            prompt('Heron desiste da missão e a aldeia é destruida. Fim de jogo.');
                            verificar = false;
                            return false;
                        }
                    default:
                        prompt('Digite um número válido');
                        break;
                }
            } while(verificar);
        }
    }
}

module.exports = fase1;
