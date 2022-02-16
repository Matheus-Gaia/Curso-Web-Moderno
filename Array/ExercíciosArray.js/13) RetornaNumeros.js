const cur = [7, 14, "olá", -100, "aplicativo", 16, '19', 22]

function filtro(array) {
    const novoArray = []
    for(let i in array) {
        if(typeof array[i] === 'number') {
            novoArray.push(array[i])
        }
    }
    return novoArray
}

console.log(filtro(cur))


console.log(cur.filter(e => typeof e === 'number'))