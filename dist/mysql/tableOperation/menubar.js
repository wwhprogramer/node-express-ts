"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sql = {
    insert: 'insert into menubar set ?',
    queryById: 'select * from menubar where id=?',
    queryAll: 'select * from menubar'
};
exports.default = sql;
