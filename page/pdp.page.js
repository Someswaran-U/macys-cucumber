export class pdp{
    constructor(page){
        this.page= page;
        this.productPrice = page.locator(`//span[@role="text" and contains(@aria-label, 'Current Price')]`)
        this.addToBag_btn = page.getByRole('button', { name: 'Add To Bag' })
        this.priceInBag = page.locator('//div[@class="prices"]')
        this.close_btn = page.locator('//button[@aria-label="close"]')
        this.checkOut_btn = page.getByRole('button', { name: 'Checkout' })
        this.guestCheckOut_btn = page.getByRole('button', { name: 'Checkout as Guest' })
        this.bag_btn = page.locator('//a[@title="Shopping bag"]')
        this.home_btn = page.locator(`//a[@aria-label="Macy's Home Page"]`)
    }
}