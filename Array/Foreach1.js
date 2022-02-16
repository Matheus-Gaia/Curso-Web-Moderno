//callback sempre passa nome, indice e o array

const aprovados = ['Abel', 'Carla', 'Dario', 'Lucas']
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(`${indice + 1})`, nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
console.log()
console.log()
console.log()

for(let i in aprovados) {
    console.log(aprovados[i])
}