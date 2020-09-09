
interface BaseDao<T> {
    save(menubar: T): Promise<any>;
    getAll(): Promise<any>;
    getById(id: number): Promise<any>;
}

export default BaseDao
