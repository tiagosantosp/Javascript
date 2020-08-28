const cors = require('cors')// Cors permite que o frontend acesse as informações do backend
const express = require('express')
const app = express()


// app.use(cors())//instancia do cors para liberar acesso do front

//ao acessar a porta do servidor será direcionado para este local
app.get('/', async (req, res) =>{
    try {
        const dados = [{
            "nome": "tiago",
            "preco": 10,
            "desconto": 0.15
        },
        {
            "nome": "dani",
            "preco": 100,
            "desconto": 0.15
        },
        {
            "nome": "maju",
            "preco": 20,
            "desconto": 0.15
        }
        ]
        return res.json(dados)//retornando os dados  para o frontend

    } catch (error) {
        console.log(error)
    }
})

app.listen('4567')//numero da porta