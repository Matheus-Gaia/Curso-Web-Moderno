const frase1 = "A sorte favorece os audazes."
const frase2 = "Sou preguiçoso sim senhor."

function qtdRep(carac, string) {
    let contador = 0
    let caractere = carac.toUpperCase()
    let frase = string.toUpperCase()
    for(let i in frase) {
        if(frase[i] == caractere) {
            contador++
        }
    }
    return contador
}

console.log(qtdRep('r', frase1))
console.log(qtdRep('s', frase2))

