var HomePage = require('./homePage.js');
var LoginPage = require('./loginPage.js');
var BookingPage = require('./bookingPage.js');
var ExtrasPage = require('./extrasPage.js');
var PaymentPage = require('./paymentPage.js');

var pages = function () {
    this.homePage = new HomePage();
    this.loginPage = new LoginPage();
    this.bookingPage = new BookingPage();
    this.extrasPage = new ExtrasPage();
    this.paymentPage = new PaymentPage();
}

module.exports = pages;