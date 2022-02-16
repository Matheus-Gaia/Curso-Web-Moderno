const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento. Diferente do delete, o indice também é retirado.
console.log(pilotos)
console.log(pilotos.length)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento.
console.log(pilotos)
console.log(pilotos[0])

pilotos.unshift('Hamilton') // Add elemento na primeira posição.
console.log(pilotos)
console.log(pilotos[0])

//'splice' pode adicionar e remover elementos

//  adcionar
pilotos.splice(2, 0, 'Bottas', 'Massa')//('partindo do 2', 'exclui 0', 'add Bottas', 'add Massa' )
console.log(pilotos)

//  remover
pilotos.splice(3, 1)//('partindo do 3', 'retirar 1 elemento')
console.log(pilotos)


//Slice => retira um pedaço do array e retorna um novo array.

const algunsPilotos = pilotos.slice(2)//novo array a partir do índice
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)//novo array do índice 1 até 4(o 4 não entra no novo array)
console.log(algunsPilotos2)