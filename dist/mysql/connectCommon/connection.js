"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var Connection = /** @class */ (function () {
    function Connection() {
    }
    // 获取链接
    Connection.getConnection = function (config) {
        return mysql_1.default.createConnection(config);
    };
    return Connection;
}());
exports.default = Connection;
