describe('UserCancelBooking' ,async ()=>{
    it('UserCancelBookingTest',async()=>{
    await browser.url("http://rmgtestingserver/domain/Online_Tourism_Management_System/")
    await browser.maximizeWindow()
    /*Admin Login*/
    await $("//a[text()='Admin Login']").click()
    await browser.$('[name="username"]').setValue("admin")
    await browser.$('[name="password"]').setValue("Test@123")
    await browser.$('[name="login"]').click()

    /*Admin Create's package */
    var mouseTourPackage=await browser.$("//span[text()=' Tour Packages']")
    await mouseTourPackage.moveTo()
    await browser.$("//a[text()='Create']").click()
    await browser.$('[name="packagename"]').setValue("OotyTour")
    await browser.$('[name="packagetype"]').setValue("Couple Package")
    await browser.$('[name="packagelocation"]').setValue("Ooty")
    await browser.$('[name="packageprice"]').setValue("$200")
    await browser.$('[name="packagefeatures"]').setValue("recoMMENDED")
    await browser.$('[name="packagedetails"]').setValue("Free pick up and drop")
    var createButton=await browser.$("//button[text()='Create']")
    await createButton.isClickable()
    await createButton.scrollIntoView()
    await browser.$('[name="packageimage"]').setValue("C:/Users/user/Desktop/TMS/pic.png")
    await createButton.click()

    /*Verfiying package creation*/
    var expectedCreatedMsg=await browser.$('//div[@class="succWrap"]').getText()
    await expect(expectedCreatedMsg).("Package Created Successfully")
    
  /* Admin Logout*/
    await browser.$('//div[@class="user-name"]').click()
    await  browser.$('//a[@href="logout.php"]').click()
    await browser.$("//a[text()='Back to home']").click()

    /*User Login*/ 
     await browser.$("//a[text()='/ Sign In']").click()
     await browser.$('//div[@id="myModal4"]//input[@id="email"]').setValue("anuj@gmail.com")
     await browser.$('#password').setValue("Test@123")
     await browser.$('[name="signin"]').click()
    
     /*User Booking his ticket */
     var detailsButton=await browser.$("(//a[text()='Details'])[last()]")
     await detailsButton.scrollIntoView()
     await detailsButton.isClickable()
     await detailsButton.click()
     await browser.$('[name="fromdate"]').setValue("22-2-2022")
     await browser.$('[name="todate"]').setValue('22-2-2222')
     var bookButton=await browser.$("//button[text()='Book']")
     bookButton.scrollIntoView()
     await browser.$('//input[@name="comment"]').setValue("I am intrested")
     bookButton.click()

     /*verify booking by user*/ 
     var bookingMsg=await browser.$('//div[@class="succWrap"]').getText()
     await expect(bookingMsg).toContain("Booked Successfully")

   /*User Cancel his ticket*/
     var cancelLink=await browser.$("//a[text()='My Tour History']")
     await cancelLink.scrollIntoView()
     await cancelLink.isClickable()
     await cancelLink.click()
     await browser.$("(//tbody/tr)[last()]/td[9]/a[text()='Cancel']").click()
     await browser.pause(2000)
   await browser.acceptAlert()

   /*verify Booking Cancellation*/
   await browser.$('//div[@class="succWrap"]').waitForDisplayed({timeout:2000})
     var ticketCancelMsg = await browser.$('//div[@class="succWrap"]').getText()
     console.log(ticketCancelMsg);

    /*user logout*/
     var userlogoutButton=await browser.$("//a[text()='/ Logout']")
     userlogoutButton.scrollIntoView()
     userlogoutButton.click()
    })
})