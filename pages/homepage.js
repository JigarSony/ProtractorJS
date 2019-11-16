//calculator page

let homepage = function () {

    let firstNumber_input = element(by.model('first'));
    let secondtNumber_input = element(by.model('second'));
    let goButton_input = element(by.css('[ng-click="doAddition()"]'));

    this.get = (url) => {
        browser.get(url)
    };

    this.enterFirstNumber = function (firstNo) {
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function (secondNo) {
        secondtNumber_input.sendKeys(secondNo);
    };

    this.clickonGoButton = () => {
        goButton_input.click();
    };

    this.verifyResult = (result) => {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText(), result);
    };

};

module.exports = new homepage();