//FUNÇÃO SEM RETORNO
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(6, 8)
imprimirSoma(6, )// 6 + undefined = NaN
imprimirSoma(6, 9, 11, 22, 35)// Ignora o resto

//FUNÇÃO COM RETORNO
function soma (a, b = 0) {
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2))//O "b" foi definido como = 0
console.log(soma())//O "a" não foi definido
