import AdminSignInpage from "../../pageobjects/TMS_POM/AdminSignInpage.js";
import TMSHomepage from "../../pageobjects/TMS_POM/TMSHomepage.js";
import AdminDashboardPage from "../../pageobjects/TMS_POM/AdminDashboardPage.js";
import AdminPackageCreation from "../../pageobjects/TMS_POM/AdminPackageCreation.js";
import ExcelUtility from "../../Utility/ExcelUtility.js";
import PackageListPage from "../../pageobjects/TMS_POM/PackageListPage.js";
import AdminManageBookingPage from "../../pageobjects/TMS_POM/AdminManageBookingPage.js";
import { expect } from "chai";

describe('UserBookingPOM',async ()=>{
    it('UserBookingPOMTest',async()=>{
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
      expect(AdminPackageCreation.packageCreatedMsg.waitForDisplayed({timeout:2000})).to.be.equals
      var Expectedmsg=await  AdminPackageCreation.packageCreatedMsg.getText()
      expect(Expectedmsg).to.be.contains("Package Created Successfully")

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
    var bookingMsg=await PackageListPage.userBookingMsg.getText()
    expect(bookingMsg).to.be.contains("Booked Successfully")

    /*user logout*/
    await TMSHomepage.userlogoutButton.scrollIntoView()
    await TMSHomepage.userlogoutButton.click()

    /*Admin Login*/ 
    await TMSHomepage.adminLoginButton();
    await  AdminSignInpage.adminLogin(ADMINUSERNAME,ADMINPASSWORD)


   /*Admin confirming user tickets*/
   await AdminDashboardPage.manageBooking.click()
   await AdminManageBookingPage.bookingConfirmButton.waitForDisplayed({timeout:2000})
   await AdminManageBookingPage.bookingConfirmButton.scrollIntoView()
   await AdminManageBookingPage.bookingConfirmButton.isClickable()
   await AdminManageBookingPage.bookingConfirmButton.click()
   await browser.acceptAlert()
   await AdminManageBookingPage.adminConfirmMSg.getText()

    /* Admin Logout*/
    await AdminDashboardPage.adminLogout()
    await AdminSignInpage.returnHome.click()
     
    /*User Login*/ 
    await TMSHomepage.userLogin(USERUSERNAME,USERPASSWORD)


    /* user seeing this boiking status*/  
     await TMSHomepage.myTourHistory.click()
     var CM=await TMSHomepage.comfirmMsgBlock.getText()
     console.log(CM);

    /*user logout*/
    await TMSHomepage.userlogoutButton.scrollIntoView()
    await TMSHomepage.userlogoutButton.click()

    await browser.pause(5000)
    })
})