import express from 'express'
import formidable from 'formidable'

const fileUploadRouter = express.Router()
// let chunkList: any[] = []

fileUploadRouter.post('/upload', (req: any, res: any) => {
    let form = new formidable.IncomingForm()
    form.uploadDir = 'uploadFile'
    form.parse(req, (err, fileIds, file) => {
        if(err) {
            res.send({err, success: false})
            return
        }
        // let hasChunk = false
        // chunkList.forEach((chunk: any) => {
        //     if(chunk.chunkNumber === fileIds.chunkNumber) {
        //         hasChunk = true
        //     }
        // })
        // if(!hasChunk) {
        //     chunkList.push({
        //         chunkNumber: fileIds.chunkNumber,
        //         fileIds, file
        //     })
        // }
        console.log(file.data)
        res.send({
            fileIds, name: file.data.path.split('\\')[1]
        })
    })
})

fileUploadRouter.post('/merge', (req: any, res: any) => {
    
})

export default fileUploadRouter