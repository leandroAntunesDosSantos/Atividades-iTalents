const prompt = require('prompt-sync')({sigint: true});

const roteiroInicial = [
    'Há muito tempo atrás diversos barbaros resolveram atacar a aldeia krillstok', 
    'uma aldeia pacifica e muito rica em recursos naturais, ',
    'Heron um jovem guerreiro é escolhido para defender a aldeia,', 
    'ele é um guerreiro habilidoso e corajoso, mas ele precisa de sua ajuda para vencer essa batalha. ',
    
]

function faseInicial(){
    for (let i = 0; i < roteiroInicial.length; i++) {
        prompt(roteiroInicial[i]);
    }

    let verificar = true;
    
    do{ 
        const resposta = prompt('Você aceita essa missão? 1 - Sim  e 2 - Não  ');
        switch(resposta){
            case '1':
                prompt('Heron agradece sua ajuda e juntos vocês vão defender a aldeia.');
                verificar = false;
                return true;
            case '2':
                let confirmacao = prompt('Você realmente deseja desistir da missão? 1 - Sim ');
                if(confirmacao === '1'){
                    prompt('Heron desiste da missão e a aldeia é destruida. Fim de jogo.');
                    verificar = false;
                    return false;
                }
                break;
            default:
                prompt('Digite um número válido! ');
                break;
        }
    }while(verificar);
}

module.exports = faseInicial;