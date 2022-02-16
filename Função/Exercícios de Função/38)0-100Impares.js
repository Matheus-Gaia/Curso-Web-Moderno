function impar(inicio = 0, fim = 100) {
    let troca = 0
    if(inicio > fim) {
        troca = fim
        fim = inicio
        inicio = troca
    }
    
    
    for(inicio; inicio <= fim; inicio++)
        if(inicio % 2 != 0) {
    console.log(inicio)
        }
}
impar(2, 18)