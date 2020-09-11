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
                resolve(result[0]);
            });
        });
    };
    MenubarDao.prototype.saveAllMenu = function (menubarArr) {
        var insertArr = menubarArr.map(function (item) {
            var id = item.id, title = item.title, parentId = item.parentId, funUrl = item.funUrl, funId = item.funId, icon1 = item.icon1, icon2 = item.icon2, icon3 = item.icon3, operateType = item.operateType, isEnable = item.isEnable, extend1 = item.extend1, extend2 = item.extend2, extend3 = item.extend3, classification = item.classification;
            return [id, title, parentId, funUrl, funId, icon1, icon2, icon3, operateType, isEnable, extend1, extend2, extend3, classification];
        });
        return new Promise(function (resolve, reject) {
            accessControlConnect_1.default.query(menubar_1.default.insertAll, [insertArr], function (err, result) {
                if (err) {
                    reject({ msg: err, success: false });
                }
                resolve(result);
            });
        });
    };
    MenubarDao.prototype.deleteMenu = function () {
        return new Promise(function (resolve, reject) {
            accessControlConnect_1.default.query(menubar_1.default.delete, function (err, result) {
                if (err) {
                    reject({ msg: err, success: false });
                }
                resolve({ msg: 'delete ok!', success: true });
            });
        });
    };
    return MenubarDao;
}());
exports.default = MenubarDao;
