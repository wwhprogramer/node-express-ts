"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var testConnect_1 = __importDefault(require("../connect/testConnect"));
var testTable_1 = __importDefault(require("../tableOperation/testTable"));
var TestTable = /** @class */ (function () {
    function TestTable() {
    }
    TestTable.prototype.getAll = function () {
        return new Promise(function (resolve, reject) {
            testConnect_1.default.query(testTable_1.default.queryAll, function (err, result) {
                if (err) {
                    reject({ msg: err, success: false });
                }
                resolve(result);
            });
        });
    };
    TestTable.prototype.getById = function (id) {
        return new Promise(function (resolve, reject) {
            testConnect_1.default.query(testTable_1.default.queryById, id, function (err, result) {
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
    return TestTable;
}());
exports.default = TestTable;
