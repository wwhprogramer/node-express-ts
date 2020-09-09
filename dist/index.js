"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// 引入公共环境变量
var global_1 = require("./global");
// 引入路由模块
// import testRouter from './router/testRouter'
var menubarRouter_1 = __importDefault(require("./router/menubarRouter"));
var server = express_1.default();
server.get('/', function (req, res) {
    res.send('express 搭建后台服务');
});
// 路由
// server.use('/test', testRouter)
server.use('/menubar', menubarRouter_1.default);
server.listen(global_1.ENV_PORT, function () {
    console.log('后台服务启动成功，端口号：' + global_1.ENV_PORT);
});
