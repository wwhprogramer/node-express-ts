"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var accessControl_db_config_1 = __importDefault(require("./config/accessControl-db-config"));
var AccessControlConnect = /** @class */ (function () {
    function AccessControlConnect() {
        this.config = accessControl_db_config_1.default;
    }
    AccessControlConnect.prototype.getConnection = function () {
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
    return AccessControlConnect;
}());
exports.default = new AccessControlConnect().getConnection();
