describe('UserIssue',async()=>{
    it('UserIssue',async()=>{
     browser.url("http://rmgtestingserver/domain/Online_Tourism_Management_System/")
     browser.maximizeWindow()

      /*User Login*/ 
      await browser.$("//a[text()='/ Sign In']").click()
      await browser.$('//div[@id="myModal4"]//input[@id="email"]').setValue("anuj@gmail.com")
      await browser.$('#password').setValue("Test@123")
      await browser.$('[name="signin"]').click()
     
      /*Issue raising by user*/
      await browser.$("//a[text()=' / Write Us ']").click()
      await browser.$('//select[@name="issue"]').selectByVisibleText("Refund")
      await browser.$('[name="description"]').setValue("See, I am fed Up by ur service")
      await browser.$("//button[text()='Submit']").click()

      /*verify user raised*/
      await browser.pause(2000)
      var issueRaisedMsg=await browser.$("//h4[text()='  Info successfully submited ']").getText()
      console.log(issueRaisedMsg);

      /*user logout*/
    var userlogoutButton=await browser.$("//a[text()='/ Logout']")
    userlogoutButton.scrollIntoView()
    userlogoutButton.click()

     /*Admin Login*/
     await $("//a[text()='Admin Login']").click()
     await browser.$('[name="username"]').setValue("admin")
     await browser.$('[name="password"]').setValue("Test@123")
     await browser.$('[name="login"]').click()

     /*Admin look on issue*/
     await browser.$("//span[text()='Manage Issues']").click()
     var viewlink=await browser.$("(//tbody/tr)[last()]/td[8]/span")
     await viewlink.scrollIntoView()
     await viewlink.isClickable()
     await viewlink.click()
     await browser.switchWindow("Update Compliant")
     await browser.$('[name="remark"]').setValue(" Dont Worry macha ur issue will be solved soon")
     await browser.$('[name="submit2"]').click()
     
     /*verifying issue remarks*/
     var remarkMsg=await browser.$('//div[@class="succWrap"]').getText()
     console.log(remarkMsg);
     await browser.switchWindow("TMS | Admin manage Issues")  
     
    /* Admin Logout*/
   var welcomebutton=await browser.$('//div[@class="user-name"]')
    await welcomebutton.scrollIntoView()
    await welcomebutton.isClickable()
    await welcomebutton.click()
    await  browser.$('//a[@href="logout.php"]').click()
    await browser.$("//a[text()='Back to home']").click()

    /*User Login*/ 
    await browser.$("//a[text()='/ Sign In']").click()
    await browser.$('//div[@id="myModal4"]//input[@id="email"]').setValue("anuj@gmail.com")
    await browser.$('#password').setValue("Test@123")
    await browser.$('[name="signin"]').click()

    /*User checks the remarks in issueticket*/
    await browser.$("//a[text()='Issue Tickets']").click()
    var AdminremarkMsg=await browser.$("(//tbody/tr)[last()]/td[5]").getText()
    console.log(AdminremarkMsg);
    
      /*user logout*/
      var userlogoutButton=await browser.$("//a[text()='/ Logout']")
      userlogoutButton.scrollIntoView()
      userlogoutButton.click()

    await browser.pause(2000)
    })
})