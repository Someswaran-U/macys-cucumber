import {expect} from '@playwright/test'
import {checkout} from '../page/checkout.page.js'

export class checkoutMethod extends checkout{
    constructor(page){
        super(page)
        this.page = page
    }
    async signInAsGuest(){
        await this.checkout_btn.click()
    }
    async fillDetail(firstName, lastName, addLine_1, phoneNo){
        await this.firstName_input.fill(firstName)
            await this.lastName_input.fill(lastName)
            await this.addLine1_input.click()
            await this.addLine1_input.fill(addLine_1)
            await this.add1Options_input.first().click()
            await this.phoneNo_input.fill(phoneNo)
            await this.page.waitForTimeout(1000)
            await this.saveAddInfo_btn.click()
    }
    async validateDetails(firstName, lastName, addLine_1, zip){
        //await this.saveAddInfo_btn.click(
            expect (await this.name_txt.textContent()).toContain(firstName)

        
            expect (await this.name_txt.textContent()).toContain(lastName)
        
        
            expect (await this.add1_txt.textContent()).toContain(addLine_1)
        
        
            expect (await this.zip_txt.textContent()).toContain(zip)
        
    }
    async getOrderSubtotal(){
        return await this.subtotal_txt.textContent()
    }
    async fillCardDetails(ccNo, cvv, month, year, email){
            await this.deliveryOptions_btn.waitFor({ state: 'visible' })
            await this.ccOptions_btn.waitFor({ state: 'visible' })

            await this.ccNo_input.click()
            await this.ccNo_input.fill(ccNo)
            await this.page.waitForTimeout(1000)
            await this.ccheading_txt.click()
        
            //await this.page.waitForTimeout(3000)
            await this.month_select_enabled.waitFor()
            //await this.wait()
            await this.month_select.waitFor({ state: 'visible' })
            await this.month_select.click()
            await this.month_select.selectOption(month)
        
            await this.year_select.waitFor({ state: 'visible' })
            await this.year_select.click()
            await this.year_select.selectOption(year)
       
            await this.cvv_input.waitFor({ state: 'visible' })
            await this.cvv_input.click()
            await this.cvv_input.fill(cvv)
        
            await this.email_input.fill(email)
       
            await this.saveCardInfo_btn.click()
        
    }
    async placeOrder(){
        //await this.page.waitForTimeout(2000)
        await this.placeOrder_btn.waitFor({ state: 'visible' })
        await this.placeOrder_btn.click()
        await this.page.waitForLoadState('load')
    }
    async wait(){
        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForLoadState('load')
        await this.page.waitForLoadState('networkidle')
    }
}