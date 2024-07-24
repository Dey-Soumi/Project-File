let lecture=10;
let section=3;
let title ='Javascript';

/*const course={
    lecture:10,
    section:3,
    title:'Javascript',
    notes:{
        introduction:"Welcome to js course"
    },
    enroll(){
        console.log('You are succesfully enrolled'); 
    }
}
function enroll(){
    console.log('You are succesfully enrolled');
}
course.enroll()
console.log(course)
course.price=999*/

//Factory fnction(Use camel case)
function createcourse(){
    return {
        title:title,
        enroll(){
            console.log('You are succesfully enrolled'); 
        }
    }
}
const newCourse=createCourse('Javascript');
/*course.enroll()
console.log(course) */

 //Construuctor Function(use pascle case)

 function Course(title){
    this.title=title,
    this.enroll=function(){
        console.log('You are succesfully enrolled');    
    }
 }
 // create object
 const course=new course('Javascript');
 //delete process
  delete course.title;
  //create new funtion
  course.checkEnrollment=function(){
    console.log('30 users are enrolled');
  }
 course.enroll()

 console.log(course);

 // use constructor method 
 const course_1=new fuction('title',
 this.tittle=title,
 this.enroll=function(){
    console.log('You are succesfully enrolled');    
 
 }
 )
  
 //use primitive data type
 let number=19;

 //pass by value
 let number_2=number 
 number=12;
 console.log(number);
 console.log(number_2);

 //refferences Datatype
 let obj={number:19};
 
 //pass by references
 let obj2=obj;

 console.log(obj)
 console.log(obj2)
