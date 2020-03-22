const http = require("http")


const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(erro) {
                    reject(erro)
                }
            })
        })
    })
}


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turma => [].concat(...turma))
    .then(alunos => alunos.map(alunos => alunos.nome))
    .then(nome => console.log(nome) )

    getTurma('D').catch(e => console.log(e.messege))