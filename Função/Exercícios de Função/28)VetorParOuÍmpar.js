function PouI(numeros) {
    let par = 0
    let impar = 0
    for (let i in numeros) {
        if (numeros[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    return `${par} par(es) e ${impar} ímpar(es).`
}
let teste = [25, -22, -23, -12, -11, -14]
console.log(PouI(teste))
console.log(PouI([22, 24, 26, 1]))
console.log(PouI([22]))
console.log(PouI([21, 1, 3, 5, 7]))

