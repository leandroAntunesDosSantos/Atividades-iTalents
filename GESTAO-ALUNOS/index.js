const prompt = require('prompt-sync')();

const listaAlunos = [];


//função para adicionar nome do aluno
function adicionarNomeAluno(){
    const nome = prompt('Digite o nome do aluno: ');
    if (nome === '' || nome === null || nome === undefined){
        console.log('Nome inválido, tente novamente');
        return;
    }
    return nome;
}

//função para adicionar materias do aluno com suas respectivas notas e faltas
function adicionarMaterias(){
    const materiaAddAluno = prompt('Digite o nome da matéria: ');
    if (materiaAddAluno === '' || materiaAddAluno === " "){
        console.log('matéria inválida, tente novamente');
        return;
    }
    if (materiaAddAluno === null || materiaAddAluno === undefined){
        console.log('matéria inválida, tente novamente');
        return;
    }
    let nota1 = prompt('Digite a primeira nota de 0 a 10: ');
    if(nota1 < 0 || nota1 > 10){
        console.log('Nota inválida, digite uma nota entre 0 e 10');
        return;
    }
    let nota2 = prompt('Digite a segunda nota de 0 a 10: ');
    if(nota2 < 0 || nota2 > 10){
        console.log('Nota inválida, digite uma nota entre 0 e 10');
        return;
    }
    let nota3 = prompt('Digite a terceira nota de 0 a 10: ');
    if(nota3 < 0 || nota3 > 10){
        console.log('Nota inválida, digite uma nota entre 0 e 10');
        return;
    }
    const media = +((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(2);
    if(media < 0 || media > 10 || isNaN(media) || media === null || media === undefined){
        console.log('As notas digitas são inválidas, tente novamente');
        return;
    }
    const faltas = +prompt('Digite o número de faltas: ');
    if(faltas < 0 || isNaN(faltas) || faltas === null || faltas === undefined){
        console.log('Número de faltas inválido, digite um número maior ou igual a 0');
        return
    }
    const situacao_notas = media >= 7 ? 'Aprovado' : 'Reprovado';
    const situacao_faltas = faltas <= 5 ? 'Aprovado' : 'Reprovado';
    const situacao_final = situacao_notas === 'Aprovado' && situacao_faltas === 'Aprovado' ? 'Aprovado' : 'Reprovado';

    return {
        materia: materiaAddAluno,
        notas: [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3)],
        situacao_notas,
        media,
        faltas,
        situacao_faltas,
        situacao_final,
    };
}

//função para cadastrar aluno
function cadastrarAluno(){
    //flag para verificar se o usuário deseja adicionar mais materias
    let verificacao = true;
    //logica basica para adicionar nome do aluno
    const nomeadicionado = adicionarNomeAluno();
    if (nomeadicionado.trim() === ''){
        console.log('Nome inválido, tente novamente');
        return;
    }
    //array de materias adicionadas
    const materiaAdicionado = []

    do{
        //logica para adicionar materias uma a uma
        const addMateria = prompt('Deseja adicionar uma matéria para esse aluno? (S/N) ');
        switch(addMateria.toLocaleLowerCase()){
            case 's':
                let materia = adicionarMaterias()
                if (materia === undefined){
                    console.log('Matéria inválida, tente novamente');
                    break;
                }
                materiaAdicionado.push(materia);
                break;
            case 'n':
                verificacao = false;
                break;
            default:
                console.log('Opção inválida, tente novamente');
        }
    } while(verificacao);

    //exigenca de no minimo 3 materias
    if(materiaAdicionado.length < 3){
        console.log(' O aluno precisa ter no mínimo 3 matérias cadastradas! Tente novamente ');
        return;
    }

    //objeto aluno com nome e materias
    const aluno = {
        nome: nomeadicionado,
        materias: materiaAdicionado
    }
    listaAlunos.push(aluno);
    console.log('Cadastro realizado com sucesso!');
}



//inicio do programa com menu de opções
let opcao = true;
do {
    console.log('------------------------------------');
    console.log('Cadastro de alunos, materias, notas e faltas');
    console.log('Escolha uma opção: ');
    console.log('1 - Cadastrar aluno');
    console.log('2 - Listar alunos');
    console.log('9 - Sair');
    let valor = prompt('Digite a opção desejada: ');
    switch(Number(valor)){
        case 1:
            cadastrarAluno();
            break;
            case 2:
            for (let i = 0; i < listaAlunos.length; i++){
                console.log('------------------------------------');
                console.log('Nome do aluno: ' + listaAlunos[i].nome);
                for (let j = 0; j < listaAlunos[i].materias.length; j++){
                    console.log(' Matéria: ' + listaAlunos[i].materias[j].materia);
                    console.log(' Notas: ' + listaAlunos[i].materias[j].notas);
                    console.log(' Média: ' + listaAlunos[i].materias[j].media);
                    console.log(' Situação das notas: ' + listaAlunos[i].materias[j].situacao_notas);
                    console.log(' Faltas: ' + listaAlunos[i].materias[j].faltas);
                    console.log(' Situação das faltas: ' + listaAlunos[i].materias[j].situacao_faltas);
                    console.log(' Situação final: ' + listaAlunos[i].materias[j].situacao_final);
                    console.log('  ');
                }

            }
            break;
        case 9:
            console.log('Sair do programa');
            opcao = false;
            break;
        default:
            console.log('Opção inválida');
    }
} while(opcao);






