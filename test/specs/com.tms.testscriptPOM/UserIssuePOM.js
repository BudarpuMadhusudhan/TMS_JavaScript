import AdminSignInpage from "../../pageobjects/TMS_POM/AdminSignInpage.js";
import TMSHomepage from "../../pageobjects/TMS_POM/TMSHomepage.js";
import AdminDashboardPage from "../../pageobjects/TMS_POM/AdminDashboardPage.js";
import AdminPackageCreation from "../../pageobjects/TMS_POM/AdminPackageCreation.js";
import ExcelUtility from "../../Utility/ExcelUtility.js";
import PackageListPage from "../../pageobjects/TMS_POM/PackageListPage.js";
import AdminManageBookingPage from "../../pageobjects/TMS_POM/AdminManageBookingPage.js";
import UserSignUpPage from "../../pageobjects/TMS_POM/UserSignUpPage.js";
import ConfirmationPage from "../../pageobjects/TMS_POM/ConfirmationPage.js";
import { expect } from "chai";
import AdminManageIssuePage from "../../pageobjects/TMS_POM/AdminManageIssuePage.js";

describe('UserIssuePOM',async()=>{
    it('UserIssuePOMTest',async()=>{
        var URL=await ExcelUtility.getExceldata("TMS",2,2)
        var ADMINUSERNAME=await ExcelUtility.getExceldata("TMS",3,2)
        var ADMINPASSWORD=await ExcelUtility.getExceldata("TMS",4,2)
        var USERUSERNAME=await ExcelUtility.getExceldata("TMS",5,2)
        var USERPASSWORD=await ExcelUtility.getExceldata("TMS",6,2)
        var TEXT=await ExcelUtility.getExceldata("TMS",18,1)
        var DESCRIPTION=await ExcelUtility.getExceldata("TMS",18,2)
        var REMARKS=await ExcelUtility.getExceldata("TMS",18,3)
        
        /*Opening Browser*/ 
         await browser.url(URL)
         await browser.maximizeWindow() 
         
         /*User Login*/ 
         await TMSHomepage.userLogin(USERUSERNAME,USERPASSWORD)

        /*Issue raising by user*/
         await TMSHomepage.writeIssue.click()
         await PackageListPage.SelectIssue.selectByVisibleText(TEXT)
        await PackageListPage.IssueDescription.setValue(DESCRIPTION)
        await PackageListPage.submitButton.click()

       /*verify user raised*/
       expect(await ConfirmationPage.cofirmationMsg.waitForDisplayed({timeout:2000})).to.be.equal
       var expectedMsg=await ConfirmationPage.cofirmationMsg.getText()
       expect(expectedMsg).to.be.contains("Info successfully submited")

     /*user logout*/
    await TMSHomepage.userlogoutButton.scrollIntoView()
    await TMSHomepage.userlogoutButton.click()

    /*Admin Login*/ 
    await TMSHomepage.adminLoginButton();
    await  AdminSignInpage.adminLogin(ADMINUSERNAME,ADMINPASSWORD)

    /*Admin look on issue*/
     await AdminDashboardPage.manageIssue.click()
     await browser.pause(2000)
     expect(await AdminManageIssuePage.viewLink.waitForDisplayed({timeout:2000})).to.be.equals
     await AdminManageIssuePage.viewLink.scrollIntoView()
     await AdminManageIssuePage.viewLink.isClickable()
     await AdminManageIssuePage.viewLink.click()
     await browser.switchWindow("Update Compliant")
     await AdminManageIssuePage.remark.setValue(REMARKS)
     await AdminManageIssuePage.submitBUtton.click()

     /*verifying issue remarks*/
     var remarkMsg=await (await AdminManageIssuePage.message).getText()
     expect(remarkMsg).to.be.contains("SUCCESS:Remark successfully Updated")
     await browser.switchWindow("TMS | Admin manage Issues") 
     await browser.pause(1000) 
   
     /* Admin Logout*/
    await AdminDashboardPage.welcomeButon.scrollIntoView()
    await AdminDashboardPage.welcomeButon.isClickable()
    await AdminDashboardPage.adminLogout()
    await AdminSignInpage.returnHome.click()
     
    /*User Login*/ 
    await TMSHomepage.userLogin(USERUSERNAME,USERPASSWORD)

    /*User checks the remarks in issueticket*/
    await TMSHomepage.issueTicket.click()
    var AdminremarkMsg=  await TMSHomepage.remarkMsgView.getText()
    console.log(AdminremarkMsg); 

    /*user logout*/
    await TMSHomepage.userlogoutButton.scrollIntoView()
    await TMSHomepage.userlogoutButton.click()
    })
})