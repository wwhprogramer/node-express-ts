"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var formidable_1 = __importDefault(require("formidable"));
var fileUploadRouter = express_1.default.Router();
// let chunkList: any[] = []
fileUploadRouter.post('/upload', function (req, res) {
    var form = new formidable_1.default.IncomingForm();
    form.uploadDir = 'uploadFile';
    form.parse(req, function (err, fileIds, file) {
        if (err) {
            res.send({ err: err, success: false });
            return;
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
        console.log(file.data);
        res.send({
            fileIds: fileIds,
            name: file.data.path.split('\\')[1]
        });
    });
});
fileUploadRouter.post('/merge', function (req, res) {
});
exports.default = fileUploadRouter;
