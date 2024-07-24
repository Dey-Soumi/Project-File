let bread1=prompt("Which bread would you like");
let veggies1=prompt("Which veggieswould you like");
function makeSandwich(bread,veggies,sauce){
    let sandwich=bread+"bread" +veggies+" ";
    return sandwich;
}
let vegsandwich= makesandwich(bread1,veggies1);
console.log(vegsandwich);