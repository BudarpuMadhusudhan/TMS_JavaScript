class AdminPackageCreation
{
   get packageName()
   {
    return $('[name="packagename"]')
   }

   get packageType()
   {
    return $('[name="packagetype"]')
   }

   get packageLocation()
   {
     return $('[name="packagelocation"]')
   }

   get packagePrice()
   {
    return $('[name="packageprice"]')
   }

   get packageFeature()
   {
    return $('[name="packagefeatures"]')
   }

   get packageDetails()
   {
     return $('[name="packagedetails"]')
   }
   
   get packageImage()
   {
    return $('[name="packageimage"]')
   }

   get createButton()
   {
    return $("//button[text()='Create']")
   }

   get packageCreatedMsg()
   {
    return $("//div[contains(text(),':Package Created Successfully ')]")
   }
   
   async createPackage(packagename,packagetype,packagelocation,packageprice,packagefeature,packagedetails)
   {
     await this.packageName.setValue(packagename)
     await this.packageType.setValue(packagetype)
     await this.packageLocation.setValue(packagelocation)
     await this.packagePrice.setValue(packageprice)
     await this.packageFeature.setValue(packagefeature)
     await this.packageDetails.setValue(packagedetails)
   }
   

}
export default new AdminPackageCreation()
