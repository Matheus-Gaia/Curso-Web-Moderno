function vAnuidade(mes, valor) {
    let atraso = mes - 1
    let vJuros = (valor * (1 + (5 / 100)) ** atraso)
    if (mes > 0 && mes < 13) {
        return console.log(`O valor do mês ${mes} a ser pago é R$${vJuros.toFixed(2)}`)
    } else {
        return console.log('Mês inválido!')
    }
}

vAnuidade(5, 100)
vAnuidade(5, 100)