"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menubar = void 0;
var Menubar = /** @class */ (function () {
    function Menubar(menubar) {
        var id = menubar.id, parentId = menubar.parentId, funUrl = menubar.funUrl, funId = menubar.funId, icon1 = menubar.icon1, icon2 = menubar.icon2, icon3 = menubar.icon3, operateType = menubar.operateType, isEnable = menubar.isEnable, extend1 = menubar.extend1, extend2 = menubar.extend2, extend3 = menubar.extend3, classification = menubar.classification;
        this.id = id;
        this.parentId = parentId;
        this.funUrl = funUrl;
        this.funId = funId;
        this.icon1 = icon1;
        this.icon2 = icon2;
        this.icon3 = icon3;
        this.operateType = operateType;
        this.isEnable = isEnable;
        this.extend1 = extend1;
        this.extend2 = extend2;
        this.extend3 = extend3;
        this.classification = classification;
    }
    return Menubar;
}());
exports.Menubar = Menubar;
