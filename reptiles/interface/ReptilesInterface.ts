interface ReptilesInterface {
    config: {
        url: string 
        method?: any 
        data?: any
        timeout?: number
        headers?: any
    }
    data: any
    getData: () => any
    saveSQL: (fun: () => void) => void
}

export default ReptilesInterface