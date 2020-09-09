"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MenubarService_1 = __importDefault(require("../service/MenubarService"));
var menubarRouter = express_1.default.Router();
menubarRouter.get('/selectById', function (req, res) {
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
        res.send(result);
    })
        .catch(function (err) {
        res.send(err);
    });
});
exports.default = menubarRouter;
