Array.prototype.filter2 = function (callback) {
    const newarray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newarray.push(this[i])
        }
    }
    return newarray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (e) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const filtro = produtos.filter2(caro).filter2(fragil)
console.log(filtro)