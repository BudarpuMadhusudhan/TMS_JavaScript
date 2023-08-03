class AdminManageIssuePage
{
    get viewLink()
    {
        return $("(//tbody/tr)[last()]/td[8]/span")
    }

    get remark()
    {
        return $('[name="remark"]')
    }

    get submitBUtton()
    {
        return $('[name="submit2"]')
    }

    get message()
    {
        return $('//div[@class="succWrap"]') 
    }
}


export default new AdminManageIssuePage()