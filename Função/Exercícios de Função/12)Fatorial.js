function fatorial(numero) {
    let calcFat = 1

    for(let i = 1; i <= numero; i++) {
        calcFat *= i
    }
    return console.log(calcFat)
}

fatorial(4)
fatorial(5)
fatorial(6)
fatorial(3)
fatorial(7)
fatorial(0)
fatorial(5)

