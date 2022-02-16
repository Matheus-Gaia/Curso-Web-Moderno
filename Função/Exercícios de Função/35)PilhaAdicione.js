pilha = [1, 2, 3, 4, 5]
adicione = [6, 7, 8, 9, 10]

function juntador(vet1, vet2) {
    for(let i in vet2) {
        vet1.push(vet2[i])
    }
    return vet1
}

console.log(juntador(pilha, adicione))
