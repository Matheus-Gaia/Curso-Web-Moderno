const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com Callback
const nostasBaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(nostasBaixas2)

const notinhas = notas => notas < 7
const notasBaixas3 = notas.filter(notinhas)
console.log(notasBaixas3)