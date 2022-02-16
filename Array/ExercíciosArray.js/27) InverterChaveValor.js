const pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13
}

function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}

console.log(inverter(pessoa))