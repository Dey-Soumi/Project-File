"use strict"
function calculateSum(...args){
    let sum=0;
    args.forEach(function(element){
        sum+=element;
    });
    return sum;
}
let s=calculateSum(3,5,7,9);
document.write(s+" ");

s=calculateSum(3,5,7,9,11);
document.write(s+" ");