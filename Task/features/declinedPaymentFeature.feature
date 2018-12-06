#features/declinedPaymentFeature.feature

Feature: Booking a flight with declined payment
         As a logged user on Ryanair
         When I book a one way flight
         And I enter my credit card information
         Then I should get payment declined message

Scenario Outline:
        Given I make a booking from "<flightFrom>" to "<flightTo>" on "<flightDate>" for "<numOfAdults>" adults and "<numOfTeens>" teens and "<numOfChildren>" children and "<numOfInfants>" infants
        And I choose standard fare
        And I don't choose seats
        When I "<addPriorityBag>" Priority Queue Bag
        And I pay for booking with my credit card information "<cardNumber>", "<expirationMonth>"/"<expirationYear>", "<securityCode>"
        Then I should get payment declined message

Examples:
|flightFrom|flightTo|flightDate|numOfAdults|numOfTeens|numOfChildren|numOfInfants|addPriorityBag|cardNumber      |expirationMonth|expirationYear|securityCode|
|DUB       |SXF     |13-12-2018|2          |1         |0            |0           |don't add     |5555555555555557|10             |2019          |265         |
|HAM       |STN     |13-12-2018|2          |0         |1            |0           |add           |5555555555555557|10             |2019          |265         |