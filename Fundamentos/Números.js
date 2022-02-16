const peso1 = 1.0
const peso2 = Number('2.0')
console.log (typeof peso2)

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliação1 = 6.58552
const avaliação2 = 9.87154

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso2 + peso1)

console.log(media.toFixed(2)) //.toFixed() = número de casas decimais 
console.log(media.toString(16)) // em binário/hexadecimal
console.log(typeof media)