const notas = [7.5, 6.4, 8.6, 6.7, 9.3]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 22,
    peso: '80kg'
}

for (let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}
