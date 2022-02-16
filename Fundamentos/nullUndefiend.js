let valor // não definiram
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!!!

const produto = {}
console.log(produto.preço) // O preço não foi definido

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // Evite atribuir undefined
console.log(!!produto.preço)
console.log(produto)

produto.preço = null // Sem preço
console.log(!!produto.preço)
console.log(produto)

