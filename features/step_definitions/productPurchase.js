import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import {setDefaultTimeout} from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);
import input from '../../TestData/input.json' with {type: "json"}

let price
let prices = []
let orderNo = []
let index = 0

//Step 1
Given('I am on the homepage', async function () {
    await this.Home.goToSite();
    expect(await this.Home.getTitle()).toContain(this.Home.title)
});

When('I search for the product using product Id : {string}', async function (productId) {
    await this.Home.searchProduct(productId)
    await this.page.waitForLoadState('load')
});

Then('I should be navigated to the Product Description Page \\(PDP) for the product', async function () {

    price = await this.Pdp.getPrice()
    prices.push(price)
});

//Step 2
When('I click the Add to Bag button', async function () {
    await this.Pdp.addToBag()
});

Then('the bag overlay should appear and the price on the bag overlay should match the product price on the PDP', async function () {
    expect(await this.Pdp.getPriceInBag()).toContain(prices[index])
});

//Step 3
When('I click the bag icon', async function () {
    await this.Pdp.goToBagPage()
});

Then('I should be navigated to the Bag page and the product and price on the Bag page should match the PDP', async function () {
    expect(await this.Bag.getPrice()).toContain(prices[index])
});

//Step 4
When('I click the Checkout button', async function () {
    await this.Bag.checkOutProduct()
});

Then('I should be navigated to the Checkout page and the product and price on the Checkout page should match the PDP', async function () {
    await this.Checkout.signInAsGuest()
    expect(await this.Checkout.getOrderSubtotal()).toContain(prices[index])
});

//Step 5
When('I enter delivery details: firstName, lastName, address, phoneNumber', async function () {
    await this.Checkout.fillDetail(input.FirstName, input.LastName, input.add_line_1, input.phoneNo)
});

Then('I should see the delivery summary with the correct details', async function () {
    await this.Checkout.validateDetails(input.FirstName, input.LastName, input.add_line_1, input.zip)
});

//Step 6
When('I enter payment details: ccNo, month, year, CVV', async function () {
    await this.Checkout.fillCardDetails(input.ccNo, input.cvv, input.month, input.year, input.email)
});

When('I click the pay button', async function () {
    await this.Checkout.placeOrder()
});

Then('I should see the order confirmation with the order number', async function () {
    let order = await this.Confirmation.getOrderDetails()
    order = order.match(/\d+/)[0]
    orderNo.push(order)
});