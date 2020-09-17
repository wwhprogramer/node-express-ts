"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var ReptilesDao = /** @class */ (function () {
    function ReptilesDao(config) {
        if (config === void 0) { config = {
            url: '',
            method: 'get',
            data: {}
        }; }
        this.config = config;
        this.data = null;
    }
    ReptilesDao.prototype.getData = function () {
        var _a = this.config, url = _a.url, method = _a.method, data = _a.data, headers = _a.headers, timeout = _a.timeout;
        return axios_1.default({
            url: url,
            method: method,
            data: data,
            headers: headers,
            timeout: timeout
        });
    };
    ReptilesDao.prototype.saveSQL = function (fun) {
        fun();
    };
    return ReptilesDao;
}());
exports.default = ReptilesDao;
