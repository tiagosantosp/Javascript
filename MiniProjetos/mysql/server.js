const cors = require('cors')// Cors permite que o frontend acesse as informações do backend
const express = require('express')
const app = express()
const axios = require('axios')//utilizado para fazer requisições Ajax



const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testenode' 
})


connection.connect(function(err){
    if (err){
        console.error('ERROR::: ' + err.stack)
        return
    }
    console.log('conectado a trhead: ' + connection.threadId)
})

connection.query('SELECT * FROM pessoa', (err, result, fields)=>{
    console.log(result[0].nome)
    
})







app.use(cors())//instancia do cors para liberar acesso do front

//ao acessar a porta do servidor será direcionado para este local
app.get('/', async (req, res) =>{
    try {
        //acessando a API do jsonPlaceholder
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        
        return res.json(data)//retornando os dados da API para o frontend

    } catch (error) {
        console.log(error)
    }

    
    
})

app.listen('4567')//numero da porta