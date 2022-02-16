//ARMAZENANDO UMA FUNÇÃO EM UMA VARIÁVEL
const imrpimirSoma = function (a, b) {
    console.log(a + b)
}

imrpimirSoma(2, 3)

//ARMAZENANDO UMA FUNÇÃO ARROW (=>) EM UMA VARIÁVEL
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// RETORNO IMPLÍCITO
const subtração = (a, b) => (a - b)
console.log(subtração(10, 5))