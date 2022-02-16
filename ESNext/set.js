//Não aceita repetição / Não é indexado

const times = new Set()
times.add('Fluminense')
times.add('Vasco').add('Botafogo').add('São Paulo')
times.add('Corinthians')
times.add('Fluminense')

console.log(times)
console.log(times.size)
console.log(times.has('Fluminense'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Júlia', 'Lucas', 'Raquel']
const nomesSet = new Set(nomes)

console.log(nomes)
console.log(nomesSet)