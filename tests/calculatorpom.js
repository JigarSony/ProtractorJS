let homepage = require('../pages/homepage');

describe('demo calculator test',function(){

    it('addition test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        browser.sleep(2000);
       //element(by.model('first')).sendKeys('2');
       homepage.enterFirstNumber('2');

       //element(by.model('second')).sendKeys('3');
       homepage.enterSecondNumber('3');

       //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickonGoButton();

       //let result = element(by.cssContainingText('.ng-binding','5'));
       //expect(result.getText(),'5'); 

       homepage.verifyResult('5');
        
       //protractor snippet 
       //shortcut ebmod - element by model ...
       //https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-protractor-snippets
       
        browser.sleep(2000);
    })

    // it('subtraction test',function(){

    // })
});