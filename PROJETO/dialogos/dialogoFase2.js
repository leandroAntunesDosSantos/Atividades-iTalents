const prompt = require('prompt-sync')();

const roteiro1 = [
    'Heron encontra elune chorando em um canto da aldeia.',
    'Elune: Quem fez isso com nossa tribo Heron foi um de nós',
    'Heron: O que você quer dizer?',
    'Elune: Terenas foi quem nos traiu, ela se juntou ao rei dos trolls e nos traiu.',
    'Heron: Terenas, minha melhor amiga? Não acredito.',
    'Elune: Eu vi com meus próprios olhos, ela estava com eles.',
    'Heron: Eu preciso falar com ela.',
    'Elune: Não eu sei o que aconteceu, ela não vai te ouvir. Ela queria ser escolhida para liderar a tribo e não foi pois não era forte o suficiente.',
    'Heron: Ela deixou a ganância tomar conta de seu coração.',
    'Elune: Sim, ela se juntou a eles para nos destruir.',
    'Heron: Eu preciso falar com ela.',
    'Elune: Não Heron, quem vai sou eu eu recebi a benção da deusa da lua e cabe a mim acabar com ela.',
    'Heron: Elune não faça isso.',
    'Elune: Eu vou Heron, eu vou.',
];

const roteiro2 = [
    "Elune derrota Terenas e salva a tribo.",
    "Elune: Terenas você foi minha melhor amiga, mas você escolheu o caminho errado. Os deuses me deram a benção da lua e eu não posso deixar você destruir nossa tribo.",
    "Terenas: Elune, eu não queria fazer isso, eu só queria ser a lider da tribo. Voce sempre foi a favorita de todos.",
    "Elune: Terenas, eu não escolhi ser a favorita, eu fui escolhida pela deusa da lua. Eu não posso deixar você destruir nossa tribo.",
    "Terenas: Eu entendo Elune, acabe com isso.",
    "Elune: Eu não posso fazer isso. Vai embora terenas, eu não quero te ver nunca mais. Direi a todos que você morreu na batalha.",
    "Terenas: Obrigada Elune.",
];


function dialogoFase2_1() {
    for (let i = 0; i < roteiro1.length; i++) {
        prompt(roteiro1[i]);
    }
}


function dialogoFase2_2() {
    for (let i = 0; i < roteiro2.length; i++) {
        prompt(roteiro2[i]);
    }
}

module.exports = {
    dialogoFase2_1,
    dialogoFase2_2
}
