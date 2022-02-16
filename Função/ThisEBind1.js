const pessoa = {
    saudacao: 'Olá!',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()//conflito

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()