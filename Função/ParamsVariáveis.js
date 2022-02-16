function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma('a', 'b', 'c'))
console.log(soma(2, ' teste'))
console.log(soma(2, 4, 5, 21))