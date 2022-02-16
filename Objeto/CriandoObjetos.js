// Notação Literal
const obj1 = {
    nome: 'Carlos',
    idade: 22
}
console.log(obj1)

// Object em JS (new)
console.log(typeof Object, typeof new Object)
const obj2 = new Object
obj2.nome = 'Maria'
obj2.endereço = {
    logradouro: 'Rua 123',
    numero: 27,
    cep: 25555-050
}
console.log(obj2)
obj2.endereço.logradouro = 'Rua ABC'
console.log(obj2)

// Funções construtoras
function produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desconto)).toFixed(2)
    }
}
const p1 = new produto('Cigarro', 8.60, 0.25)
const p2 = new produto('Cachaça', 5.20, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}
const f1 = criarFuncionario('Marcos', 2500, 2)
const f2 = criarFuncionario('Maria', 4500, 5)
console.log(f1, f2)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const pessoa = Object.create(null)
pessoa.nome = 'Ana'
pessoa.idade = 25
console.log(pessoa)

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)