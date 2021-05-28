const express = require('express')
const routes = express.Router()

//pasta base
const basePath = __dirname + '/views/'
//por padrão o EJS já lê a pasta /views

const Profile = {
    data: {
        name: 'Tiago',
        avatar: 'https://avatars.githubusercontent.com/u/49294650?v=4',
        "monthly-budget": 3000,
        "hours-per-day": 5,
        "days-per-week": 5,
        "vacation-per-year": 4,
        "value-hour": 75
    },
    controllers: {
        index(req, res) {
            return res.render(basePath + 'profile', {profile: Profile.data})
        },
        update () {

        }
    }, 

}

const Job = {
    data: [{
            id: 1,
            name: "Pizzaria Guloso",
            'daily-hours': 2,
            'total-hours': 1,
            createdAt: Date.now()
        },
        {
            id: 2,
            name: "OneTwo Project",
            'daily-hours': 3,
            'total-hours': 47,
            createdAt: Date.now()
        }
    ],
    controllers: {
        index(req, res) {

            const updatedJobs = Job.data.map((job) => {
                const remaining = Job.services.ramainingDays(job)
                const status = remaining <= 0 ? 'done' : 'progress'

                return {
                    ...job,
                    remaining,
                    status,
                    budget: Profile.data["value-hour"] * job["total-hours"]
                }
            })

            return res.render(basePath + 'index', {
                jobs: updatedJobs
            })

        },
        save(req, res) {

            const lastId = Job.data[Job.data.length - 1]?.id || 1

            Job.data.push({
                id: lastId + 1,
                name: req.body.name,
                'daily-hours': req.body["daily-hours"],
                'total-hours': req.body["total-hours"],
                createdAt: Date.now()
            })
            return res.redirect('/')
        },
        create(req, res) {
            return res.render(basePath + "job")
        }


    },
    services: {
        ramainingDays(job) {
            const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

            const createdDate = new Date(job.createdAt)
            const dueDay = createdDate.getDate() + Number(remainingDays)
            const dueDate = createdDate.setDate(dueDay)

            const timeDiffInMs = dueDate - Date.now()

            const dayInMs = 1000 * 60 * 60 * 24
            const dayDiff = Math.floor(timeDiffInMs / dayInMs)

            return dayDiff
        }
    }
}


//ao utilizar o metodo render ele renderiza utilizando a engine 
routes.get('/', Job.controllers.index)
routes.get('/job', Job.controllers.create)
routes.post('/job', Job.controllers.save)
routes.get('/job/edit', (req, res) => res.render(basePath + 'job-edit', ))
routes.get('/profile', Profile.controllers.index )
routes.get('/profile', Profile.controllers.update )

module.exports = routes