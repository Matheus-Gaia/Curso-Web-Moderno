function criarProduto(nome, preco, desconto) {
    desconto /=  100
    return {
        nome,
        preco: (preco - preco * desconto)
    }
}

console.log(criarProduto('Cigarro', 18, 20))
console.log(criarProduto('Cachaça', 50, 10))