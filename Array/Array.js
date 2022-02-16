console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Abia')
console.log(aprovados)

aprovados = ['BIA', 'CARLOS', 'ABIA']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Ana')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1)// ('elemento de partida', 'qts elementos excluir', 'inserir novos elementos')
console.log(aprovados)