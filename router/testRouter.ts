import express from 'express'
// 获取testTable对象
import TestTable from '../mysql/entity/testTable'
const testRouter = express.Router()


testRouter.get('/', (req: any, res: any) => {
    const testTable = new TestTable()
    testTable.getAll()
    .then((result: any[]) => {
        res.send(result)
    })
    .catch((err: Object) => {
        res.send(err)
    })
})

testRouter.get('/getTestById', (req: any, res: any) => {
    const id: number = req.query.id
    const testTable = new TestTable()
    testTable.getById(id)
    .then((result: Object) => {
        res.send(result)
    })
    .catch((err: Object) => {
        res.send(err)
    })
})


export default testRouter
