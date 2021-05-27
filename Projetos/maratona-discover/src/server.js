const express = require('express')
const app = express()
const routes = require('./routes')

// setando o backend para utilizar o EJS
app.set('view engine', 'ejs')

//ao colocar os arquivos estaticos na pasta public o express consegue acessar de qualquer lugar da aplicação
app.use(express.static("public"))

//habilitar o corpo da requisição
app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(3000, () => console.log("RODANDO..."))