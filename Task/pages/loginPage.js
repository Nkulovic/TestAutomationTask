var LoginPage = function () {

    this.inputEmailAddress = function () {
        return element(by.css('[name="emailAddress"]'));
    };

    this.inputPassword = function () {
        return element(by.css('.modal-form-container [name="password"]'));
    };
    
    this.loginButton = function () {
        return element(by.css('.modal-form-group [type="submit"]'))
    };
}

module.exports = LoginPage;