//Exercise using objects
//item name
//price
//discount
//itemcode

const prodct={
  itemName:"flower",
  price:60,  
  discount:10,
  itemcode:'F40'
}
//factory function
function createProduct(name,price,discount,itemcode){
return{
    itemcode:name,
    price:price,
    discount:discouunt,
    itemcode:itemcode

     }
}
 
const football=createProduct('football',400,20,'F30')

//To make constructor function(Always use pascle case and start capital letter)
 
  function Product(name,price,discount,itemcode){
    this.itemName=name;
    this.price=price;
    this.discouunt=discouunt;
    this.itemName=itemcode;
    this.discountvale=function(){
        return price=discount/100;
    }
  }
  const mobile=new Product('oneplus Nord',3000,5,'OP20' )

 
