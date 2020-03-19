//para ler arquivos devemos requisitar o modulo FileSystem(fs) do node 
const fs = require('fs')

//definir caminho do arquivo
const caminho = __dirname + '/arquivos.json'

//FORMA SINCRONA
//devemos passar qual o caminho do arquivo e o encoding do arquivo
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)//{ host: 'localhost', port: 5434, user: 'usuario', pass: '123456' }

//FORMA ASSINCRONA
//devemos passar o caminho do arquivo
//o encoding do arquivo e
//devemos passar uma função callback com 2 parametros sendo erro e o conteudo do arquivo
fs.readFile(caminho, 'UTF-8', (err, conteudo) =>{
    //o conteudo é gerado em json por isso devemos converter 
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)//localhost:5434
})


//para arquivos .json podemos apenas utilizar o require
const arquivo = require('./arquivos.json')
console.log(arquivo.db)//{ host: 'localhost', port: 5434, user: 'usuario', pass: '123456' }


//para ler a pasta atual podemos usar o readdir
//passamos primeiro o diretorio sendo __dirname o diretorio atual
//depois passamos um callback com 2 parametros
fs.readdir(__dirname, (err, conteudoPasta)=>{
    console.log(conteudoPasta)//[ 'arquivos.json', 'ler.js' ]
})


fs.open(__dirname, )