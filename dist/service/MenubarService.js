"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MenubarDao_1 = __importDefault(require("../mysql/interface/MenubarDao"));
var MenubarService = /** @class */ (function (_super) {
    __extends(MenubarService, _super);
    function MenubarService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenubarService.prototype.save = function (menubar) {
        return new MenubarDao_1.default().save(menubar);
    };
    MenubarService.prototype.getAll = function () {
        return new MenubarDao_1.default().getAll();
    };
    MenubarService.prototype.getById = function (id) {
        return new MenubarDao_1.default().getById(id);
    };
    MenubarService.prototype.saveAllMenu = function (menubarArr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.deleteMenu().then(function (res) {
                resolve(new MenubarDao_1.default().saveAllMenu(menubarArr));
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    MenubarService.prototype.deleteMenu = function () {
        return new MenubarDao_1.default().deleteMenu();
    };
    return MenubarService;
}(MenubarDao_1.default));
exports.default = MenubarService;
