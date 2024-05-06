const wd = require("wd");
const desiredCaps = {
  platformName: "Android",
  deviceName: "emulator-5554", // Update this with your emulator name
  appPackage: "com.android.calculator2",
  appActivity: ".Calculator"
};

const driver = wd.promiseChainRemote("http://localhost:4723/wd/hub");

async function runCalculatorAutomation() {
  try {
    await driver.init(desiredCaps);
    console.log("Calculator app started.");

    const number5 = await driver.elementByAccessibilityId("digit_5");
    await number5.click();

    const plus = await driver.elementByAccessibilityId("op_add");
    await plus.click();
 
    const number3 = await driver.elementByAccessibilityId("digit_3");
    await number3.click();

    const equals = await driver.elementByAccessibilityId("eq");
    await equals.click();

    const result = await driver.elementByAccessibilityId("result_preview");
    const resultText = await result.text();
    console.log(`Result: ${resultText}`);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await driver.quit();
  }
}

runCalculatorAutomation();
