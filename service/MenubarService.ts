import MenubarDao from '../mysql/interface/MenubarDao'
import {Menubar} from '../mysql/entity/Menubar'

class MenubarService extends MenubarDao {
    save(menubar: Menubar): Promise<any> {
        return new MenubarDao().save(menubar)
    }
    getAll(): Promise<any> {
        return new MenubarDao().getAll()
    }
    getById(id: number): Promise<any> {
        return new MenubarDao().getById(id)
    }
    saveAllMenu(menubarArr: Menubar[]): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.deleteMenu().then((res: any) => {
                resolve(new MenubarDao().saveAllMenu(menubarArr))
            }).catch((err: any) => {
                reject(err)
            })
        })
    }
    deleteMenu():Promise<any> {
        return new MenubarDao().deleteMenu()
    }
}

export default MenubarService