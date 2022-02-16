function aumento(plano, salario) {
    switch (plano) {
        case 'a':
            return console.log(`R$${(salario * 1.1).toFixed(2)}`)
            break
        case 'b':
            return console.log(`R$${(salario * 1.15).toFixed(2)}`)
            break
        case 'c':
            return console.log(`R$${(salario * 1.2).toFixed(2)}`)
            break
        default:
            return console.log('Plano Inválido')
    }
}

aumento('a', 1100)
aumento('b', 1200)
aumento('c', 1300)
aumento('d', 1300)

