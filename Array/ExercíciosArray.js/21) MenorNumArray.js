function menorArray(array) {
    let menor = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor) {
            menor = array[i]
        }
    }
    return console.log(menor)
}

const array1 = [2, 1, 2, 3, 4, -3, -4]
const array2 = [20, 20, 4, 30, 45]
const array3 = [11, 22, -12, 33, 44]

menorArray(array1)
menorArray(array2)
menorArray(array3)