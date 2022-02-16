function resultado(nota) {
    if (nota <= 37) {
        return console.log('Nota: ', nota,),
            console.log('REPROVADO!!!')
    } else if (nota > 37 && (nota % 5 > 2)) {
        nota = (5 - (nota % 5)) + nota
        return console.log('Nota: ', nota,),
            console.log('APROVADO!!!')
    }else {
        console.log('Nota: ', nota,),
            console.log('APROVADO!!!')
    }
}




resultado(60)
resultado(95)
resultado(40)
resultado(39)
resultado(38)
resultado(37)
resultado(36)
resultado(35)
resultado(34)
