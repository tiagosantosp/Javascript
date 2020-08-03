const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/principal.js', //qual o arquivo de entrada
    output: {//saida  
        filename: 'principal.js' ,//nome do arquivo
        path: __dirname + '/public' // local do arquivo
    },
    devServer: {
         contentBase: "./public",
         port: 9000
    },
    optimization:{
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:"estilo.css",//criar um arquivo
        }),
        new TerserPlugin ({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        })
    ],
    module: {
        rules: [{//regras
            test: /\.s?[ac]ss$/,//utilizando Regex para pegar apenas que termine com .CSS
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader',// interpreta @import, url() ... 
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/, 
            use: ['file-loader']
        }]
    }
}