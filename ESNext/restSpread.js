//operador ...rest(juntar)/...spread(espalhar)
//usar rest como parametro de função

//usar spread como objeto
const funcionario = { nome: 'Maria', salario: 1234.56}
const clone = {ativo: true, ...funcionario}
clone.nome = 'Carlos'
console.log(clone)
console.log(funcionario.nome)

//Usar spread com array
const grupoA = [' João','Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)