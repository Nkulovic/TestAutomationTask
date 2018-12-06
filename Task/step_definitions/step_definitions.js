var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {
    this.setDefaultTimeout(600 * 1000);
    
    this.Before(function () {
        browser.driver.manage().window().maximize();
        browser.get('https://www.ryanair.com/ie/en/');
        actions.homePageActions.userLoginAction();
    });

    this.After(function () {
        browser.sleep(1000);
        browser.quit();
    });

    this.Given(/^I make a booking from "([^"]*)" to "([^"]*)" on "([^"]*)" for "([^"]*)" adults and "([^"]*)" teens and "([^"]*)" children and "([^"]*)" infants$/, function (flightFrom, flightTo, flightDate, numberOfAdults, numberOfTeens, numberOfChildren, numberOfInfants) {
        return actions.homePageActions.bookAFlightAction(flightFrom, flightTo, flightDate, numberOfAdults, numberOfTeens, numberOfChildren, numberOfInfants);
    });

    this.When(/^I choose standard fare$/, function () {
        browser.sleep(6000);
        return actions.bookingPageActions.chooseFare();
    });

    this.When(/^I don't choose seats$/, function () {
        browser.sleep(3000);
        return actions.extrasPageActions.chooseSeats();
    });

    this.When(/^I "(add|don't add)" Priority Queue Bag$/, function (option) {
        browser.sleep(3000);
        return actions.extrasPageActions.addPriorityQueueBag(option);
    });

    this.When(/^I pay for booking with my credit card information "([^"]*)", "([^"]*)"\/"([^"]*)", "([^"]*)"$/, function (cardNumber, expirationMonth, expirationYear, securityCode) {
        browser.sleep(3000);
        return actions.paymentPageActions.fillInPassengerPaymentForm(cardNumber, expirationMonth, expirationYear, securityCode);
    });

    this.Then(/^I should get payment declined message$/, function () {
        browser.sleep(3000);
        return expect(pages.paymentPage.paymentUnauthorized().getText()).to.eventually.equal('As your payment was not authorised we could not complete your reservation. Please ensure that the information was correct or use a new payment to try again');
    });
}