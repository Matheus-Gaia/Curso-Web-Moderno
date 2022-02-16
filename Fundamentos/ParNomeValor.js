// par nome/valor
const saudaçao = 'Opa' // contexto léxico 1

function exec() {
    const saudaçao = 'Faaala' // contexto léxico 2
    return saudaçao
}

//Objetos são grupos aninhados de par nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Av. penambucana',
        número: 32,
        cep: '25555-050',
    }
}

console.log(saudaçao)
console.log(exec())
console.log(cliente)

