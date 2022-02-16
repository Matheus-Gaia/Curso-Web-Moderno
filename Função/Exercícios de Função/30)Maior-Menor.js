function maiorMenor(numeros) {
    let maior = numeros[0]
    let menor = numeros[0]
    for (let i in numeros) {

        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }

    }
    return `O maior número é ${maior} e o menor é ${menor}.`
}

let teste = [25, 22, 23, 12, 11, 14]
let teste1 = [25, 22, 23, 12, 11, 14, -3]


console.log(maiorMenor(teste))
console.log(maiorMenor(teste1))
console.log(maiorMenor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(maiorMenor([-1, -2, -4, -7]))

