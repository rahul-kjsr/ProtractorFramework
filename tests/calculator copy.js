describe('demo calculator tests', function(){

    it('addition',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('5');

        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding','7'));

        expect(result.getText()).toEqual('7');

        browser.sleep(2000);
    });
});