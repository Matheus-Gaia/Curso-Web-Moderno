
function pedido(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return `O(s) ${quantidade} Cachorro(s)-quente(s) saem por: R$${(quantidade * 3).toFixed(2)}`
            break
        case 200:
            return `O(s) ${quantidade} Hambúguer Simples saem por: R$${(quantidade * 4).toFixed(2)}`
            break
        case 300:
            return `O(s) ${quantidade} Cheeseburger(s) saem por: R$${(quantidade * 5.50).toFixed(2)}`
            break
        case 400:
            return `O(s) ${quantidade} Bauru(s) saem por: R$${(quantidade * 7.50).toFixed(2)}`
            break
        case 500:
            return `O(s) ${quantidade} Refrigerante(s) saem por: R$${(quantidade * 3.50).toFixed(2)}`
            break
        case 600:
            return `O(s) ${quantidade} Suco(s) saem por: R$${(quantidade * 2.80).toFixed(2)}`
            break
        default:
            return 'Código inválido. O produto não existe'

    }
}
console.log(pedido(100, 2))
console.log(pedido(200, 5))
console.log(pedido(300, 4))
console.log(pedido(400, 3))
console.log(pedido(500, 1))
console.log(pedido(600, 4))
console.log(pedido(700, 4))

