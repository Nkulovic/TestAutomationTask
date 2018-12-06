var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Pages = require('../pages/pages.js');
var pages = new Pages();

var homePageActions = function () {

    this.userLoginAction = function () {
        pages.homePage.login().click();     
        browser.sleep(2000);   
        pages.loginPage.inputEmailAddress().sendKeys('nejra.kulovic@gmail.com');
        pages.loginPage.inputPassword().sendKeys('NejraKulovic7');
        return pages.loginPage.loginButton().click();
    };

    this.bookAFlightAction = function (flightFrom, flightTo, flightDate, numOfAdults, numOfTeens, numOfChildren, numOfInfants) {  
        numberOfAdults = numOfAdults;
        numberOfTeens = numOfTeens;
        numberOfChildren = numOfChildren;
        numberOfInfants = numOfInfants;

        browser.sleep(1000);
        var cookies = pages.homePage.cookiesPolicyPopup().isPresent();
        if(cookies) {
            pages.homePage.cookiesPolicyPopup().click();
        }
        // flight option
        pages.homePage.oneWayFlightOption().click();
        // from
        pages.homePage.flightFrom().clear();
        pages.homePage.flightFrom().sendKeys(flightFrom);    
        pages.homePage.flightFrom().sendKeys(protractor.Key.TAB).perform;
        // to   
        pages.homePage.flightTo().sendKeys(flightTo);
        pages.homePage.flightTo().sendKeys(protractor.Key.TAB).perform;       
        // flight date
        var element = pages.homePage.getFlightDatePicker();
        browser.actions().mouseMove(element).perform();        
        pages.homePage.chooseFlyOutDate(flightDate).click();        
        // passengers
        pages.homePage.choosePassengers().click();

        for(var i = 0; i < numOfAdults - 1; i++) {
            pages.homePage.addAdultPassenger().click();
            // browser.sleep(500);
        }       
        for(var i = 0; i < numOfTeens; i++) {
            pages.homePage.addTeenPassenger().click();
        }
        for(var i = 0; i < numOfChildren; i++) {
            pages.homePage.addChildPassenger().click();
        }      
        for(var i = 0; i < numOfInfants; i++) {
            pages.homePage.addInfantPassenger().click();           
            if(i == 0) {
                pages.homePage.flyingWithAnInfantAlertButton().click();
                browser.sleep(500);
            }           
        }                

        return pages.homePage.submitFlightButton().click();
    }

}

module.exports = homePageActions;