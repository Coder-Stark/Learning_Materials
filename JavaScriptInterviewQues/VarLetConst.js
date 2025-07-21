//VAR LET CONST

//var
//when declare variable using var variables in js that are function-scoped

//let & constant
//when declare variable using let and const variables in js that are in block scope

//VAR
var a = "Shivam";        //duplicate variable allowed
var a = "Kumar";
a = "Rajbhar";            //reassignation allowed

var b;                   //define first then declare allowed
b = "Shiv"

console.log(a);
console.log(b);

//LET   
let c = "Adi";
// let c = "Kumar";          //error - duplicate variable not allowed
c = "Kumar";                //reassignation allowed

let d;                      //define first then declare allowed
d = "Pand";              
console.log(c);
console.log(d);


//CONST
const e = "Kallo";
// const e = "Vishwa";          //error - duplicate variable not allowed
// e = "Kir";                      //error - reassignation not allowed

// const f;                       //declaration must be initialized
// f = "kal";
console.log(e);


//block scope & functional scope
function myFunc(){
    if(true){
        let g = "sk";
        const h = "Raj";

        var i = "Kumar"
        console.log(g, h);
    }
    // console.log(g, h);                  //let and const is block scope
    console.log(i);                     //var is functional scope (whole body not in block scope)
}
myFunc();


//question (example of var and let / const)
var j = "Shivam";
if(true){
    var j = "Kumar";
    console.log(j);                     //Kumar
}
console.log(j);                         //Kumar


//using let (diff output)
let k = "Shivam";
if(true){
    let k = "Kumar";
    console.log(k);                     //Kumar
}
console.log(k);                         //Shivam