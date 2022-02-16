const Resultado = function (nota) {
    if(nota > 7) {
        console.log('APROVADO!!!')
        console.log('PARABÉNS!!!')
        console.log(' ')
        console.log(' ')
    } else {
        console.log('REPROVADO!!!')
        console.log('SE FUDEU!!!')
    }
}

Resultado(8)
Resultado(6)
Resultado('EPA!!!') //CUIDADO!!!