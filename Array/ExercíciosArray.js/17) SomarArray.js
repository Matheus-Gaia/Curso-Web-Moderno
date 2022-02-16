function somador(array) {
    let resultado = 0
    for(let i in array) {
        resultado += array[i]
    }
    return console.log(resultado)
}

const array1 = [1, 2, 3, 4]
const array2 = [20, 20, 30, 45]
const array3 = [11, 22, 33, 44]

somador(array1)
somador(array2)
somador(array3)