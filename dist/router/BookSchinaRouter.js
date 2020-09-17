"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var BookSchinaService_1 = __importDefault(require("../reptiles/service/BookSchinaService"));
var BookSchinaRouter = express_1.default.Router();
BookSchinaRouter.get('/', function (req, res) {
    new BookSchinaService_1.default().getData().then(function (result) {
        res.send(result.data);
    }).catch(function (err) {
        console.log(err);
    });
});
exports.default = BookSchinaRouter;
