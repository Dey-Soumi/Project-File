let namasteBtn=document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);
function inputMsg(){
    //alert("Namaste World");
    //take a input fuction
    let name=prompt('enter the student name');
    namasteBtn.textContent= 'Roll No. 1'+name; 
}