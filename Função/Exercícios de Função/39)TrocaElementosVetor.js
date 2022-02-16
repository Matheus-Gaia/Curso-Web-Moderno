//Usando let auxiliar
function troca(vetor1, vetor2) {
    let troca = 0
    if(vetor1.length == vetor2.length) {
        for(let i in vetor1) {
            troca = vetor1[i]
            vetor1[i] = vetor2[i]
            vetor2[i] = troca
        }
        console.log(vetor1, vetor2)
    } else {
        return console.log(`Vetores de tamanhos diferentes.`)
    }
    
    
}
troca([1, 2, 3,], [4, 'Abc', 6])


