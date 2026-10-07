
class heroi {
    constructor(nome,idade,tipo) {
        this.nome   = nome;
        this.idade  = idade;
        this.tipo   = tipo;
    }

    atacar() {
        var ataque

        if(this.tipo = "mago") {
            ataque = "usou magia";
        }

        if(this.tipo = "guerreiro") {
            ataque = "usou espada";
        }

        if(this.tipo = "monge") {
            ataque = "usou artes marciais";
        }

        if(this.tipo = "ninja") {
            ataque = "usou shuriken";
        }
        return ataque
    }
}

let heroi_1 = new heroi("Haruto",17,"ninja")

heroi_1_ataque = heroi_1.atacar()

console.log("o " + heroi_1.tipo + " atacou usando " + heroi_1_ataque );