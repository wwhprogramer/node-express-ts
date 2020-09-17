"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReptilesDao_1 = __importDefault(require("../dao/ReptilesDao"));
var COVID19Service = /** @class */ (function () {
    function COVID19Service() {
    }
    COVID19Service.prototype.getData = function () {
        var url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total';
        return new ReptilesDao_1.default({ url: url }).getData();
    };
    return COVID19Service;
}());
exports.default = COVID19Service;
