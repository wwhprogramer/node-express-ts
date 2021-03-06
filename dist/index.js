"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_ws_1 = __importDefault(require("express-ws"));
// 引入公共环境变量
var global_1 = require("./global");
// 引入路由模块
// import testRouter from './router/testRouter'
var menubarRouter_1 = __importDefault(require("./router/menubarRouter"));
var COVID_19Router_1 = __importDefault(require("./router/COVID-19Router"));
var BookSchinaRouter_1 = __importDefault(require("./router/BookSchinaRouter"));
var FileUpload_1 = __importDefault(require("./router/FileUpload"));
var server = express_1.default();
express_ws_1.default(server);
var bodyParser = require('body-parser');
server.use(bodyParser.json()); //数据JSON类型
server.use(bodyParser.urlencoded({ extended: false })); //解析post请求数据
server.get('/', function (req, res) {
    res.send('express 搭建后台服务');
});
// 路由
// server.use('/test', testRouter)
server.use('/menubar', menubarRouter_1.default);
server.use('/COVID19', COVID_19Router_1.default);
server.use('/bookSchina', BookSchinaRouter_1.default);
server.use('/file', FileUpload_1.default);
server.listen(global_1.ENV_PORT, function () {
    console.log('后台服务启动成功，端口号：' + global_1.ENV_PORT);
});
