function calcMedia(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    resultado /= array.length
    return console.log(resultado)
}

const array1 = [1, 2, 3, 4]
const array2 = [20, 20, 30, 45]
const array3 = [11, 22, 33, 44]

calcMedia(array1)
calcMedia(array2)
calcMedia(array3)


function med(array) {
    let media = array.reduce((acumulador, atual) => acumulador + atual)
    let res = media / array.length
    return res
}

console.log(med(array1))
console.log(med(array2))
console.log(med(array3))