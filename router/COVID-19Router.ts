import express from 'express'
import COVID19Service from '../reptiles/service/COVID-19Service'

const COVID19Router = express.Router()

COVID19Router.get('/', (req: any, res: any) => {
    new COVID19Service().getData().then((result: any) => {
        res.send(result.data)
    }).catch((err: any) => {
        console.log(err)
    })
})


export default COVID19Router

