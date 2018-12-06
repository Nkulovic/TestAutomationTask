var BookingPage = function () {
    
    this.bookingPrice = function () {
        return element.all(by.css('.flights-table-price')).last();
    };

    this.chooseStandardFareOption = function () {
        return element.all(by.css('.flights-table-fares__fare-price')).get(0);
    };

    this.continueButton = function () {
        return element(by.id('continue'));
    };


}

module.exports = BookingPage;