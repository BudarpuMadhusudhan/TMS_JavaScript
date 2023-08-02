class PackageListPage
{
    get DetailsButton()
    {
      return $("(//a[text()='Details'])[last()]")
    }

    get fromDate()
    {
      return $('[name="fromdate"]')
    }

    get toDate()
  {
    return $('[name="todate"]')
  }

   get comment()
   {
    return $('//input[@name="comment"]')
   }

  get bookButton()
  {
    return $("//button[text()='Book']")
  }

  get userBookingMsg()
{
  return $('//div[@class="succWrap"]')
}
async verifyUserBookingMsg()
{
  var bookingMsg=await this.userBookingMsg.getText()
  await expect(bookingMsg).toContain("Booked Successfully")
} 

}

export default new PackageListPage()