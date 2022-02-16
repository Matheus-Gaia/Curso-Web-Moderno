function contaNeg(numeros) {
    neg = 0
    for(let i in numeros) {
        if(numeros[i] < 0) {
            neg++
        }
    }
    return console.log(`A quantidade de números negativos é: ${neg}.`)
}

contaNeg([-3, 4, 5, 8, -1, -6])
teste = [25, -22, -23, -12, -11, -14]
contaNeg(teste)