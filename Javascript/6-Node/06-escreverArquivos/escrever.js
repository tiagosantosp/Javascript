const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1200,
    desconto: 0.15
}

//primeiro passamos o diretorio e o nome do arquivo
//o conteudo do arquivo
//e uma callback caso haja um erro
fs.writeFile(__dirname + '/novoArquivo.json',JSON.stringify(produto), erro =>{
    console.log(erro || 'Arquivo Salvo!')
 })