import ReptilesDao from '../dao/ReptilesDao'
class COVID19Service {
    getData() {
        let url = 'https://c.m.163.com/ug/api/wuhan/app/data/list-total'
        return new ReptilesDao({url}).getData()
    }
}

export default COVID19Service