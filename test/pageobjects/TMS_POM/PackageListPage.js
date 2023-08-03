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

   get SelectIssue()
   {
    return $('//select[@name="issue"]')
   }

   get IssueDescription()
   {
    return $('[name="description"]')
   }

   get submitButton()
   {
    return $("//button[text()='Submit']")
   }


}

export default new PackageListPage()