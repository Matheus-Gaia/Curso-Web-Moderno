let stringPontuacoes1 = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliador(stringPontuacoes) {
    let pontos = stringPontuacoes.split(", ")
    let contaRecord = 0
    let contaPiores = 0
    let maior = pontos[0]
    let menor = pontos[0]

    for (let i = 0; i < pontos.lenght; i++) {
        if (parseInt(pontos[i]) > parseInt(maior)) {
            maior = pontos[i]
            contaRecord++
        } else if (parseInt(pontos[i]) < parseInt(menor)) {
            menor = pontos[i]
            contaPiores++
        }
    }
    return [contaRecord, contaPiores]
}

console.log(avaliador(stringPontuacoes1))