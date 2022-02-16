const alunos = [
    { nome: 'João', nota: 7.3, bolsita: false },
    { nome: 'Maria', nota: 9.2, bolsita: true },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Ana', nota: 8.7, bolsita: true },
]

//Desafio 1: Todos os alunos são bolsistas?
const bolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(alunos.map(a => a.bolsita).reduce(bolsistas))

//Desafio 2: Algum aluno é bolsista?
const algum = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsita).reduce(algum))