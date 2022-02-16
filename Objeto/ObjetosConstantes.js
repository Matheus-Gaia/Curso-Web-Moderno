// ''pessoa'' aponta para o endereço de memória '123' => o dado não é constate, mas sim o endereço de memória.
const pessoa = { nome:'João' }
pessoa.nome = 'Carlos'
console.log(pessoa)

// aqui vc está apontando pessoa para um novo endereço de memória e isso causará erro, pois pessoa é uma ''const''.
//pessoa = { nome: 'ana'}

Object.freeze(pessoa) // congela o objeto (dado) e ele fica imutável.
pessoa.nome = 'Maria'
console.log(pessoa)


//''const'' congela o endereço de memória aonde está o dado.
//''Object.freeze()'' congela o dado.