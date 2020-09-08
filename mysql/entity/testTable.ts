import TestTableInterface from '../interface/testTableInterface'
import conn from '../connect/testConnect'
import sql from '../tableOperation/testTable'

class TestTable implements TestTableInterface {
    id: number | undefined
    title: string | undefined
    getAll(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.queryAll, (err: any, result: any[]) => {
                if(err) {
                    reject({msg: err, success: false})
                }
                resolve(result)
            })
        })
    }
    getById(id: number): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.queryById, id, (err: any, result: any[]) => {
                if(err) {
                    reject({msg: err, success: false})
                }
                if(!result[0]) {
                    result[0] = {}
                }
                resolve(result[0])
            })
        })
    }
}

export default TestTable