import AdminSignInpage from "../../pageobjects/TMS_POM/AdminSignInpage.js";
import TMSHomepage from "../../pageobjects/TMS_POM/TMSHomepage.js";
import AdminDashboardPage from "../../pageobjects/TMS_POM/AdminDashboardPage.js";
import AdminPackageCreation from "../../pageobjects/TMS_POM/AdminPackageCreation.js";
import ExcelUtility from "../../Utility/ExcelUtility.js";
import PackageListPage from "../../pageobjects/TMS_POM/PackageListPage.js";

describe("UserCancelBookingPOM",async()=>{
    it('UserCancelBookingTest',async()=>{
        var URL=await ExcelUtility.getExceldata("TMS",2,2)
       var ADMINUSERNAME=await ExcelUtility.getExceldata("TMS",3,2)
       var ADMINPASSWORD=await ExcelUtility.getExceldata("TMS",4,2)
       var USERUSERNAME=await ExcelUtility.getExceldata("TMS",5,2)
       var USERPASSWORD=await ExcelUtility.getExceldata("TMS",6,2)
       var PACKAGENAME=await ExcelUtility.getExceldata("TMS",9,1)
       var PACKAGETYPE=await ExcelUtility.getExceldata("TMS",9,2)
       var PACKAGELOC=await ExcelUtility.getExceldata("TMS",9,3)
       var PACKAGEPRICE=await ExcelUtility.getExceldata("TMS",9,4)
       var PACKAGEFEATURE=await ExcelUtility.getExceldata("TMS",9,5)
       var PACKAGEDETAILS=await ExcelUtility.getExceldata("TMS",9,6)
       var PACKAGEIMAGEPATH=await ExcelUtility.getExceldata("TMS",9,7)
       var FROMDATE=await ExcelUtility.getExceldata("TMS",12,1)
       var TODATE=await ExcelUtility.getExceldata("TMS",12,2)
       var COMMENT=await ExcelUtility.getExceldata("TMS",12,3)
       /*Opening Browser*/ 
        await browser.url(URL)
        await browser.maximizeWindow()
    
      /*Admin Login*/ 
       await TMSHomepage.adminLoginButton();
       await  AdminSignInpage.adminLogin(ADMINUSERNAME,ADMINPASSWORD)
       
       /*Admin Create's package */
      await AdminDashboardPage.tourpackagetab.moveTo()
      await AdminDashboardPage.createpackagetab.click()
      await AdminPackageCreation.createPackage(PACKAGENAME,PACKAGETYPE,PACKAGELOC,PACKAGEPRICE,PACKAGEFEATURE,PACKAGEDETAILS)
      await AdminPackageCreation.createButton.scrollIntoView()
      await AdminPackageCreation.packageImage.setValue(PACKAGEIMAGEPATH)
      await AdminPackageCreation.createButton.click()

   /* verify admin package creation*/ 
      await AdminPackageCreation.packageCreatedMsg.waitForDisplayed({timeout:2000})
      await  AdminPackageCreation.verifyPackageCreation() 

    /* Admin Logout*/
     await AdminDashboardPage.adminLogout()
     await AdminSignInpage.returnHome.click()
   
    /*User Login*/ 
    await TMSHomepage.userLogin(USERUSERNAME,USERPASSWORD)
    

    /*User Booking his ticket */
    await PackageListPage.DetailsButton.scrollIntoView()
    await PackageListPage.DetailsButton.isClickable()
    await PackageListPage.DetailsButton.click()
    await PackageListPage.fromDate.setValue(FROMDATE)
    await PackageListPage.toDate.setValue(TODATE)
    await PackageListPage.bookButton.scrollIntoView()
    await PackageListPage.comment.setValue(COMMENT)
    await PackageListPage.bookButton.click()

    /*verify booking by user*/ 
    await PackageListPage.verifyUserBookingMsg()

     /*User Cancel his ticket*/
    await TMSHomepage.myTourHistory.click()
    await TMSHomepage.cancelbookingLink.scrollIntoView()
    await TMSHomepage.cancelbookingLink.isClickable()
    await TMSHomepage.cancelbookingLink.click()
    await browser.acceptAlert()

    /*verify Booking Cancellation*/
     await TMSHomepage.verifyCancelBookingMsg()

    /*user logout*/
    await TMSHomepage.userlogoutButton.scrollIntoView()
    await TMSHomepage.userlogoutButton.click()
    })
})