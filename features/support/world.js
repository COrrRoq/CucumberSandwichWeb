const cucumber = require("@cucumber/cucumber");


class CustomWorld {
    constructor() {
    }
}

cucumber.setWorldConstructor(CustomWorld);