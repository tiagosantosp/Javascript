const gulp = require('gulp')
const webserver = require('gulp-webserver')//criar servidor
const watch = require('gulp-watch')


function servidor () {
    return gulp.src('build')
        .pipe(webserver({
            port:8080,//porta
            open: true,//ao abrir
            livereload: true//recarregar automatico 
        }))
}

function monitorarArquivos () {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/assets/**/*.*', () => gulp.series('appIMG')())
    
    return 
}

module.exports = {
    monitorarArquivos,
    servidor
}