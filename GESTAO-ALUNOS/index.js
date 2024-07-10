const prompt = require('prompt-sync')();

//lista todos os alunos cadastrados
//Exemplo de lista de alunos com 3 materias e suas respectivas notas e faltas
const listaAlunos = [{
    nome: 'João',
    materias: [
        {
            materia : 'Matemática',    // nome da materia
            notas : [8.0, 9.0, 10.0],  // 3 notas da materia escolhida pelo aluno
            media : 9.0,               // < 7 = reprovado
            situacao_notas: "Aprovado",
            faltas : 3,           // > 5 = reprovado
            situacao_faltas: "Aprovado",
            situacao_final: "Aprovado", // se a media e faltas estiverem aprovadas, o aluno é aprovado na materia
        },
        {
            materia : 'Fisica',
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            situacao_notas: "Aprovado",
            faltas : 3,
            situacao_faltas: "Aprovado",
            situacao_final: "Aprovado"
        },
        {
            materia : 'Português',
            notas : [8.0, 9.0, 10.0],
            media : 9.0,
            situacao_notas: "Aprovado",
            faltas : 6,
            situacao_faltas: "Reprovado",
            situacao_final: "Reprovado"
        }
    ],
    },
];

/* exemplo de saída de um cadastro de aluno
Nome do aluno: marcos
Matéria: matematica
Notas: 6,5,9.8
Média: 6.93
Situação das notas: Reprovado
Faltas: 7
Situação das faltas: Reprovado
Situação final: Reprovado

Matéria: portugues
Notas: 6,9,9
Média: 8.00
Situação das notas: Aprovado
Faltas: 2
Situação das faltas: Aprovado
Situação final: Aprovado

Matéria: fisica
Notas: 5,4,3
Média: 4.00
Situação das notas: Reprovado
Faltas: 7
Situação das faltas: Reprovado
Situação final: Reprovado
*/


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
    const materia = prompt('Digite o nome da matéria: ');
    if (materia === '' || materia === null || materia === undefined){
        console.log('matéria inválida, tente novamente');
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
    const media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(2);
    const faltas = prompt('Digite o número de faltas: ');
    if(faltas < 0){
        console.log('Número de faltas inválido, digite um número maior ou igual a 0');
        return
    }
    const situacao_notas = media >= 7 ? 'Aprovado' : 'Reprovado';
    const situacao_faltas = faltas <= 5 ? 'Aprovado' : 'Reprovado';
    const situacao_final = situacao_notas === 'Aprovado' && situacao_faltas === 'Aprovado' ? 'Aprovado' : 'Reprovado';
    
    return {
        materia,
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
    //array de materias adicionadas
    const materiaAdicionado = []

    do{
        //logica para adicionar materias uma a uma
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
    console.log('Aluno cadastrado com sucesso!');
}


//inicio do programa com menu de opções
let opcao = true;


do {
    console.log('------------------------------------');
    console.log('Cadastro de alunos, materias, notas e faltas');
    console.log('Escolha uma opção: ');
    console.log('1 - Cadastrar aluno');
    console.log('2 - Listar alunos');
    console.log('99 - Sair');
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
        case 99:
            console.log('Sair do programa');
            opcao = false;
            break;
        default:
            console.log('Opção inválida');
    }
} while(opcao);






