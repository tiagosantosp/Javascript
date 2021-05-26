const express = require('express')
const routes = express.Router()

//pasta base
const basePath = __dirname + '/views/'
//por padrão o EJS já lê a pasta /views

const profile = {
    name: 'Tiago',
    avatar: 'https://avatars.githubusercontent.com/u/49294650?v=4',
    "monthly-budget" : 3000,
    "hours-per-day" : 5,
    "days-per-week" : 5,
    "vacation-per-year" : 4

}

//ao utilizar o metodo render ele renderiza utilizando a engine 
routes.get('/', (req, res) => res.render(basePath + 'index', {profile}))
routes.get('/job', (req, res) => res.render(basePath + 'job', {profile}))
routes.get('/job/edit', (req, res) => res.render(basePath + 'job-edit', {profile}))
routes.get('/profile', (req, res) => res.render(basePath + 'profile', {profile}))

module.exports = routes