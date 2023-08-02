class UserSignUpPage
{
    get fullName()
    {
     return $('[name="fname"]')
    }

    get mobileNum()
    {
        return $('[name="mobilenumber"]')
    }

    get Email()
    {
        return $('[name="email"]')
    }

    get password()
    {
        return $('[name="password"]')
    }

    get submitButton()
    {
        return $('//input[@name="submit"]')
    }

    async userSignUP(fullname,mobile,email,pwd)
    {
         await this.fullName.setValue(fullname)
         await this.mobileNum.setValue(mobile)
         await this.Email.setValue(email)
         await this.password.setValue(pwd)
         await this.submitButton.click()
    }
}

export default new UserSignUpPage()