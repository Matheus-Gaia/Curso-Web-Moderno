const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...(processa dentro do event loop) não é recomendado
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
     const config = JSON.parse(conteudo)
     console.log(`${config.db.host}: ${config.db.port}`)
}) 

//lendo json diretamente
const config = require('./Arquivo.json')
console.log(config.db)

//lendo pasta (__dirname = diretório de pasta atual)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta')
    console.log(arquivos)
})