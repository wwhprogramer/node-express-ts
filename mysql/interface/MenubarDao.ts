import BaseDao from './BaseDao'
import {Menubar} from '../entity/Menubar'
import conn from '../connect/accessControlConnect'
import sql from '../tableOperation/menubar'
class MenubarDao implements BaseDao<Menubar> {
    save(menubar: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.insert, [menubar], (err: any, result: any) => {
                if(err) reject({msg: err, success: false})
                resolve(result)
            })
        })
    }
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

export default MenubarDao