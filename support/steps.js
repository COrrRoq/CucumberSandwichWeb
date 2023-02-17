const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

//const buttonclick = await browser.getElement('button')

/*When('the button is clicked', function (bgcolor) {
    const buttonclick = browser.getElement('button')
    buttonclick.click();
    browser.waitForElementByCss('.body', timeout/2);
});

Then('the background turns grey', function(bgcolor) {
const bgcolor = browser.getElement('mainbody') 
expect(bgcolor).toBe('grey');
});
*/

When('the webpage loads', function () {
    browser.document});

Then('there is a title', function() {
    const element = browser.getElement('title')
   element.getText(element).toBe("CAT'S NEW WEB PAGE")
    browser.getText('title')
    expect(text).toBe("CAT'S NEW WEB PAGE")
})
