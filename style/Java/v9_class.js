class Product{
    constructor(itemName,price,discount,productCode){
        this.itemName=name;
        /*this.price=price;
        this.discouunt=discouunt;
        this.itemName=itemcode;
        this.productCode=itemName;*/
    }

    //uses extended method
    getItemNaame(){
        return this.itemName +"is a Product";
    }
}
 class Furniture extends Product{
   constructor(itemName){
    super(itemName);
   }
 }
let pencil=new Product('pencil',20,2,'P10');
/*const Product=class
{
    constructor(itemName,price,discount,productCode){
        this.itemName=name;
        this.price=price;
        this.discouunt=discouunt;
        this.itemName=itemcode;
        this.productCode=itemName;
   }
   ///get and set method
    get setDiscountValue(){
        return this.discount
    }
    set setDiscountValue(value){
        return this.discount
}
};*/