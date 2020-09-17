"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var COVID_19Service_1 = __importDefault(require("../reptiles/service/COVID-19Service"));
var COVID19Router = express_1.default.Router();
COVID19Router.get('/', function (req, res) {
    new COVID_19Service_1.default().getData().then(function (result) {
        res.send(result.data);
    }).catch(function (err) {
        console.log(err);
    });
});
exports.default = COVID19Router;
