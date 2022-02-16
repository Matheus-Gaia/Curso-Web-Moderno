function sm(array) {
    let maior = array[0]
    let segundom = array[0]
    let arrayaux = [...array]
    for (let i in array) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }
    for(let i in arrayaux) {
        if(maior === arrayaux[i]) {
            delete arrayaux[i]
        }
    }
    for (let i in arrayaux) {
        if (arrayaux[i] > segundom) {
            segundom = arrayaux[i]
        }
    }
    
    return segundom
}

const array = [12, 16,  1, 5, 15, 28, 35, 127, 88]
console.log(sm(array))