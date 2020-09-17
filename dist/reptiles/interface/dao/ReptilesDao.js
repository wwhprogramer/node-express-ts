"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReptilesDao = /** @class */ (function () {
    function ReptilesDao(url) {
        if (url === void 0) { url = ''; }
        this.url = url;
        this.data = null;
    }
    ReptilesDao.prototype.getAjaxData = function () {
        return {
            a: 'xxx',
            b: 'xxx',
        };
    };
    ;
    ReptilesDao.prototype.getHtmlData = function () {
        return "\n            <div>aaaa</div>\n            <div>bbbb</div>\n        ";
    };
    ;
    ReptilesDao.prototype.saveSQL = function (fun) {
        fun();
    };
    ;
    return ReptilesDao;
}());
exports.default = ReptilesDao;
