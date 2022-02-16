//let e const
{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)

//templateString
const produto ='iPad'
console.log(`${produto} 
é 
caro!`)

//Destructuring
const [l, e, ...tras] = 'Cod3r' //... operador 'rest'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { nome, idade } = { idade: 9, nome: 'Ana' }
console.log(idade, nome)
