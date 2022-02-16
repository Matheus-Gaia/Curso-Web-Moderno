const pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))//array de chave / valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,// listar
    writable: false, //não muda o valor
    value: '01/01/2020'
})
pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ES2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2,)//O primeiro elemento recebe as chaves e valores dos outros elementos.
console.log(obj)                        //Caso tenha chave igual, o valor do elemento posterior prevalecerá.


Object.freeze(obj)
obj.c = 123
console.log(obj)