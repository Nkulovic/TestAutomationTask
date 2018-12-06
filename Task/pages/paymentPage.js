var PaymentPage = function () {
    
    this.passengerTitle = function (passengerIndex) {
        return element.all(by.css('.form-field.payment-passenger-title')).get(passengerIndex);
    };

    this.choosePassengerTitle = function (title, passengerIndex) {
        return element.all(by.css('[value="string:'+ title + '"]')).get(passengerIndex);
    };

    this.firstName = function (passengerIndex) {
        return element.all(by.css('.form-field.payment-passenger-first-name input')).get(passengerIndex);
    };

    this.lastName = function (passengerIndex) {
        return element.all(by.css('.form-field.payment-passenger-last-name input')).get(passengerIndex);
    };


    this.cardNumber = function () {
        return element(by.css('[name="cardNumber"]'));
    };
    
    this.expiryMonth = function () {
        return element(by.css('[name="expiryMonth"]'));
    };

    this.chooseExpiryMonth = function (month) {
        return element(by.css('.date-expiry [value="number:' + month +'"]'));
    };

    this.expiryYear = function () {
        return element(by.css('[name="expiryYear"]'));
    };

    this.chooseExpiryYear = function (year) {
        return element(by.css('[value="number:' + year + '"]'));
    };

    this.securityCode = function () {
        return element(by.css('[name="securityCode"]'));
    };

    this.cardHolderName = function () {
        return element(by.css('[name="cardHolderName"]'));
    };

    this.billingAddressLine1 = function () {
        return element(by.css('[name="billingAddressAddressLine1"]'));
    };

    this.billingAddressLine2 = function () {
        return element(by.css('[name="billingAddressAddressLine2"]'));
    };

    this.billingAddressCity = function () {
        return element(by.css('[name="billingAddressCity"]'));
    };

    this.billingAddressPostcode = function () {
        return element(by.css('[name="billingAddressPostcode"]'));
    };

    this.billingAddressCountry = function () {
        return element(by.css('[name="billingAddressCountry"]'));
    };

    this.chooseBillingAddressCountry = function (country) {
        return element(by.css('[label="' + country + '"]'));
    };

    this.termsAndConditions = function () {
        return element(by.css('.terms'));
    };

    this.payNowButton = function () {
        return element(by.css('[translate="common.components.payment_forms.pay_now"]'));
    };

    this.paymentUnauthorized = function () {
        return element(by.css('[translate="common.components.payment_forms.error_explain_declined"]'));
    };
}

module.exports = PaymentPage;