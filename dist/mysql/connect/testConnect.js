"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var TestConnect = /** @class */ (function () {
    function TestConnect() {
        this.config = {
            host: "localhost",
            user: "root",
            password: "-Wwh123456wwh-",
            database: "test" //数据库名字
        };
    }
    TestConnect.prototype.getConnection = function () {
        if (!this.connection) {
            this.connection = mysql_1.default.createConnection(this.config);
        }
        this.connection.connect(function (err) {
            if (err) {
                console.log('数据库连接失败');
            }
            else {
                console.log('数据库连接成功');
            }
        });
        return this.connection;
    };
    return TestConnect;
}());
exports.default = new TestConnect().getConnection();
