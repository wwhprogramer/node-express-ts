const sql = {
    insert: 'insert into menubar set ?',
    insertAll: 'insert into menubar(id, title, parentId, funUrl, funId, icon1, icon2, icon3, operateType, isEnable, extend1, extend2, extend3, classification) values ?',
    queryById: 'select * from menubar where id=?',
    queryAll: 'select * from menubar',
    delete: 'delete from menubar'
}

export default sql
