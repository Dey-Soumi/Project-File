"use strict";

function get_max(a,b){
    if(a>b){
        return a;
    } else{
    return b;
    }
} 
// fuction calling
let max=get_max(5,10);
document.write(max);