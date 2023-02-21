const assert = require('assert');
const {Given, When, Then, BeforeAll , AfterAll, Before} = require('@cucumber/cucumber');

const Browser = require("./browser.js");
const browser = new Browser();
const timeout = 20000;


BeforeAll(function () {
    browser.browserBuild();
});

Before(async function () {
   await browser.browserNavigate('http://127.0.0.1:5500/');
})

AfterAll(async function () {
    await browser.browserExit();
})
/*
const buttonclick = await browser.getElement('button')

When('the button is clicked', function (bgcolor) {
    const buttonclick = browser.getElement('button')
    buttonclick.click();
    browser.waitForElementByCss('.body', timeout/2);
});

Then('the background turns grey', function(bgcolor) {
const bgcolor = browser.getElement('mainbody') 
expect(bgcolor).toBe('grey');
});
*/

Given('the webpage is loaded', function () {
    browser.document
}
);

Then("the title is {string}", async function(title) {
    const maintitle = await browser.getElement('title');
    const titletext = await maintitle.getText();
    //expect(titletext).toBe(title);
    console.log('titletext is '+ titletext)
    console.log('title is '+ title)

    assert(titletext == title);
});
