function contaIntervalo(numeros) {
    let dentro = 0
    let fora = 0
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] >= 10 && numeros[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    return `Há ${dentro} números entre 10 e 20. E ${fora} números fora deste intervalo.`
}
let teste = [25, 22, 23, 12, 11, 14]
console.log(contaIntervalo([12, 10, 15, 20, 1, 5, 21, 9]))
console.log(contaIntervalo(teste))