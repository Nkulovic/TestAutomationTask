var homePageActions = require('./homePageActions.js');
var bookingPageActions = require('./bookingPageActions.js');
var extrasPageActions = require('./extrasPageActions.js');
var paymentPageActions = require('./paymentPageActions.js');

var actions = function () {
    this.homePageActions = new homePageActions();
    this.bookingPageActions = new bookingPageActions();
    this.extrasPageActions = new extrasPageActions();
    this.paymentPageActions = new paymentPageActions();
}

module.exports = actions;