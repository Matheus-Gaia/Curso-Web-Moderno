function filtro(numeros, qtd) {
    return numeros.filter(numero => {
        const quantidade = String(numero).length

        return qtd === quantidade
    })
}

const array = [38, 2, 365, 10, 125, 11]

console.log(filtro(array, 3))
console.log(filtro(array, 2))
console.log(filtro(array, 1))
console.log(filtro(array, 0))

//modo 2

function filtro2(numeros, qtd) {
    let resultado = []
    for(let i in numeros) {
        const quantidade = String(numeros[i]).length

        if(qtd === quantidade){
            resultado.push(numeros[i])
        }   
    }
    return resultado
}

console.log(filtro2(array, 3))
console.log(filtro2(array, 2))
console.log(filtro2(array, 1))
console.log(filtro2(array, 0))