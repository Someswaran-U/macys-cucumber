export class bag{
    constructor(page){
        this.page = page
        this.price_txt = this.page.locator("#bagitems span.heavy")
        this.checkOut_btn = this.page.locator('button.primary')
    }
    
}