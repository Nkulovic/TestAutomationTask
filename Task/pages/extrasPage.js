var ExtrasPage = function () {

    this.skipChoosingSeats = function () {
        return element(by.css('[translate="trips.seats.modal.skip"]'));
    };

    this.chooseSeats = function () {
        return element(by.css('[translate="trips.seats.modal.choose_seat"]'));
    };

    this.checkOutButton = function () {
        return element(by.css('[data-ref="header-checkout-btn"]'));
    };

    this.chooseSmallBag = function () {
        return element(by.css('.pb-cb-card__carry-on-top'));
    };

    this.choosePriorityQueueBag = function () {
        return element(by.css('[data-ref="priority-boarding-cabin-bags-selector__priority-boarding-option"]'));
    };

    this.confirmBags = function () {
        return element(by.css('.core-btn-primary.dialog-overlay-footer__ok-button'));
    };

    this.chooseSeatsPopUp = function () {
        return element.all(by.css('.popup-msg__close[data-ref="popup-msg__close"]')).first();
    };

    this.chooseSeatOnSale = function (seat) {
        return element.all(by.css('.seat-row-seat.onsale')).get(seat);
    };

    this.reviewSeatsButton = function () {
        return element(by.css('[translate="trips.seats.seatmap_review-seats"]'));
    };

    this.confirmSeatsButton = function () {
        return element(by.css('[translate="trips.seats.confirm"]'));
    }; 

    this.priorityBagsPopUp = function () {
        return element(by.css('.priority-boarding-with-bags-popup__close-x'));
    };

    this.selectSeatsChildrenButton = function () {
        return element(by.css('[translate="trips.family_seat.seat_map_popup.confirm"]'));
    }

    this.seatOnSale = function (number) {
        return element.all(by.css('[class="seat-row-seat onsale"]')).get(number);
    }

}

module.exports = ExtrasPage;