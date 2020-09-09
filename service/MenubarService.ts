import MenubarDao from '../mysql/interface/MenubarDao'

class MenubarService extends MenubarDao {
    save(menubar: any): Promise<any> {
        return new MenubarDao().save(menubar)
    }
    getAll(): Promise<any> {
        return new MenubarDao().getAll()
    }
    getById(id: number): Promise<any> {
        return new MenubarDao().getById(id)
    }
}

export default MenubarService