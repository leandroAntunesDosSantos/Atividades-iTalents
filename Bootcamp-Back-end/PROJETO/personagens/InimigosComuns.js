// Objetivo: Classe que representa os inimigos comuns do jogo
const PersonagemInimigo = require('./PersonagemInimigo');

class InimigosComuns extends PersonagemInimigo{
    constructor(nome, vida, dano, defesa) {
        super(vida, dano, defesa);
        this.nome = nome;
    }
    atacar() {
        return Math.floor(Math.random() * this.dano);
    }
    defender(dano) {
        this.vida -= dano - this.defesa;
    }

}


module.exports = InimigosComuns;
