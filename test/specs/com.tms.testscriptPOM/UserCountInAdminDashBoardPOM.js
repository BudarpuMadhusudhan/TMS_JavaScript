import AdminSignInpage from "../../pageobjects/TMS_POM/AdminSignInpage.js";
import TMSHomepage from "../../pageobjects/TMS_POM/TMSHomepage.js";
import AdminDashboardPage from "../../pageobjects/TMS_POM/AdminDashboardPage.js";
import AdminPackageCreation from "../../pageobjects/TMS_POM/AdminPackageCreation.js";
import ExcelUtility from "../../Utility/ExcelUtility.js";
import PackageListPage from "../../pageobjects/TMS_POM/PackageListPage.js";
import AdminManageBookingPage from "../../pageobjects/TMS_POM/AdminManageBookingPage.js";
import UserSignUpPage from "../../pageobjects/TMS_POM/UserSignUpPage.js";

describe('UserCountInAdminDashBoardPOM',async()=>{
    it('UserCountInAdminDashBoardPOMTest',async()=>{
        var URL=await ExcelUtility.getExceldata("TMS",2,2)
        var ADMINUSERNAME=await ExcelUtility.getExceldata("TMS",3,2)
        var ADMINPASSWORD=await ExcelUtility.getExceldata("TMS",4,2)
        var FULLNAME=await ExcelUtility.getExceldata("TMS",15,1)
        var MOBILE=await ExcelUtility.getExceldata("TMS",15,2)
        var EMAIL=await ExcelUtility.getExceldata("TMS",15,3)
        var PASSWORD=await ExcelUtility.getExceldata("TMS",15,4)

         /*Opening Browser*/ 
         await browser.url(URL)
         await browser.maximizeWindow()

        /* User First*/ 
         await TMSHomepage.userSignUP.click()
         let ran= Math.trunc(Math.random()*1000)
         await UserSignUpPage.userSignUP(FULLNAME,MOBILE+ran,ran+EMAIL,PASSWORD+ran)

         /*Admin Login*/ 
         await TMSHomepage.adminLoginButton();
         await  AdminSignInpage.adminLogin(ADMINUSERNAME,ADMINPASSWORD)

        /* Take user frist count in admin Dashboard*/ 
        var count=await AdminDashboardPage.userCount.getText()
        typeof(Number(count))
        var count1=count
      
        /*Admin Logout*/
        await AdminDashboardPage.adminLogout()
        await AdminSignInpage.returnHome.click()
        
        /* User Second*/ 
        await TMSHomepage.userSignUP.click()
        let ran1= Math.trunc(Math.random()*100)
        await UserSignUpPage.userSignUP(FULLNAME,MOBILE+ran1,ran1+EMAIL,PASSWORD+ran1)

        /*Admin Login*/ 
        await TMSHomepage.adminLoginButton();
        await  AdminSignInpage.adminLogin(ADMINUSERNAME,ADMINPASSWORD)

       /* Take user frist count in admin Dashboard*/ 
       var count=await AdminDashboardPage.userCount.getText()
       typeof(Number(count))
       var count2=count

        /*Admin Logout*/
        await AdminDashboardPage.adminLogout()
        await AdminSignInpage.returnHome.click()

         /*Verify user count is increased in admin dashboard*/
        if(count2>count1)
         {
           console.log("***************User COUNT is increased in Admin Dashboard now the count is************ "+count2);
         }
    })
})