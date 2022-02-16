function modificador(obj, fator) {
    const novo = {...obj} // Object.assign({}, obj)
    delete novo[fator]
    return novo
}
const pessoa = {
    nome: 'Ana',
    idade: 2,
    peso: 13
}
console.log(modificador(pessoa, 'peso')) 
console.log(pessoa) 


console.log(Object.is(modificador(pessoa,'peso'), pessoa))