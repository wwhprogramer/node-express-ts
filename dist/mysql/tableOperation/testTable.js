"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sql = {
    insert: 'insert into testTable(title) values(?)',
    queryById: 'select * from testTable where id=?',
    queryAll: 'select * from testTable'
};
exports.default = sql;
