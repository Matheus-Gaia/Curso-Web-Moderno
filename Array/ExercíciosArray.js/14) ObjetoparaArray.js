function objtoarray(objeto) {
    return console.log(Object.entries(objeto))
}

const pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13
}

objtoarray(pessoa)

//2 resolução

function objParaArray(objeto) {
    const nArray = []
    for(let chaves in objeto){
        nArray.push([chaves, objeto[chaves]])
    }
    return console.log(nArray)
}

objParaArray(pessoa)

