import {bag} from '../page/bag.page.js'
import input from '../TestData/input.json' with { type: "json" }
export class bagMethod extends bag {
    constructor(page){
        super(page)
        this.page = page
    }
    async getPrice(){
        return this.price_txt.textContent()
    }
    async goToHomePage(){
        await this.page.goto(input.url_mcom)
    }
    async checkOutProduct(){
        await this.checkOut_btn.click()
    }
}