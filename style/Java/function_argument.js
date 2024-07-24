//"use strict";
let multiply=function(x,y) {
    let p=x*y;
    return p;
};
let add=function(x,y) {
    let s=x+y;
    return s;
};
let a=5, b=10;
function action (x,y,z){
    let r=z(x,y);
    return r;
}

let r=action(a,b,add); 
document.write(r);