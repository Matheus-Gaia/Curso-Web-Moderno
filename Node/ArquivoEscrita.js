const fs = require('fs')

const produto = {
    nome: 'Smartphone',
    preco: 1999.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/ArquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})