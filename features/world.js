import { setWorldConstructor } from '@cucumber/cucumber'

class customWorld{
    constructor({attach}){
        this.attach = attach
    }

    log(message){
        this.log(message)
    }
}