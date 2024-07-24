function Car(make,model){
    this.make=make;
    this.model=model;
    this.display=function(){
        document.write(this.make+this.model);
    };
}
//calling the function
let car1=new car1("Hyundai","i20", 2014);
let car2=new car1("Honda","City", 2005);
 document.write(car1.make);
 document.write(car1.model);
