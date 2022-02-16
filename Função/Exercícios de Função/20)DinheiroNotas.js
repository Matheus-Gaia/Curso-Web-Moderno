function conNotas(valor) {
    let qtd100 = 0
    let qtd50 = 0
    let qtd10 = 0
    let qtd5 = 0
    let qtd1 = 0

    if (valor >= 100) {
        qtd100 = valor / 100
        valor = valor % 100
    }
    if (valor >= 50) {
        qtd50 = valor / 50
        valor = valor % 50
    }
    if (valor >= 10) {
        qtd10 = valor / 10
        valor = valor % 10
    }
    if (valor >= 5) {
        qtd5 = valor / 5
        valor = valor % 5
    }
    if (valor >= 1) {
        qtd1 = valor / 1
        valor = valor % 1
    }


    if (qtd100 > 0) {
        console.log(Math.floor(qtd100), ' notas de R$100.')
    }
    if (qtd50 > 0) {
        console.log(Math.floor(qtd50), ' notas de R$50.')
    }
    if (qtd10 > 0) {
        console.log(Math.floor(qtd10), ' notas de R$10.')
    }
    if (qtd5 > 0) {
        console.log(Math.floor(qtd5), ' notas de R$5.')
    }
    if (qtd1 > 0) {
        console.log(Math.floor(qtd1), ' notas de R$1.')
    }
 console.log('')
}


conNotas(18)
conNotas(157)
conNotas(1259)
