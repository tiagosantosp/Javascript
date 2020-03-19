const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')



//pegar a mulher chinesa com o menor salário

const china = func => func.pais === 'China'
const mulher = func => func.genero === 'F'
const salario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
    .filter(china)
    .filter(mulher)
    .reduce(salario)
    console.log(func)
})

