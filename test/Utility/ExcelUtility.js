import excel from 'exceljs'
class FetchExcelData
{
    async getExceldata(sheetname,row,cell)
    {
        const book =new excel.Workbook()
        await book.xlsx.readFile("C:/Users/user/Desktop/TMS/ExcelData.xlsx")
        const sheet=book.getWorksheet(sheetname)
        let data=sheet.getRow(row).getCell(cell).toString()
        return data 
    }
}

export default new FetchExcelData()



