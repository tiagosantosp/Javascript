const webpack = require('webpack')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',//modo 
    entry: './src/principal.js', //qual o arquivo de entrada
    output: {//saida  
        filename: 'principal.js' ,//nome do arquivo
        path: __dirname + '/public' // local do arquivo
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"estilo.css",//criar um arquivo
        })
    ],
    module: {
        rules: [{//regras
            test: /\.s?[ac]css$/,//utilizando Regex para pegar apenas que termine com .CSS
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader'// interpreta @import, url() ... 
                

            ]
        }]
    }
}