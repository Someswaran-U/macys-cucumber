import {After,Before} from '@cucumber/cucumber'
import { chromium } from '@playwright/test'
import {homeMethod} from '../methods/home.methods.js'
import {pdpMethod} from '../methods/pdp.methods.js'
import {bagMethod} from '../methods/bag.methods.js'
import { checkoutMethod } from '../methods/checkout.methods.js';
import {confirmationMethod} from '../methods/confirmation.method.js'


Before(async function() {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    this.page = await context.newPage()
    this.Home = new homeMethod(this.page)
    this.Pdp = new pdpMethod(this.page)
    this.Bag = new bagMethod(this.page)
    this.Checkout = new checkoutMethod(this.page)
    this.Confirmation = new confirmationMethod(this.page)
})
After(async function(){
    await this.page.close()
})
