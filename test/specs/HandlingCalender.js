describe('handlingCalender',async()=>{
    it('handlingCalenderTest',async()=>{
        browser.url("https://www.goibibo.com/")
        await browser.maximizeWindow()
        await browser.pause(2000)
        await browser.$('//span[@class="logSprite icClose"]').click()
        await browser.$("(//span[text()='Departure'])[1]").click()
        await browser.$("//div[text()='September 2023']/../..//p[text()='4']").click()
        await browser.$("//span[text()='Done']").click()
        await browser.$("//a[text()='Cancel']").click()
        await browser.pause(1000)
        await browser.$("//span[text()='Return']").click()
        await browser.$("//div[text()='October 2023']/../..//p[text()='31']").click()
        await browser.$("//span[text()='Done']").click()
        await browser.pause(2000)
    })
})