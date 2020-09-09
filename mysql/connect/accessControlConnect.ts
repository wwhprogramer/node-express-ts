import Config from '../mysql-config'
import mysql from 'mysql'
import config from './config/accessControl-db-config'

class AccessControlConnect {
    config: Config = config
    connection: any
    getConnection(): any {
        if(!this.connection) {
            this.connection = mysql.createConnection(this.config)
        }
        this.connection.connect((err: any) => {
            if(err) {
                console.log('数据库连接失败')
            }else {
                console.log('数据库连接成功')
            }
        })
        return this.connection
    }
}

export default new AccessControlConnect().getConnection()