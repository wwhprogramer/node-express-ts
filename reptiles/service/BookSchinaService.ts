import ReptilesDao from '../dao/ReptilesDao'
class BookSchinaService {
    getData() {
        let url = 'http://www.bookschina.com/'
        return new ReptilesDao({
            url,
            headers: {
                'Content-Type': 'application/json;charset=gb2312'
            },
            responseType: 'blob',
            transformResponse: [function (data: any) {
                var reader = new FileReader()
                reader.readAsText(data, 'GBK')
                return data
            }]
        }).getData()
    }
}

export default BookSchinaService