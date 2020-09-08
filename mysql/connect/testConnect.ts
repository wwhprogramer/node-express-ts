import Config from '../interface/mysql-config'
import mysql from 'mysql'

class TestConnect {
    config: Config = {

        host: "localhost", //这是数据库的地址
    
        user: "root", //需要用户的名字
    
        password: "-Wwh123456wwh-", //用户密码 ，如果你没有密码，直接双引号就是
    
        database: "test" //数据库名字
    
    }
    connection: any
    getConnection(): any {
        if(!this.connection) {
            this.connection = mysql.createConnection(this.config)
        }
        return this.connection
    }
}

export default new TestConnect().getConnection()