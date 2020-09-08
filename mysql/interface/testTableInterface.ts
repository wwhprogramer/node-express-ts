
interface TestTableInterface {
    id: number | undefined,
    title: string | undefined,
    getAll(): Promise<any>,
    getById(id: number): Promise<any>,
}

export default TestTableInterface