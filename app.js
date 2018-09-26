const webdriver = require('selenium-webdriver');

(async function test() {
    
    var chromeCapabilities = webdriver.Capabilities.chrome();
    /*var chromeOptions = {'args' : ['--headless']};
    chromeCapabilities.set('chromeOptions', chromeOptions);*/

    let driver = await new webdriver.Builder().withCapabilities(chromeCapabilities).forBrowser('chrome').build();

    console.log('-> here so far');
    try{
        await driver.get('http://www.master-maroc.com/emploi/');
        let items = await driver.findElements(webdriver.By.xpath("//td[@headers='tableOrdering']/a"));
        // items we get are a list of promise objects
        console.log('------------------------------');
        console.log('first item : '+items[0].getText());
        
    }
    catch(e){
        console.log(e);
    }
    finally{
        await driver.quit();
    }
})();