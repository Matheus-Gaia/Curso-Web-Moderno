function pa(nTermos, n1, Razao) {
    let progA = []
    let soma = 0
    for(let i = 0; i < nTermos; i++) {
        soma += n1
        progA.push(n1)
        n1 += Razao
    }
    console.log(progA)
    return `A soma dos elementos é: ${soma}.`
}
console.log(pa(3, 0, 5))
console.log(pa(5, 1, 3))

function pg(nTermos, n1, Razao) {
    let progG = []
    let soma = 0
    for(let i = 0; i < nTermos; i++) {
        soma += n1
        progG.push(n1)
        n1 *= Razao
    }
    console.log(progG)
    return `A soma dos elementos é: ${soma}.`
}

console.log(pg(5, 2, 3))