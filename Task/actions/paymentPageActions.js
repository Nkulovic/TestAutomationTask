var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Pages = require('../pages/pages.js');
var pages = new Pages();

var paymentPageActions = function () {
    this.fillInPassengerPaymentForm = function (cardNumber, expirationMonth, expirationYear, securityCode) {
        browser.sleep(3000);
        
        this.fillInPassengerDetailsForm(0, "MS", "Nejra", "Kulovic");
        this.fillInPassengerDetailsForm(1, "MS", "Jane", "Doe");
        
        if(numberOfChildren != 0) {
            this.fillInChildPassengerDetailsForm(2, "John", "Doe");
        } else {
            this.fillInPassengerDetailsForm(2, "MR", "John", "Doe");
        }
        browser.sleep(1000);

        this.fillInPaymentDetails(cardNumber, expirationMonth, expirationYear, securityCode, "Nejra Kulovic");
        this.fillInBillingAddressDetails("21 Sun Lane", "Sun Land", "Dublin", "12345", "Ireland");

        pages.paymentPage.termsAndConditions().click();
        browser.sleep(1000);
        pages.paymentPage.payNowButton().click();
        browser.sleep(1000);
        return;
    }

    this.fillInPassengerDetailsForm = function (passengerIndex, passengerTitle, firstName, lastName) {
        pages.paymentPage.passengerTitle(passengerIndex).click();
        pages.paymentPage.choosePassengerTitle(passengerTitle, passengerIndex).click();
        pages.paymentPage.firstName(passengerIndex).sendKeys(firstName);
        pages.paymentPage.lastName(passengerIndex).sendKeys(lastName);     
    }

    this.fillInChildPassengerDetailsForm = function (passengerIndex, firstName, lastName) {        
        pages.paymentPage.firstName(passengerIndex).sendKeys(firstName);
        pages.paymentPage.lastName(passengerIndex).sendKeys(lastName);
    }

    this.fillInPaymentDetails = function (cardNumber, expirationMonth, expirationYear, securityCode, cardHolderName) {

        pages.paymentPage.cardNumber().sendKeys(cardNumber);
        
        pages.paymentPage.expiryMonth().click();
        pages.paymentPage.chooseExpiryMonth(expirationMonth).click();
        pages.paymentPage.expiryYear().click();
        pages.paymentPage.chooseExpiryYear(expirationYear).click();
        pages.paymentPage.securityCode().sendKeys(securityCode);
        pages.paymentPage.cardHolderName().sendKeys(cardHolderName);
    }

    this.fillInBillingAddressDetails = function (addressLine1, addressLine2, city, postalCode, country) {
        pages.paymentPage.billingAddressLine1().sendKeys(addressLine1);
        pages.paymentPage.billingAddressLine2().sendKeys(addressLine2);
        pages.paymentPage.billingAddressCity().sendKeys(city);
        pages.paymentPage.billingAddressPostcode().sendKeys(postalCode);
        pages.paymentPage.billingAddressCountry().click();
        pages.paymentPage.chooseBillingAddressCountry(country);
    }
}

module.exports = paymentPageActions;