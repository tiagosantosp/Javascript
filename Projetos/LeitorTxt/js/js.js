let texto = document.getElementById('file') 
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
    const selecionar = document.querySelector('#lbl')
    selecionar.innerText = texto.files[0].name
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
        relatorio += item.replace(/(  ){2,}/g, '  ') //removendo as tabulações
    }
    

    buscarDados(relatorio)
}


function buscarDados(relatorio) {


    let inicio = document.querySelectorAll('li:first-child')[0].innerText
    let fim = document.querySelectorAll('li:last-child')[0].innerText
    let sequencia = '([ ]?[A-Za-z0-9|.|,|záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ|/]{1,100})+'
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
        num = 0
        for (t = 0; t < teste.length; t++) {
            if (t % 2 == 0) {
                continue
            }
            
            try {
                obj[nomes[num]] = teste[t].replace(nomes[num], '')
                
                num += 1
                
            } catch (error) {
                obj[nomes[num]] = teste[t]
                num += 1
            }
        }
        data.push(obj)
        obj = {}
    }
    

    if (document.querySelector('#excel').checked) {
        converteExcel(data)
    }
    if (document.querySelector('#csv').checked) {
        convertToCSV(data)
    }
    if (document.querySelector('#txt').checked) {
        converteJSON(data)
    }
}



function converteExcel(data) {

    var ws = XLSX.utils.json_to_sheet(data)

    /* adicionar à pasta de trabalho */
    var wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "DADOS")

    /* gerar um arquivo XLSX */

    XLSX.writeFile(wb, "dados.xlsx")
    window.location.reload()
    
}





function convertToCSV(arr) {
    const array = [Object.keys(arr[0])].concat(arr)
    let text = array.map(it => {
        return Object.values(it).toString()
    }).join('\n')
    let blob = new Blob([text], {type: "text/csv;charset=UTF-8"})
    saveAs(blob, "dados.csv")
    window.location.reload()
}


function converteJSON(data) {
    let obj = JSON.stringify(data)
    
    
    let blob = new Blob([obj], {type: "data:application/json;charset=UTF-8"})
    saveAs(blob, "dados.json")
    window.location.reload()
}