const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabens</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)//para pegar informções da URL no method POST utiliza-se o params
                                //para pegar informações no method GET query
    console.log(req.body)
    resp.send('<h1>Parabens USUÁRIO ALTERADO</h1>')
})

app.listen(3003)
