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
