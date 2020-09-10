import express from 'express'
import {Menubar, MenubarInterface} from '../mysql/entity/Menubar'
import MenubarService from '../service/MenubarService'

const menubarRouter = express.Router()

menubarRouter.get('/getAllMenu', (req: any, res: any) => {
    // const menubarObj: MenubarInterface = {
    //     id: 0,
    //     parentId: 0,
    //     funUrl: '',
    //     funId: 'string',
    //     icon1: '',
    //     icon2: '',
    //     icon3: '',
    //     operateType: '操作',
    //     isEnable: 1,
    //     extend1: '',
    //     extend2: '',
    //     extend3: '',
    //     classification: 'test',
    // }
    // const menubar = new Menubar(menubarObj)
    const menubarService = new MenubarService()
    menubarService.getAll()
    .then((result: any[]) => {
        const packageResult = packageTree(result)
        res.send(packageResult)
    })
    .catch((err: any) => {
        res.send(err)
    })
})

// 将menubar封装成树形组件
const packageTree = (menubarList: any[]): any[] => {
    let packageList: any[] = []
    // 根节点
    for(let i = 0; i < menubarList.length; i++) {
        let item = menubarList[i]
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
