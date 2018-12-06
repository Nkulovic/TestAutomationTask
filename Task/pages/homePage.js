var HomePage = function () {

    this.login = function () {
        return element(by.css('[ui-sref="login"]'));
    };

    this.oneWayFlightOption = function () {
        return element(by.css('[type="radio"][value="one-way"]'));
    };

    this.flightFrom = function () {
        return element(by.css('input[aria-labelledby="label-airport-selector-from"]'));
    };

    this.flightTo = function () {
        return element(by.css('input[aria-labelledby="label-airport-selector-to"]'));
    };

    this.getFlightDatePicker = function () {
        return element(by.css('.content-box.arrow_box'));
    };

    this.chooseFlyOutDate = function (flyOutDate) {
        return element(by.css('[data-id="' + flyOutDate + '"]'));
    };

    this.choosePassengers = function () {
        return element(by.css('.dropdown-handle'));
    };

    this.addAdultPassenger = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(0);
    };

    this.addTeenPassenger = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(1);
    };

    this.addChildPassenger = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(2);
    };

    this.addInfantPassenger = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(3);
    };

    this.submitFlightButton = function () { 
        return element(by.css('[translate="common.buttons.lets_go"]'));
    };

    this.cookiesPolicyPopup = function () {
        return element(by.css('[data-ref="cookies-policy-icon"]')); 
    };
}

module.exports = HomePage;