const { series, dest } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')//concatenar o codigo
const uglify = require('gulp-uglify')//mimifica o codigo
const babel = require('gulp-babel')//dar compatibilidade para o codigo

function padrao(callback){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,//remove comentarios
            presets: ["env"],//pega tudo do mais novo para converter 
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(dest('build'))

    return callback()
}

exports.default = series(padrao)