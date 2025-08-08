import {pdp} from '../page/pdp.page.js'
export class pdpMethod extends pdp{
    constructor(page){
        super(page)
        this.page = page
    }
    async getPrice(){
        return await this.productPrice.textContent()
    }
    async addToBag(){
        await this.addToBag_btn.click()
    }
    async getPriceInBag(){
        let price = await this.priceInBag.textContent()
        await this.close_btn.click()
        return price
    }
    async checkoutAsGuest(){
        await this.checkOut_btn.click()
        await this.guestCheckOut_btn.click()
    }
    async goToBagPage(){
        await this.bag_btn.click()
    }
    async goToHomePage(){
        await this.home_btn.click()
    }
}
