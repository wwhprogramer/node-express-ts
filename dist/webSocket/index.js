"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var global_1 = require("../global");
// 定义websocket服务器
var wsServer = new ws_1.Server({ port: 8085 });
// 定义连接到的websocket集合
var socketSet = new Set();
// 连接
wsServer.on('connection', function (websocket) {
    console.log('websocket连接成功，端口号:', global_1.SOCKET_PORT);
    socketSet.add(websocket);
});
exports.default = socketSet;
