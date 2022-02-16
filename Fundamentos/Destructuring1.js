const pessoa = {
    nome: 'Carlos',
    idade: 35,
    endereço: {
        logradouro: 'Rua ABC',
        número: 27
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {endereço: { logradouro, número, cep } } = pessoa
console.log(logradouro, número, cep)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true }  = pessoa
console.log(sobrenome, bemHumorado)