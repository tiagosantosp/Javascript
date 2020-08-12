let texto = document.getElementById('file') //pega conteudo do inputFile


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


    let regex = /[^\n]+/g //remove linhas em branco

    let semLinhasBranco = conteudo.match(regex) //remove as linhas em branco

    let relatorio = ''

    for (item of semLinhasBranco) { //Juntando o Array de para ser uma string única
        relatorio += item.replace(/( )+/g, ' ') //removendo as tabulações
    }
    //console.log(relatorio)

    //let inicioFim = /Emitente:.+?DATASUL/g

    //let relatorioSeparado = relatorio.match(inicioFim)
    //document.querySelector('#texto').innerHTML = relatorioSeparado[3]

    buscarDados(relatorio)
}


async function buscarDados(relatorio) {


    let txt1 = document.querySelector('#txt1').value
    let txt2 = document.querySelector('#txt2').value
    let txt3 = document.querySelector('#txt3').value
    let n1 = document.querySelector('#n1').value
    let n2 = document.querySelector('#n2').value
    let n3 = document.querySelector('#n3').value


    let campo1 = new RegExp(`${txt1}[ ]?[A-Za-z0-9|.|,|záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ|/]{1,${n1}}`, 'g')
    let campo2 = new RegExp(`${txt2}[ ]?[A-Za-z0-9|.|,|záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ|/]{1,${n2}}`, 'g')
    let campo3 = new RegExp(`${txt3}[ ]?[A-Za-z0-9|.|,|záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ||/]{1,${n3}}`, 'g')
    console.log(txt1, txt2, txt3)

    let dadosCampo1, dadosCampo2, dadosCampo3

    dadosCampo1 = relatorio.match(campo1)
    dadosCampo2 = relatorio.match(campo2)
    dadosCampo3 = relatorio.match(campo3)


    let data = []

    for (let index = 0; index < dadosCampo1.length; index++) {
        try {
            
            data[index] = {
                [txt1]: dadosCampo1[index].replace(`${txt1}`, ''),
                [txt2]: dadosCampo2[index].replace(`${txt2}`, ''),
                [txt3]: dadosCampo3[index].replace(`${txt3}`, '')
            }
        } catch (error) {
            data[index] = {
                [txt1]: `ERRO NA POSICÃO ${index}`,
                [txt2]: `ERRO NA POSICÃO ${index}`,
                [txt3]: `ERRO NA POSICÃO ${index}`
            }
        }    
    }


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
