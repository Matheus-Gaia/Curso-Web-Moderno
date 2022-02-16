const valores = [5.8, 9.6, 3.4, 10]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 25
console.log(valores)
console.log(valores.length)

valores.push({id: 4}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[8]
console.log(valores)

console.log(typeof valores)
console.log(valores.pop())
