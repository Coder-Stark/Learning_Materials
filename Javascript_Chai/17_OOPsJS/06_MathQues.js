//Can we change the value of PI in maths

console.log(Math.PI);                     //3.141592653589793
Math.PI = 5;
console.log(Math.PI);                     //3.141592653589793, the value doesnt change

const descriptior = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptior);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


//how to access own descriptor of an object
const chai = {
    name: "Ginger Chai", 
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai nahi bani");
    }
}   
// console.log(Object.getOwnPropertyDescriptor(chai));        //chai is ojbect not property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));       
/*
{
  value: 'Ginger Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

//change property
Object.defineProperty(chai, "name", {
    writable: false,
    // enumerable: false                //it restrict to show key : value on iteration
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));       
/**
{
  value: 'Ginger Chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// for(let [key, value] of chai){                    //chai not directly iteratable
for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){             //function property not work here
        console.log(`${key} : ${value}`);
    }
}
/*
name : Ginger Chai
price : 250
isAvailable : true
*/