const webdriver = require('selenium-webdriver');

(async function test() {
    
    var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {'args' : ['--headless']};
    chromeCapabilities.set('chromeOptions', chromeOptions);

    let driver = await new webdriver.Builder().withCapabilities(chromeCapabilities).forBrowser('chrome').build();

    console.log('-> here so far');
    try{
        await driver.get('http://www.master-maroc.com/emploi/');
        let items = await driver.findElements(webdriver.By.xpath("//td[@headers='tableOrdering']/a"));
        console.log('------------------------------');
        for (let i = 0; i < items.length; i++) {
            const e = items[i];
            let href = await e.getAttribute('href');
            console.log('-> '+ decodeURI(href));
        }
    }
    catch(e){
        console.log(e);
    }
    finally{
        await driver.quit();
    }
})();