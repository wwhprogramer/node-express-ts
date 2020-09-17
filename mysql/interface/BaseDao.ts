import { Menubar } from "../entity/Menubar";

interface BaseDao<T> {
    save(menubar: T): Promise<any>;
    getAll(): Promise<Menubar[]>;
    getById(id: number): Promise<any>;
}

export default BaseDao
