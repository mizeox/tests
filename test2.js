require("chromedriver");

const { Builder, By, Key} = require("selenium-webdriver");
const assert = require("assert");

(async function example() {
  //open Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    //open the website
    await driver.get("https://victoria-lo.github.io/bulletin-board/");

    //find the search box and enter a note
    await driver.findElement(By.xpath('//*[@id="new-item"]/input')).sendKeys("Hello Selenium", Key.RETURN);

    //get the note's text
    let note = await driver.findElement(By.xpath('//*[@id="items"]/div/p')).getText();

    //assert that the note's text is the same as the input text "Hello Selenium"
    assert.strictEqual(note, "Hello Selenium");
    console.log("TEST PASSED");

  } finally {
    //close the browser
    await driver.quit();
  }
})();