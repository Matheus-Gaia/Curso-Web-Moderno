function calc(a, o, b) {
    switch (o) {
        case '+':
            console.log(a + b)
            break
        case '-':
            console.log(a - b)
            break
        case '*':
            console.log(a * b)
            break
        case '/':
            console.log(a / b)
            break
        default:
            console.log('Operação inválida!')
    }
}

calc(4, '+', 13)
calc(4, '-', 11)
calc(4, '*', 11)
calc(4, '*', 2)
calc(9, '/', 2)
calc(250, '/', 2)
calc(9, 'a', 2)