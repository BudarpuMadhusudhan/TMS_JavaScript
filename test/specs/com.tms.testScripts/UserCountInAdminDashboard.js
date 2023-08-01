
describe('UserCountInAdminDashboard',async()=>{
    it('UserCountInAdminDashboard',async()=>{
       await browser.url("http://rmgtestingserver/domain/Online_Tourism_Management_System/")
       await browser.maximizeWindow()
       /* User First*/ 
       await browser.$("//a[text()='Sign Up']").click()
       let ran =Math.round(Math.random()*1000);   
       await browser.$('[name="fname"]').setValue("Budarpu Madhusudhan")
       await browser.$('[name="mobilenumber"]').setValue("897106468"+ran)
       await browser.$('[name="email"]').setValue("budarpuMadhu"+ran+"@gmail.com")
       await browser.$('[name="password"]').setValue("madhu"+ran)
       await browser.$('//input[@name="submit"]').click();

       /*Admin Login*/
     await $("//a[text()='Admin Login']").click()
     await browser.$('[name="username"]').setValue("admin")
     await browser.$('[name="password"]').setValue("Test@123")
     await browser.$('[name="login"]').click()

     /* Take user frist count in admin Dashboard*/ 
     var count=await browser.$("//h3[text()='User']/./..//h4").getText()
     typeof(Number(count))
     var count1=count
     console.log(count1);

    /* Admin Logout*/
   var welcomebutton=await browser.$('//div[@class="user-name"]').click()
   await  browser.$('//a[@href="logout.php"]').click()
   await browser.$("//a[text()='Back to home']").click()


   /* User Second*/ 
   await browser.$("//a[text()='Sign Up']").click()
   let ran1 =Math.round(Math.random()*100);   
   await browser.$('[name="fname"]').setValue("Budarpu Madhusudhan")
   await browser.$('[name="mobilenumber"]').setValue("897106468"+ran1)
   await browser.$('[name="email"]').setValue("budarpuMadhu"+ran1+"@gmail.com")
   await browser.$('[name="password"]').setValue("madhu"+ran1)
   await browser.$('//input[@name="submit"]').click();

   /*Admin Login*/
 await $("//a[text()='Admin Login']").click()
 await browser.$('[name="username"]').setValue("admin")
 await browser.$('[name="password"]').setValue("Test@123")
 await browser.$('[name="login"]').click()


 /* Take user second count in admin Dashboard*/ 
 await browser.pause(2000)
 await browser.$("//h3[text()='User']/./..//h4").waitForDisplayed({timeout:2000})
 var count=await browser.$("//h3[text()='User']/./..//h4").getText()
 typeof(Number(count))
var count2=count

 /* Admin Logout*/
 var welcomebutton=await browser.$('//div[@class="user-name"]').click()
 await  browser.$('//a[@href="logout.php"]').click()
 await browser.$("//a[text()='Back to home']").click()

 /*Verify user count is increased in admin dashboard*/
 if(count2>count1)
 {
    console.log("****************************************User COUNT is increased in Admin Dashboard now the count is "+count2);
 }
await browser.pause(5000)
})
})