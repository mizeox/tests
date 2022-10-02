require("chromedriver");

const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

(async function example() {
    //open Chrome
    let driver = await new Builder().forBrowser("chrome").build();

        try {
            //open the website
            await driver.get("https://weathershopper.pythonanywhere.com");
            
            // find temperature
            // let temp = await driver.findElement(By.id('temperature'));
            // await driver.wait(until.elementIsVisible(temp), 10000);

            let temp = await driver.wait(until.elementLocated(By.id('temperature')), 10 * 1000);
            
            console.log("temp is: " + temp.getAttribute('innerHTML'));
            console.log("temp is: " + temp.getText());
            
            temp = String(temp.getText());
            temp.replace(' ℃', '');
            // console.log(typeof temp);
            temp = Number(temp);
            // console.log(typeof temp);
            console.log("temperature is: " + temp);

            if(temp < 19) {
                await driver.get('https://weathershopper.pythonanywhere.com/moisturizer');
                // let item = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[1]"));
                // console.log("item is: " + item.getLocation);

            } else {
                await driver.get('https://weathershopper.pythonanywhere.com/sunscreen');
                // let firstItem = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div[1]'));
                // console.log("first item is: " + firstItem);
                // let p = firstItem.findElement(By.xpath('//p[contains(text(), "Price")]'));
                // console.log("p is: " + p);
                // let price = p.getText();
                // console.log("Item name is: " + price);
            }

        } finally {
            await driver.quit();
        }
})();