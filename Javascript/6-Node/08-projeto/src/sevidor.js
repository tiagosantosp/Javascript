//porta é qual local esta essa aplicacao 
const porta = 3003

const express = require('express')
const app = express() 

const bodyparse = require('body-parser')

app.use(bodyparse.urlencoded({extended: true}))

//importando os metodos do meu arquivo bancoDeDados
const banco = require('./bancoDeDados')


app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos())
})


app.get('/produtos/:id', (req, res, next) =>{
    res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = banco.SalvarProdutos({
        nome: req.body.name,
        preco: req.body.preco
    })

    res.send(produto)
})

app.listen(porta, () => {
    console.log(`servidor executando teste na porta ${porta}`)
})