"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// 获取testTable对象
var testTable_1 = __importDefault(require("../mysql/entity/testTable"));
var testRouter = express_1.default.Router();
testRouter.get('/', function (req, res) {
    var testTable = new testTable_1.default();
    testTable.getAll()
        .then(function (result) {
        res.send(result);
    })
        .catch(function (err) {
        res.send(err);
    });
});
testRouter.get('/getTestById', function (req, res) {
    var id = req.query.id;
    var testTable = new testTable_1.default();
    testTable.getById(id)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (err) {
        res.send(err);
    });
});
exports.default = testRouter;
