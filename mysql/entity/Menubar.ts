export interface MenubarInterface {
    id: number | undefined
    parentId: number | undefined
    funUrl: string | undefined
    funId: string | undefined
    icon1: string | undefined
    icon2: string | undefined
    icon3: string | undefined
    operateType: string | undefined
    isEnable: number | undefined
    extend1: string | undefined
    extend2: string | undefined
    extend3: string | undefined
    classification: string | undefined
}

export class Menubar implements MenubarInterface{
    id: number | undefined
    parentId: number | undefined
    funUrl: string | undefined
    funId: string | undefined
    icon1: string | undefined
    icon2: string | undefined
    icon3: string | undefined
    operateType: string | undefined
    isEnable: number | undefined
    extend1: string | undefined
    extend2: string | undefined
    extend3: string | undefined
    classification: string | undefined
    constructor(menubar: MenubarInterface) {
        const {id, parentId, funUrl, funId, icon1, icon2, icon3, operateType, isEnable, extend1, extend2, extend3, classification} = menubar
        this.id = id
        this.parentId = parentId
        this.funUrl = funUrl
        this.funId = funId
        this.icon1 = icon1
        this.icon2 = icon2
        this.icon3 = icon3
        this.operateType = operateType
        this.isEnable = isEnable
        this.extend1 = extend1
        this.extend2 = extend2
        this.extend3 = extend3
        this.classification = classification
    }
}
