function Resultado(notas) {
    conceitoD = []
    conceitoC = []
    conceitoB = []
    conceitoA = []
    for (let i in notas) {
        let red = notas[i].toFixed(2)
        if (red < 4.99) {
            conceitoD.push(red)
        } else if (red < 6.99) {
            conceitoC.push(red)
        } else if (red < 8.99) {
            conceitoB.push(red)
        } else if (red <= 10.0) {
            conceitoA.push(red)
        }
    }
    console.log('Notas conceito "D":')
    console.log(conceitoD)
    console.log('Notas conceito "C":')
    console.log(conceitoC)
    console.log('Notas conceito "B":')
    console.log(conceitoB)
    console.log('Notas conceito "A":')
    console.log(conceitoA)
}

Resultado([4, 3.8, 5.3, 6.8, 7.2, 8.1, 9.3, 9.9])
console.log('FIM!!!')
console.log()
console.log()

//outro

function Resultado2(notas) {
    for (let i in notas) {
        if (notas[i] < 4.99) {
            console.log(((notas[i]).toFixed(2)), ' = D')
        } else if (notas[i] < 6.99) {
            console.log(((notas[i]).toFixed(2)), ' = C')
        } else if (notas[i] < 8.99) {
            console.log(((notas[i]).toFixed(2)), ' = B')
        } else if (notas[i] <= 10.0) {
            console.log(((notas[i]).toFixed(2)), ' = A')
        }
    }
}

Resultado2([4, 3.8, 5.3, 6.8, 7.2, 8.1, 9.3, 10])