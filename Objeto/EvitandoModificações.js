//Object.preventExtensions = não adiciona novos atributos, porém pode deletá-los e modificá-los
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: '1.99', tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descrição = 'Branca'
delete produto.tag
console.log(produto)

//Object.seal = não aficiona nem deleta atributos, mas pode modificá-los
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
pessoa.idade = 27
delete pessoa.nome
console.log(pessoa)

//Object.freeze = selado + valores constantes