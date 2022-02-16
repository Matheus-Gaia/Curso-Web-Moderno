const array1 = [0, 1, 2, 3, 4]
const array2 = [10, 70, 22, 43]

function nindp(array) {
    const novo = []
    for(let i in array) {
        if(array[i] % 2 == 0 && i % 2 == 0) {
            novo.push(array[i])
        }
    }
    return console.log(novo)
}

nindp(array1)
nindp(array2)

