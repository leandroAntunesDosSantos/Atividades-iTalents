const prompt = require('prompt-sync')();


const alunoIndividual = [{
    nome: 'João',
    materias: [
        {
            materia : 'Matemática', 
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            faltas : 3,
        },
        {
            materia : 'Fisica',
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            faltas : 3,
        },
        {
            materia : 'Português',
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            faltas : 3,
        }
    ],
},
{
    nome: 'João',
    materias: [
        {
            materia : 'Matemática', 
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            faltas : 3,
        },
        {
            materia : 'Fisica',
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            faltas : 3,
        },
        {
            materia : 'Português',
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            faltas : 3,
        }
    ],
    }
];


function adicionarNomeAluno(){
    const nome = prompt('Digite o nome do aluno: ');
    if (nome === '' || nome === null || nome === undefined){
        console.log('Nome inválido, tente novamente');
        return;
    }
    return nome;
}

function adicionarMaterias(){
    const materia = prompt('Digite o nome da matéria: ');
    if (materia === '' || materia === null || materia === undefined){
        console.log('materia inválida, tente novamente');
        return;
    }
    const nota1 = prompt('Digite a primeira nota: ');
    if(nota1 < 0 || nota1 > 10){
        console.log('Nota inválida, digite uma nota entre 0 e 10');
        return;
    }
    const nota2 = prompt('Digite a segunda nota: ');
    if(nota2 < 0 || nota2 > 10){
        console.log('Nota inválida, digite uma nota entre 0 e 10');
        return;
    }
    const nota3 = prompt('Digite a terceira nota: ');
    if(nota3 < 0 || nota3 > 10){
        console.log('Nota inválida, digite uma nota entre 0 e 10');
        return;
    }
    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    const faltas = prompt('Digite o número de faltas: ');
    if(faltas < 0){
        console.log('Número de faltas inválido, digite um número maior ou igual a 0');
        return
    }
    return {
        materia, 
        notas: [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3)], 
        media, 
        faltas
    };
}

function cadastrarAluno(){
    let verificacao = true;
    const nomeadicionado = adicionarNomeAluno();
    const materiaAdicionado = []

    do{
        const addMateria = prompt('Deseja adicionar uma matéria? (S/N) ');
        switch(addMateria.toLocaleLowerCase()){
            case 's':
                materiaAdicionado.push(adicionarMaterias());
                break;
            case 'n':
                verificacao = false;
                break;
            default:
                console.log('Opção inválida, tente novamente');
        }
    } while(verificacao);

    const aluno = {
        nome: nomeadicionado,
        materias: materiaAdicionado
    }
    console.log(aluno);
    alunoIndividual.push(aluno);  
}

cadastrarAluno();

console.log(alunoIndividual);