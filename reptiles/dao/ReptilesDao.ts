import ReptilesInterface from '../interface/ReptilesInterface'
import axios from 'axios'

class ReptilesDao implements ReptilesInterface {
    data: any = null;
    constructor(
        public config: {
            url: string 
            method?: any
            data?: any
            timeout?: number
            headers?: any
            responseType?: string
            transformResponse?: any
        } = {
            url: '',
            method: 'get',
            data: {}
        }
    ) {}
    getData(): any {
        const {url, method, data, headers, timeout} = this.config
        return axios({
            url, 
            method, 
            data,
            headers,
            timeout
        })
        
    }
    saveSQL(fun: () => void): void {
        fun()
    }
    
}

export default ReptilesDao