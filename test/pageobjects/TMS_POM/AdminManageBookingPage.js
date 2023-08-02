class AdminManageBookingPage
{
    get bookingConfirmButton()
  {
    return $("(//tbody/tr)[last()]/td[9]/span/a[text()='Confirm']")
  }

  get adminConfirmMSg()
  {
    return $('//div[@class="succWrap"]')
  }

}
export default new AdminManageBookingPage()