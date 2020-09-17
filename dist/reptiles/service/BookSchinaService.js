"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ReptilesDao_1 = __importDefault(require("../dao/ReptilesDao"));
var BookSchinaService = /** @class */ (function () {
    function BookSchinaService() {
    }
    BookSchinaService.prototype.getData = function () {
        var url = 'http://www.bookschina.com/';
        return new ReptilesDao_1.default({
            url: url,
            headers: {
                'Content-Type': 'application/json;charset=gb2312'
            },
            responseType: 'blob',
            transformResponse: [function (data) {
                    var reader = new FileReader();
                    reader.readAsText(data, 'GBK');
                    return data;
                }]
        }).getData();
    };
    return BookSchinaService;
}());
exports.default = BookSchinaService;
