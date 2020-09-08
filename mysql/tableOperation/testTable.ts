const sql = {
    insert: 'insert into testTable(title) values(?)',
    queryById: 'select * from testTable where id=?',
    queryAll: 'select * from testTable'
}

export default sql
