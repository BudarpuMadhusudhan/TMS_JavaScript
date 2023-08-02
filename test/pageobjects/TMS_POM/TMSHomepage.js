class TMSHomepage
{
    get adminLoginButtonelementt()
    {
        return $("//a[text()='Admin Login']")
    }

    get userSignInButton()
    {
      return $("//a[text()='/ Sign In']")
    }
    
    get userUserName()
    {
        return $('//div[@id="myModal4"]//input[@id="email"]')
    }

    get userPassword()
    {
        return $('#password')
    }

    get userSignIn()
    {
        return $('[name="signin"]')
    }
    get userlogoutButton()
    {
        return $("//a[text()='/ Logout']")
    }

    get myTourHistory()
    {
        return $("//a[text()='My Tour History']")
    }

    get comfirmMsgBlock()
    {
        return $('(//tbody/tr)[last()]/td[7]')
    }
    
    get cancelbookingLink()
    {
        return $("(//tbody/tr)[last()]/td[9]/a[text()='Cancel']")
    }

    get bookingCancelMsg()
    {
        return $("//div[contains(text(),':Booking Cancelled successfully ')]")
    }

    get userSignUP()
    {
        return $("//a[text()='Sign Up']")
    }

    async adminLoginButton()
    {
        await this.adminLoginButtonelementt.click()
    }
    

    async userLogin(username,password)
    {
    await this.userSignInButton.click()
    await this.userUserName.setValue(username)
    await this.userPassword.setValue(password)
    await this.userSignIn.click()
    }
    
    async verifyCancelBookingMsg()
    {
       await this.bookingCancelMsg.waitForDisplayed({timeout:10000})
       var expectedMsg =await this.bookingCancelMsg.getText()
       expect(expectedMsg)===("SUCCESS:Booking Cancelled successfully")
    }

}

export default new TMSHomepage()