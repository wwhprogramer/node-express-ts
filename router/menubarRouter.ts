import express from 'express'
import {Menubar, MenubarInterface} from '../mysql/entity/Menubar'
import MenubarService from '../service/MenubarService'

const menubarRouter = express.Router()

menubarRouter.get('/selectById', (req: any, res: any) => {
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
    .then((result: any) => {
        res.send(result)
    })
    .catch((err: any) => {
        res.send(err)
    })


})

export default menubarRouter
