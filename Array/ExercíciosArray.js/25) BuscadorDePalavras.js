const array1 =  ["programação", "mobile", "profissional"]
const array2 =  ["javascript", "java", "c++"]

function buscador(caractere, dados) {
    const resultado = []
    for(let i of dados) {
        if(i.includes(caractere)) {
            resultado.push(i)
        }
    }
    return resultado
}

console.log(buscador('pro', array1))
console.log(buscador('jav', array2))


//modo 2

function buscarpala(carac, dados) {
    return dados.filter(palavra => palavra.includes(carac))
}

console.log(buscarpala('pro', array1))
console.log(buscarpala('jav', array2))