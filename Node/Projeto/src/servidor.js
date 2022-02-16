const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./BancoDeDados')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converte para json automáticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Json
})

app.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}.`)
})