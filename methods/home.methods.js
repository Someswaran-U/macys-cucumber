import {home} from '../page/home.page.js'
import { logStep } from "allure-js-commons"

export class homeMethod extends home{
    constructor(page){
        super(page)
        this.page = page
    }
    async goToSite(){
        await this.page.goto(this.url)
    }
    async searchProduct(productId){
        await this.searchBar.click()
        await this.searchBar.fill(productId)
        await this.searchBar.press('Enter')
    }
    async getTitle(){
        return await this.page.title()
    }
}
