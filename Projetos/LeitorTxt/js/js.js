let texto = document.getElementById('file') //pega conteudo do inputFile
let btn = document.querySelector('button')
const input = document.querySelector('input')

btn.addEventListener('click', preencherLista)

function preencherLista(e) {
    const lista = document.querySelector('.lista')
    const li = document.createElement('li')

    const del = document.createElement('button')
    del.innerHTML = '<i class="fa fa-trash"></i>'

    if (input.value !== '') {
        li.textContent = input.value
        input.value = ''
        lista.appendChild(li)
        li.appendChild(del)

    }

    del.addEventListener('click', function () {
        const parent = this.parentNode
        parent.remove()
    })

}

function lerArquivo() {
    const reader = new FileReader()


    let arquivo = texto.files[0]

    reader.onload = function (event) {


        document.querySelector('#none').innerHTML = reader.result
    }
    reader.readAsText(arquivo)

}

function converterArquivo() {
    if (!texto.files[0]) return window.alert('selecioar arquivo')
    let conteudo = document.querySelector('#none').innerHTML
    document.querySelector('#none').remove()

    let regex = /[^\n]+/g //remove linhas em branco

    let semLinhasBranco = conteudo.match(regex) //remove as linhas em branco

    let relatorio = ''

    for (item of semLinhasBranco) { //Juntando o Array de para ser uma string única
        relatorio += item.replace(/(  )+/g, '  ') //removendo as tabulações
    }
    //console.log(relatorio)

    //let inicioFim = /Emitente:.+?DATASUL/g

    //let relatorioSeparado = relatorio.match(inicioFim)
    //document.querySelector('#texto').innerHTML = relatorioSeparado[3]

    buscarDados(relatorio)
}


function buscarDados(relatorio) {


    let inicio = document.querySelectorAll('li:first-child')[0].innerText
    let fim = document.querySelectorAll('li:last-child')[0].innerText
    let sequencia = '[ ]?[A-Za-z0-9|.|,|záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ|/]{1,100}'
    let itens = document.querySelectorAll('li')

    let regex = ``
    let nomes = []

    for (item of itens) {
        regex += `(${item.innerText+sequencia}).*?`
        nomes.push(item.innerText)
    }


    let campos = new RegExp(`(${inicio+sequencia}).*?(${fim+sequencia})`, 'g')
    let campos2 = new RegExp(regex)

    documentos = relatorio.match(campos)


    let data = []
    let teste
    let obj = {}
    let num
    for (doc in documentos) {
        teste = campos2.exec(documentos[doc])
        if (teste == null) {
            teste = "  " 
        }
        for (t = 0;t < teste.length; t++){
            if (t == 0){continue}
            num = t - 1 
            try {
                obj[nomes[num]] = teste[t].replace(nomes[num] , '')                
            } catch (error) {
                obj[nomes[num]] = teste[t]
            }
        }
        data.push(obj)  
        obj = {}
    }
    console.log(data)
    
    if (document.querySelector('#excel').checked) {
        converteExcel(data)
    }
    if (document.querySelector('#csv').checked) {
        converteCSV(data)
    }
    if (document.querySelector('#txt').checked) {
        converteTxt(data)
    }
}


function converteCSV(data) {
    window.alert('FUNÇÃO NÃO IMPLEMENTADA')
}

function converteTxt(data) {
    window.alert('FUNÇÃO NÃO IMPLEMENTADA')
}



function converteExcel(data) {

    var ws = XLSX.utils.json_to_sheet(data)

    /* adicionar à pasta de trabalho */
    var wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "DADOS")

    /* gerar um arquivo XLSX */

    XLSX.writeFile(wb, "sheetjs.xlsx")

}