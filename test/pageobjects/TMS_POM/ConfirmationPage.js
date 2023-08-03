class ConfirmationPage
{
    get cofirmationMsg()
    {
        return $("//h4[text()='  Info successfully submited ']")
    }
}
export default new ConfirmationPage()