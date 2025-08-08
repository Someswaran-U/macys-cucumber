export class checkout{
    constructor(page){
        this.page = page
        
        this.checkout_btn = this.page.locator('#guest-checkout')
        this.firstName_input = this.page.locator('#rc-shipping-firstName')
        this.lastName_input = this.page.locator('#rc-shipping-lastName')
        this.addLine1_input = this.page.locator('#rc-shipping-address1')
        this.addLine2_input = this.page.locator('#rc-shipping-address2')
        this.zip_input = this.page.locator('#rc-shipping-zip')
        this.add1Options_input = this.page.locator('//div[@role="option"]')
        this.phoneNo_input = this.page.locator('#rc-shipping-phone')
        this.saveAddInfo_btn = this.page.locator('#rc-shipping-submit')

        this.subtotal_txt = this.page.locator('#rc-order-subtotal div ')

        this.cc_iframe = this.page.frameLocator('#frame_cardNumber')
        this.cvv_iframe = this.page.frameLocator('#frame_cvvNumber')
        this.month_iframe = this.page.frameLocator('#frame_month')
        this.year_iframe = this.page.frameLocator('#frame_year')
        this.ccNo_input = this.cc_iframe.locator('#cc-number')
        this.ccheading_txt = this.page.locator('#payment-heading')
        this.month_select = this.month_iframe.locator('#ccmonth')
        this.month_select_enabled = this.month_iframe.locator('#ccmonth:enabled')
        this.year_select = this.year_iframe.locator('#ccyear')
        this.cvv_input = this.cvv_iframe.locator('#cvvNumber:enabled')
        this.email_input = this.page.locator('#rc-payment-email')
        this.saveCardInfo_btn = this.page.locator('#rc-ccdetails-save')

        this.deliveryOptions_btn = this.page.locator('#delivery-group-available-method-id-0')
        this.ccOptions_btn = this.page.locator('#rc-cc-header')

        this.placeOrder_btn = this.page.locator('#rc-place-order-btn:enabled')

        //validation locator
        this.name_txt = this.page.locator('#rc-shipping-summary .medium span').nth(0)
        this.add1_txt = this.page.locator('#rc-shipping-summary .medium span').nth(1)
        this.zip_txt = this.page.locator('#rc-shipping-summary .medium span').nth(2)
    }
}