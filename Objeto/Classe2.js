class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(idade) {
        super('Silva')
        this.idade = idade
        
    }
}

const filho = new Filho(33)
filho.profissao = 'Manobrista'
console.log(filho)
