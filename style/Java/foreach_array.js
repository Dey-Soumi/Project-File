"use strict";

const arr=[2,4,6,8,10];
//arr.forEach(function(element){
    //annomyous fuction
    let printElement=function(element){
document.write(element + " ");
}
arr.forEach(printElement);