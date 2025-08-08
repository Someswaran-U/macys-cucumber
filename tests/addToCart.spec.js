import { test, expect } from '@playwright/test';
import productList from '../TestData/productList.json'
import input from '../TestData/input.json' with { type: "json" }
import {homeMethod} from '../methods/home.methods.js'
import {pdpMethod} from '../methods/pdp.methods.js'
import {bagMethod} from '../methods/bag.methods.js'
import {confirmationMethod} from '../methods/confirmation.method.js'
import { checkoutMethod } from '../methods/checkout.methods.js';

const mcom = productList.mcom
let prices = []
let orderNo = []

test.describe.serial(() =>{
    let context
    let page
    let Home
    let Pdp, Bag, Checkout, Confirmation
    let price
    test.beforeAll(async ({browser})=>{
        context = await browser.newContext()
        page = await context.newPage()
        Home = new homeMethod(page)
        Pdp = new pdpMethod(page)
        Bag = new bagMethod(page)
        Checkout = new checkoutMethod(page)
        Confirmation = new confirmationMethod(page)
    })
    test('Navigating to site', async () => {
        await test.step("navigating to macys site",async()=>{
            await Home.goToSite();
        })
        await test.step("validating if landed on correct page",async()=>{
            expect(await Home.getTitle()).toContain(Home.title)
        })
    })
    
    mcom.forEach((productId, index) =>{
        test(`Searching for product with product Id : ${productId}`, async () => {
            await test.step(`searching for the product : ${productId}`,async ()=>{
                await Home.searchProduct(productId)
                await page.waitForLoadState('load')
            })
            await test.step("capturing the price of the product",async ()=>{
                price = await Pdp.getPrice()
                prices.push(price)
            })
        })
        test(`Adding the product to bag : ${productId}`, async () => {
            await test.step("adding the product to bag",async ()=>{
                await Pdp.addToBag()
            })
            await test.step("validating the price in bag overlay",async ()=>{
                expect(await Pdp.getPriceInBag()).toContain(prices[index])
            })
        })
        test(`bag page validation : ${productId}`, async ()=>{
            await test.step("navigating to bag page",async ()=>{
                await Pdp.goToBagPage()
            })
            await test.step("validating the product price in bag page",async ()=>{
                expect(await Bag.getPrice()).toContain(prices[index])
            })
            await test.step("clicking the checkout button",async ()=>{
                await Bag.checkOutProduct()
            })
        })
        test(`checkout Page validation : ${productId}`, async ()=>{
            await test.step("signing in as guest",async ()=>{
                await Checkout.signInAsGuest()
            })
            await test.step("validating the product price in checkout page",async ()=>{
                expect(await Checkout.getOrderSubtotal()).toContain(prices[index])
            })
            await test.step("filling the delivery details in checkout page",async ()=>{
                await Checkout.fillDetail(input.FirstName, input.LastName, input.add_line_1, input.phoneNo)
            })
            await test.step("validating the delivery summary in checkout page", async ()=>{
                await Checkout.validateDetails(input.FirstName, input.LastName, input.add_line_1, input.zip)
            })
            await test.step("filling the credit card details",async ()=>{
                await Checkout.fillCardDetails(input.ccNo, input.cvv, input.month, input.year, input.email)
            })      
            //expect(await Checkout.getOrderSubtotal()).toContain(prices[index])  
        })
        test(`confirmation page validation : ${productId}`,async()=>{
            await test.step("clicking the proceed to pay button",async ()=>{
                await Checkout.placeOrder()
            })
            await test.step("capturing order Number", async ()=>{
                let order = await Confirmation.getOrderDetails()
                order = order.match(/\d+/)[0]
                orderNo.push(order)
            })
        })
        test(`go to home page : ${productId}`,async ()=>{
            await test.step("navigating to home page",async ()=>{
                await Confirmation.goToHomePage()
            })
        })
    })
    test('printing Order Number',async () =>{
        console.log(orderNo)
    })
    
})
