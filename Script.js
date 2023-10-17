class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        switch (tipo) {
            case "Guerreiro":
                this.ataque = "Espada";
                break;
            case "Mago":
                this.ataque = "Bola de Fogo";
                break;
            case "Ninja":
                this.ataque = "Shuriken";
                break;
            case "Monge":
                this.ataque = "Artes Marciais";
                break;
            default:
                this.ataque = "Ataque desconhecido";
        }
    }

    executarAtaque() {
        return `O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`;
    }
}

let heroi1 = new heroi("Guilherme", 18, "Guerreiro");
console.log(heroi1.executarAtaque());
