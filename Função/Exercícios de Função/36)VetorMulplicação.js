function vetMult(vetor, numero) {
    let NovoVet = []
    for(let i in vetor) {
        vetor[i] *= numero
        NovoVet.push(vetor[i])
        
    }
    console.log(NovoVet)
}

function vetMult2(vetor, numero) {
    let NovoVet = []
    for(let i in vetor) {
        if(vetor[i] > 5) { 
        vetor[i] *= numero
        NovoVet.push(vetor[i])
        } else {
            NovoVet.push(vetor[i])
        }
        
    }
    console.log(NovoVet)
}

vetMult([2, 3, 8], 3)
vetMult2([2, 3, 8], 3)
