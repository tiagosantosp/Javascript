const bodyParser = require("body-parser")
const express = require("express")

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))//se for formulario sera executado esse
app.use(bodyParser.json())// se for JSON sera executado esse

const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err =>{
        if(err) {
            return res.end("Ocorreu um erro")
        }

        res.end("CONCLUIDO COM SUCESO")
    })
})

app.post('/formulario', (req, res) =>{
    res.send({
        ...req.body,
        id: 1
    })
})

//Formas de receber informações da pagina
//req.body
//req.query na url (?num=2)
//req.params na url (/:numero) aceitaria qualquer numero

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado : par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))
