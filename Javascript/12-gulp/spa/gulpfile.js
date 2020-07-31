const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appCSS, appHTML, appIMG, appJS } = require('./src/gulpTasks/app')
const { depsCSS, depsFonts } = require('./src/gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./src/gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)

