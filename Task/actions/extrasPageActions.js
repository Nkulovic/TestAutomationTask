var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;

var Pages = require('../pages/pages.js');
var pages = new Pages();

var extrasPageActions = function () {

    this.chooseSeats = function () {
        if(numberOfChildren == 0) {   
            pages.extrasPage.skipChoosingSeats().click();
            browser.sleep(1000);
        } else {
            pages.extrasPage.selectSeatsChildrenButton().click();
            browser.sleep(500);
            for(var i = 0; i < numberOfChildren; i++) {
                browser.executeScript('window.scrollTo(900, 700);').then(function () {
                    pages.extrasPage.seatOnSale(i).click();
                    browser.sleep(3000);
                });                
            }
            browser.executeScript('window.scrollTo(1000, 700);').then(function () {
                pages.extrasPage.seatOnSale(numberOfChildren + 1).click();
            });

            browser.sleep(1000);
            pages.extrasPage.reviewSeatsButton().click();
            browser.sleep(500);
            pages.extrasPage.confirmSeatsButton().click();
            browser.sleep(2000);

            var priorityBagPopUp = pages.extrasPage.priorityBagsPopUp().isPresent();

            if(priorityBagPopUp) {
                pages.extrasPage.priorityBagsPopUp().click();
                browser.sleep(500); 

            }

        }
        return pages.extrasPage.checkOutButton().click();            

    }
      
    
    this.addPriorityQueueBag = function (option) {      

        if(option === "add") {                      
            pages.extrasPage.choosePriorityQueueBag().click(); 
            browser.sleep(2000);
        }
        else {
            pages.extrasPage.chooseSmallBag().click();  
            browser.sleep(2000);            
        }
        pages.extrasPage.confirmBags().click();
        browser.sleep(2000);
        this.checkout(); 
    }
    


    this.checkout = function () {      
        pages.extrasPage.checkOutButton().click();
        browser.sleep(3000);
        var popup = pages.extrasPage.chooseSeatsPopUp().isPresent(); 
              
        if(popup) {
            return pages.extrasPage.chooseSeatsPopUp().click();
        } else {
            return;
        }   
          
    }

}

module.exports = extrasPageActions;