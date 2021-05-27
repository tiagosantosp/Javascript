const express = require('express')
const routes = express.Router()

//pasta base
const basePath = __dirname + '/views/'
//por padrão o EJS já lê a pasta /views

const profile = {
    name: 'Tiago',
    avatar: 'https://https://github.com/tiagosantosp.png',
    "monthly-budget" : 3000,
    "hours-per-day" : 5,
    "days-per-week" : 5,
    "vacation-per-year" : 4
}

jobs = [
    {
        id:  1,
        name: "Pizzaria Guloso",
        'daily-hours': 2, 
        'total-hours': 60,
        createdAt :  Date.now()
    },
    {
        id:  2,
        name: "OneTwo Project",
        'daily-hours': 3, 
        'total-hours': 47,
        createdAt :  Date.now()
    }
]

//ao utilizar o metodo render ele renderiza utilizando a engine 
routes.get('/', (req, res) => res.render(basePath + 'index', {jobs}))

routes.get('/job', (req, res) => res.render(basePath + 'job', ))

routes.post('/job', (req, res) => {
  
    const lastId = jobs[jobs.length - 1]?.id || 1

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        'daily-hours': req.body["daily-hours"], 
        'total-hours': req.body["total-hours"],
        createdAt :  Date.now()
    })
    return res.redirect('/')
})

routes.get('/job/edit', (req, res) => res.render(basePath + 'job-edit', ))

routes.get('/profile', (req, res) => res.render(basePath + 'profile', {profile}))

module.exports = routes