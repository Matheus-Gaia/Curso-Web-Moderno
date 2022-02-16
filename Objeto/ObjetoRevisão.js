const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preço = 220

console.log(produto)
delete produto['marca do produto']
delete produto.preço
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 82000,
    proprietário: {
        nome: 'Raul',
        idade: 32,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 27
        }
    },
    condutores: [{
        nome: 'Ana',
        idade: 19
    },
    {
        nome: 'Junior',
        idade: 24
    }],
    calcularSeguro: function () {
        //...
    }
}
console.log(carro)

carro.proprietário.endereço.logradouro = 'Rua Muleque'
console.log(carro)

carro.proprietário.endereço.numero = 22
console.log(carro)

carro.condutores[0].nome = 'Maria'
console.log(carro)

delete carro.condutores
delete carro.proprietário.endereço
delete carro.calcularSeguro
console.log(carro)