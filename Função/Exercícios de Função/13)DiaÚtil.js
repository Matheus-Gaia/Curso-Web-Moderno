function diaU (dia) {
    switch (dia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Vai trabalhar, vagabundo!')
        break
    
    case 1:
    case 7:
        console.log('É feriado, porra!')
        break
    default:
        console.log('Dia inválido!')
        break

 }
}

diaU(2)
diaU(6)
diaU(5)
diaU(7)
diaU(1)
diaU(12)