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
});

AfterAll(async function () {
    await browser.browserExit();
});



When('the button is clicked', async function () {
    //const buttonclick = await browser.getElement('button');
    await browser.elementClick("button")
    //await browser.waitForElementByCss('titles', timeout/2);
});

Then('the background turns grey', async function() {
const element = await browser.getElementByCss('body')
const bgcolor = await element.getCssValue('background-color');
    console.log (bgcolor);
    assert(bgcolor == 'rgba(128, 128, 128, 1)');
});


Given('the webpage is loaded', function () {
    browser.document
}
);

Then("the title is {string}", async function(title) {
    const maintitle = await browser.getElement('title');
    const titletext = await maintitle.getText();
    assert(titletext == title);
});
