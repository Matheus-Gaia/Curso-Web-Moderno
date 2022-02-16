const despesas1 = [
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]

const despesas2 = [
    { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]

function despesas(objeto) {
    let total = 0
    for(let i of objeto) {
        total += i.preco
    }
    return console.log(total)
}

despesas(despesas1)
despesas(despesas2)

//modo 2

function despesast(despesas) {
    return despesas.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}

console.log(despesast(despesas1))
console.log(despesast(despesas2))