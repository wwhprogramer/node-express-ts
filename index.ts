import express from 'express'
// 引入公共环境变量
import {ENV_PORT} from './global'
// 引入路由模块
// import testRouter from './router/testRouter'
import menubarRouter from './router/menubarRouter'
const server = express()

server.get('/', (req: any, res: any) => {
    res.send('express 搭建后台服务')
})



// 路由
// server.use('/test', testRouter)
server.use('/menubar', menubarRouter)


server.listen(ENV_PORT, () => {
    console.log('后台服务启动成功，端口号：' + ENV_PORT)
})
