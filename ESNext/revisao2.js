//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 4))

//Arrow Function (this) ; é diferente de um func normal, aonde o this aponta para global
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//Parâmentros 'default'
function log(texto = 'node') {
    console.log(texto)
}
log()
log('Sou mais Forte!!!')

//Operador 'rest'
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5))