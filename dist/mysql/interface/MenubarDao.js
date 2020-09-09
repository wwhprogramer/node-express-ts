"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var accessControlConnect_1 = __importDefault(require("../connect/accessControlConnect"));
var menubar_1 = __importDefault(require("../tableOperation/menubar"));
var MenubarDao = /** @class */ (function () {
    function MenubarDao() {
    }
    MenubarDao.prototype.save = function (menubar) {
        return new Promise(function (resolve, reject) {
            accessControlConnect_1.default.query(menubar_1.default.insert, [menubar], function (err, result) {
                if (err)
                    reject({ msg: err, success: false });
                resolve(result);
            });
        });
    };
    MenubarDao.prototype.getAll = function () {
        return new Promise(function (resolve, reject) {
            accessControlConnect_1.default.query(menubar_1.default.queryAll, function (err, result) {
                if (err) {
                    reject({ msg: err, success: false });
                }
                resolve(result);
            });
        });
    };
    MenubarDao.prototype.getById = function (id) {
        return new Promise(function (resolve, reject) {
            accessControlConnect_1.default.query(menubar_1.default.queryById, id, function (err, result) {
                if (err) {
                    reject({ msg: err, success: false });
                }
                if (!result[0]) {
                    result[0] = {};
                }
                resolve(result[0]);
            });
        });
    };
    return MenubarDao;
}());
exports.default = MenubarDao;
