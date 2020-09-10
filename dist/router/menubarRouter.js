"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MenubarService_1 = __importDefault(require("../service/MenubarService"));
var menubarRouter = express_1.default.Router();
menubarRouter.get('/getAllMenu', function (req, res) {
    // const menubarObj: MenubarInterface = {
    //     id: 0,
    //     parentId: 0,
    //     funUrl: '',
    //     funId: 'string',
    //     icon1: '',
    //     icon2: '',
    //     icon3: '',
    //     operateType: '操作',
    //     isEnable: 1,
    //     extend1: '',
    //     extend2: '',
    //     extend3: '',
    //     classification: 'test',
    // }
    // const menubar = new Menubar(menubarObj)
    var menubarService = new MenubarService_1.default();
    menubarService.getAll()
        .then(function (result) {
        var packageResult = packageTree(result);
        res.send(packageResult);
    })
        .catch(function (err) {
        res.send(err);
    });
});
// 将menubar封装成树形组件
var packageTree = function (menubarList) {
    var packageList = [];
    // 根节点
    for (var i = 0; i < menubarList.length; i++) {
        var item = menubarList[i];
        if (!item.parentId) {
            packageList.push(item);
            menubarList.splice(i, 1);
            i--;
        }
    }
    return packageChild(menubarList, packageList);
};
var packageChild = function (menubarList, packageList) {
    for (var i = 0; i < menubarList.length; i++) {
        var menubarItem = menubarList[i];
        for (var j = 0; j < packageList.length; j++) {
            var packageItem = packageList[j];
            if (packageItem.id === menubarItem.parentId) {
                var children = packageItem.children ? packageItem.children : [];
                children.push(menubarItem);
                packageItem.children = children;
                menubarList.splice(i, 1);
                if (!menubarList.length) {
                    return packageList;
                }
                i--;
                packageItem.children = packageChild(menubarList, packageItem.children);
                continue;
            }
        }
    }
    return packageList;
};
exports.default = menubarRouter;
