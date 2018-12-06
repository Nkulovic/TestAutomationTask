var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Pages = require('../pages/pages.js');
var pages = new Pages();

var bookingPageActions = function () {

    this.chooseFare = function () {
        
        pages.bookingPage.bookingPrice().click();
        browser.sleep(3000);
               
        this.chooseStandardFare();        
        browser.sleep(1000);        
        var element =  pages.bookingPage.continueButton();
        browser.actions().mouseMove(element).perform();
        browser.sleep(1500);

        return pages.bookingPage.continueButton().click();
    };

    this.chooseStandardFare = function () {
        var element =  pages.bookingPage.chooseStandardFareOption();
        browser.actions().mouseMove(element).perform();     
        return pages.bookingPage.chooseStandardFareOption().click();
    }

    
}

module.exports = bookingPageActions;
