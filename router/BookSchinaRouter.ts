import express from 'express'
import BookSchinaService from '../reptiles/service/BookSchinaService'

const BookSchinaRouter = express.Router()

BookSchinaRouter.get('/', (req: any, res: any) => {
    new BookSchinaService().getData().then((result: any) => {
        res.send(result.data)
    }).catch((err: any) => {
        console.log(err)
    })
})


export default BookSchinaRouter

