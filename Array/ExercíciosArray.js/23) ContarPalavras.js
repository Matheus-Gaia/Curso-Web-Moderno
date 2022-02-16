const frase1 = "Sou uma frase"
const frase2 = "Sou uma frase bem fudida caralho. Nenseee"

function contador(frase) {
    const palavras = frase.split(' ')
    console.log(palavras)
    return palavras.length
}

console.log(contador(frase1))
console.log(contador(frase2))