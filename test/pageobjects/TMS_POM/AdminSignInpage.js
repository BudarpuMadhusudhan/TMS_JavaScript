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

    adminLogin(username,password)
    {
        this.adminusername.setValue(username)
        this.adminpassword.setValue(password)
        this.signinButton.click()
    }

  
}
export default new AdminSignInPage()