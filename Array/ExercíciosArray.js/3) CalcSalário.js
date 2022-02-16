function calcSalario (horas, valor) {
    let salario = (horas * valor).toFixed(2)
    return console.log(`Salário igual a R$${salario}!`)
}

calcSalario(132, 12.67)
