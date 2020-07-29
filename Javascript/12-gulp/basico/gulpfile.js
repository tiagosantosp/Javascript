//importando o gulp
const gulp = require('gulp')
//const { series} = require('gulp')

//pegando gulp series para executar comandos em serie
const series = gulp.series

//executa funções em paralelo
const parallel = gulp.parallel

//fazendo uma funçao para o gulp executar
function copiar(callback) {

    //src é para buscar o arquivo
    //pipe é o que voce vai fazer
    //dest é qual o destino

    //gulp.src('pastaA/**/*.txt')
    //pegar todos arquivos txt dentro da pasta

    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt' ]).pipe(gulp.dest('pastaB'))
    return callback()
}


const antes1 = callback => {
    console.log('tarefa antes 1')
    return callback()
}

const antes2 = callback => {
    console.log('tarefa antes 2')
    return callback()
}

const fim = callback => {
    console.log('tarefa fim')
    return callback()
}


 
//é necessario que o gulp esteja em uma task default
module.exports.default = series(parallel(antes1, antes2), copiar, fim)