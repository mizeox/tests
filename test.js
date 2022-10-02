require("chromedriver");

const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.google.com');
        await driver.findElement(By.xpath('//*[@id="L2AGLb"]/div')).click();
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Szukaj w Google'), 1000);
    } finally {
        await driver.quit();
    }
}

example();