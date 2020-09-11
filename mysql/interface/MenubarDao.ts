import BaseDao from './BaseDao'
import {Menubar} from '../entity/Menubar'
import conn from '../connect/accessControlConnect'
import sql from '../tableOperation/menubar'
class MenubarDao implements BaseDao<Menubar> {
    save(menubar: Menubar): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.insert, [menubar], (err: any, result: any) => {
                if(err) reject({msg: err, success: false})
                resolve(result)
            })
        })
    }
    getAll(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.queryAll, (err: any, result: Menubar[]) => {
                if(err) {
                    reject({msg: err, success: false})
                }
                resolve(result)
            })
        })
    }
    getById(id: number): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.queryById, id, (err: any, result: Menubar[]) => {
                if(err) {
                    reject({msg: err, success: false})
                }
                resolve(result[0])
            })
        })
    }
    saveAllMenu(menubarArr: Menubar[]): Promise<any> {
        let insertArr = menubarArr.map(item => {
            const {id, title, parentId, funUrl, funId, icon1, icon2, icon3, operateType, isEnable, extend1, extend2, extend3, classification} = item
            return [id, title, parentId, funUrl, funId, icon1, icon2, icon3, operateType, isEnable, extend1, extend2, extend3, classification]
        })
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.insertAll, [insertArr], (err: any, result: Menubar[]) => {
                if(err) {
                    reject({msg: err, success: false})
                }
                resolve(result)
            })
        })
    }
    deleteMenu(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            conn.query(sql.delete, (err: any, result: Menubar[]) => {
                if(err) {
                    reject({msg: err, success: false})
                }
                resolve({msg: 'delete ok!', success: true})
            })
        })
    }
}

export default MenubarDao