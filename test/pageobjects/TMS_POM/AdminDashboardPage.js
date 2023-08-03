class AdminDashoardpage
{
    get tourpackagetab()
    {
        return $("//span[text()=' Tour Packages']")
    }

  get createpackagetab()
  {
    return $("//a[text()='Create']")
  }
  
  get welcomeButon()
  {
    return $('//div[@class="user-name"]')
  }

  get logoutButton()
  {
      return $('//a[@href="logout.php"]')
  }
  get manageBooking()
  {
    return $("//span[text()='Manage Booking']")
  }

  get userCount()
  {
    return $("//h3[text()='User']/./..//h4")
  }

  get manageIssue()
  {
    return $("//span[text()='Manage Issues']")
  }
  async adminLogout()
  {
    await this.welcomeButon.click()
    await this.logoutButton.click()
  }
}
export default new AdminDashoardpage()