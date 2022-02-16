class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }

    anoDeVida() {
        console.log(`Eu tenho ${this.idade} anos.`)
    }

    h() {
        console.log(`Eu tenho ${this.altura}m de altura.`)
    }
}

const p1 = new Pessoa('João', 39, 1.75)
p1.falar()
p1.anoDeVida()
p1.h()