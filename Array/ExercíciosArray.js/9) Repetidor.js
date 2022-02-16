function repetir(elemento, quantidade) {
    let resultado = []
    for(let i = 0; i < quantidade; i++) {
        resultado.push(elemento)
    }
    return console.log(resultado)
}

repetir('código', 2)
repetir(7, 3)