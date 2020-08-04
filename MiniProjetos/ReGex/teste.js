const texto = require('./re0501')//requisita o arquivo

let regex = /[^\n]+/g//remove linhas em branco
let regex2 = /Emitente:.+?DATASUL/g//separa cada documento

let semLinhas = texto.match(regex) //remove as linhas

let textoJunto = ''

for (item of semLinhas) {//Juntando o Array de para ser uma string única
    textoJunto += item
}

let semTabulacao = textoJunto.replace(/( )+/g, ' ')//remove tabulações 

textoJunto = semTabulacao.match(regex2)


let data = []

for (let dados = 0; dados < textoJunto.length; dados++){
    data[dados] = {
        emitente: textoJunto[dados].match(/Emitente:\d{1,6}/g)[0],
        Estabelecimento: textoJunto[dados].match(/Estabelecimento:\d{0,3}/g)[0],
        Usuario: textoJunto[dados].match(/Usuário:\w{1,20}/g),
        BaseICMS: textoJunto[dados].match(/Base Cálculo ICMS: [\d|,|.]{1,10}/g)
    }
}

console.log(data)

//data.forEach(registro => console.log(registro.emitente))