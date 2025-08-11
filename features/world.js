import { setWorldConstructor } from '@cucumber/cucumber'

class customWorld{
    constructor({attach}){
        this.attach = attach
    }

    log(message){
        this.attach(message, 'text/x.cucumber.log+plain')
    }
}