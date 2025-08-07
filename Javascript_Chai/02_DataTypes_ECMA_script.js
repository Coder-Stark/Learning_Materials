"use strict";       //treat all JS code as newer version

// alert(3 + 3);        //we are using node.js, not browser

//Data types
// 2 types (primitive and non-primitive)
//Primitive (7)         //call by value ( no reference store) 
/*
string
number
boolean
null
undefined
symbol
bigint
*/

//Non-primitive         //call by reference (direct reference can be stored)
/*
array
objects
functions
*/

//Stack Memory (Primitive), Heap Memory (Non-Primitive)

//giving copy (primitive) not exact value (stored in stack memory)
let a = "Shivam"
let b = a;                  
b = "Kumar";

console.log(a);             //Shivam
console.log(b);             //Kumar

//actual value (non-primitive)           (stored in heap memory)
let userOne = {
    email: "shiv@gmail.com",
    upi: "shiv@ybl"
}
let userTwo = userOne;
userTwo.email = 'kumar@gmail.com'

console.log(userOne.email);     //kumar@gmail.com 
console.log(userTwo.email);     //kumar@gmail.com


//Javascript is a dynamic type language (its data types determined at run time)

let name = "Shivam"         //string
let age = 18                //number (2^53)
let isLoggedIn = false      //boolean
// null    => representation of empty value
// undefined => variable declare without initialization
// Symbol => unique

// Object

console.table([typeof(name), typeof(age), typeof(isLoggedIn), typeof(null), typeof(undefined), typeof(Symbol)]);

/**
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'boolean'   │
│ 3       │ 'object'    │
│ 4       │ 'undefined' │
│ 5       │ 'function'  │
└─────────┴─────────────┘
 */