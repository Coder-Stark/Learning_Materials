//HOISTING IN JAVASCRIPT

//accessing variable function before initializing or before declare

console.log(a);                 //undefined     (global context, initial val is undefined)
myFunc();                       //Shivam        (global context , intial val is function(as it is store))

var a = 10;
function myFunc(){
    console.log("Shivam");
}

console.log(a);                 //10