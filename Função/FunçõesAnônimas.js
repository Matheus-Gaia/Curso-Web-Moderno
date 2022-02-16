const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (x, y, operação = soma) {
    console.log(operação(x, y))
}

imprimirResultado(2, 3)
imprimirResultado(2, 8, soma)
imprimirResultado(2, 8, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {//  falar() { console.log('Olá) }
        console.log('Olá')
    }
}
new pessoa.falar