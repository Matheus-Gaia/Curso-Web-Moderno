
function inversor(valor) {
    const tipo = typeof valor
    if (tipo == 'boolean') {
        return !valor
    } else if (tipo == 'number') {
        return -valor
    } else {
        return "booleano ou números esperado, mas o parâmetro é do tipo string"
    }
}

console.log(typeof 5)

console.log(inversor(6))
console.log(inversor('6'))
console.log(inversor(true))

