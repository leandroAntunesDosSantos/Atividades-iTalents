const prompt = require('prompt-sync')();
const faseInicial = require('./dialogos/dialogoIndex');
const fase1 = require('./fases/fase1');
const fase2 = require('./fases/fase2');
const fase3 = require('./fases/fase3');
const faseFinal = require('./fases/faseFinal');



function jogo(){
    if(faseInicial()){
        if(fase1()){
            if(fase2()){
                if(fase3()){
                    if(faseFinal()){
                        console.log('Você venceu o jogo!');
                        main();
                    }
                }
            }
        }
    }
}

function main(){
    prompt('Bem vindo ao jogo Resillian. Pressione enter para começar.');
    console.log('O jogo se passa em um mundo de fantasia onde você precisa defender sua aldeia de inimigos poderosos.');
    prompt('Para avancar com o dialogo pressione enter.');
    console.log('Que as bençãos dos deuses estejam com você.');
    
    let verificar = true;
    do{
        console.log('Digite 1 para começar o jogo.');
        console.log('Digite 2 para sair do jogo.');
        const resposta = prompt('Digite o número correspondente a sua resposta: ');
        switch(resposta){
            case '1':
                jogo();
                verificar = false;
                break;
            case '2':
                verificar = false;
                console.log('Até mais guerreiro. Que os deuses estejam com você.');
                break;
            default:
                console.log('Digite um número válido');
                break;
        }
    } while(verificar);
}

main();