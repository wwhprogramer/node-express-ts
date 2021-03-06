import express from 'express'
import expressWs from 'express-ws'
import {Menubar, MenubarInterface} from '../mysql/entity/Menubar'
import MenubarService from '../service/MenubarService'

const menubarRouter: any = express.Router()
expressWs(menubarRouter)

let menubarSocket: any = null

menubarRouter.get('/getAllMenu', (req: any, res: any) => {
    const menubarService = new MenubarService()
    menubarService.getAll()
    .then((result: Menubar[]) => {
        const packageResult = packageTree(result)
        // console.log(menubarSocket)
        menubarSocket.send(packageResult)
        res.send(packageResult)
    })
    .catch((err: any) => {
        res.send(err)
    })
})

menubarRouter.post('/saveMenu', (req: any, res: any) => {
    let gData: Menubar[] = JSON.parse(req.body.gData)
    const menubarService = new MenubarService()
    menubarService.saveAllMenu(gData)
    .then((result: Menubar[]) => {
        const packageResult = packageTree(result)
        res.send(packageResult)
    })
    .catch((err: any) => {
        res.send(err)
    })
})

menubarRouter.ws('/ws', (ws: any, req: any) => {
    console.log('socket连接成功')
    menubarSocket = ws
    ws.on('message', (msg: any) => {
        console.log(msg)
    })
    ws.send('ccc')
})

// 将menubar封装成树形组件
const packageTree = (menubarList: any[]): any[] => {
    let packageList: any[] = []
    // 根节点
    for(let i = 0; i < menubarList.length; i++) {
        let item = menubarList[i]
        item.key = item.id
        if(!item.parentId) {
            packageList.push(item)
            menubarList.splice(i, 1)
            i--
        }
    }
    return packageChild(menubarList, packageList)
}

const packageChild = (menubarList: any[], packageList: any[]): any[] => {
    for(let i = 0; i < menubarList.length; i++) {
        let menubarItem = menubarList[i]
        for(let j = 0; j < packageList.length; j++) {
            let packageItem = packageList[j]
            if(packageItem.id === menubarItem.parentId) {
                let children = packageItem.children ? packageItem.children : []
                children.push(menubarItem)
                packageItem.children = children
                menubarList.splice(i, 1)
                if(!menubarList.length) {
                    return packageList
                }
                i--
                packageItem.children = packageChild(menubarList, packageItem.children)
                continue
            }
        }
    }
    return packageList
}


export default menubarRouter
