export class confirmation{
    constructor(page){
        this.page = page
        this.orderNo = this.page.locator(".rc-order-number")
    }
    
}