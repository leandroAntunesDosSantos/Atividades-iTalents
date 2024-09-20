class PersonagemAmigo{
    constructor(vida, dano, defesa){
        this.vida = vida;
        this.dano = dano;
        this.defesa = defesa;
    }

    atacar(){
        return Math.floor(Math.random() * this.dano);
    }

    defender(dano){
        this.vida -= dano - this.defesa;
    }
}

module.exports = PersonagemAmigo;