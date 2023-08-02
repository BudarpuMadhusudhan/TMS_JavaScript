class AdminSignInPage
{
    get adminusername()
    {
        return $('[name="username"]')
    }

    get adminpassword()
    {
        return $('[name="password"]')
    }

    get signinButton()
    {
        return $('[name="login"]')
    }

    get returnHome()
    {
        return $("//a[text()='Back to home']")
    }

   async adminLogin(username,password)
    {
       await this.adminusername.setValue(username)
       await this.adminpassword.setValue(password)
       await this.signinButton.click()
    }

  
}
export default new AdminSignInPage()