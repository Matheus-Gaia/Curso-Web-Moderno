function aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Início', 123)
const aula2 = new aula('Fim', 456)
console.log(aula1, aula2)

//simulando o ''New''

function novo(f, ...params) {// (...) concatena tudo em um array
    const obj = {}
    obj.__proto__ = f.prototype 
    f.apply(obj, params)
    return obj
}

const aula3 = novo(aula, 'Início', 123)
const aula4 = novo(aula, 'Fim', 456)
console.log(aula3, aula4)