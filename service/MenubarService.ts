import MenubarDao from '../mysql/interface/MenubarDao'
import {Menubar} from '../mysql/entity/Menubar'
import Error from '../mysql/interface/Error'

class MenubarService extends MenubarDao {
    save(menubar: Menubar): Promise<any> {
        return new MenubarDao().save(menubar)
    }
    getAll(): Promise<Menubar[]> {
        return new MenubarDao().getAll()
    }
    getById(id: number): Promise<Menubar> {
        return new MenubarDao().getById(id)
    }
    saveAllMenu(menubarArr: Menubar[]): Promise<Menubar[]> {
        return new Promise((resolve: any, reject: (params: Error) => void) => {
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