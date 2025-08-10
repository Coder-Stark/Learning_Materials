var a = 2;
let b = 6;
if(true){
    let b = 3;
    a = 5;
}
console.log(a, b);          //a = 5 (global scope), b = 6 (block scope)


//functional scope
function one(){
    const username = "Shivam";
    function two(){
        const website = "shiv.com";
        console.log(username);
    }
    // console.log(website);                 //error-> out of scope

    two();                                //Shivam
}
one();


function addOne(num){
    return num + 1;
}
addOne(5);
//another way of above func
const addTwo = function(num){
    return num + 2;
}
addTwo(5);

//hoisting
//works here
console.log(addThree(5));                         //8
function addThree(num){
    return num + 3;
}

//not work with this type of function declarations
// console.log(addFour(5));                             //it throws an erro (hoisting not work here)
const addFour = function(num){
    return num + 4;
}


//ARROW FUNCTIONS & this keyword
const user = {
    username: "Shivam",
    price: 800,
    welcomeMessage: function(){
        console.log(this);                                //{ username: 'Shivam', price: 800, welcomeMessage: [Function: welcomeMessage]}
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage();                    //Shivam, welcome to website
user.username = "Kumar";
user.welcomeMessage();                    //Kumar, welcome to website

console.log(this);                        //{}  (in vs code global obj is empty), but in browser global obj is windows

const chaiObj = {
    username: "Shivam",
    printUsername(){
        console.log(this.username)
    }
}
chaiObj.printUsername();                      //Shivam

const chaiFunc1 = function(){
    username = "Kumar";                       //that username by default creating global obj (var)
    console.log(this.username);              //here this refers to global obj, so it print
}
chaiFunc1();                                  //Kumar

const chaiFunc2 = function(){
    let username1 = "Kumar";                   //that username is block scope so this not applie on that
    console.log(this.username1);              //here this refers to global obj not its functional variable
}
chaiFunc2();                                  //undefined


//arrow function   (not having this keyword)
const chaiFunc3 = ()=>{
    let username2 = "Rajbhar";
    console.log(username2);
}
chaiFunc3();                                              //Rajbhar

const addFive = (num1, num2) => {
    return num1 + num2;
}
console.log(addFive(3, 4));                              //7

//another way of above func
const addFive2 = (num1, num2) => num1 + num2;
console.log(addFive2(4, 6));                             //10

//if curly braces {} then return key word necessary
//if parenthesis () then return keyword not required


//IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSIONS)
// ()()                //first ()-> definition, second ()-> execution

(function chai(){
    console.log(`DB Connected`);                             //DB Connected
})();                                 //semicolon (;) is neccessary to stop

(()=>{
    console.log(`DB Connected`);                              //DB Connected
})();

//pass name
((name)=>{
    console.log(`name is : ${name}`)                          //name is Shivam
})("Shivam")


//HOW JS WORKS -> EXECUTION CONTEXTS
// 1. GLOBAL EXECTUION CONTEXT     (store in this)
// 2. FUNCTION EXECTUION CONTEXT

/*
Cycle phase 1
Memory phase
initially all variable value = undefined
function's stores definition

Cycle phase 2
Execution phase
assign actual value of all variable
functions execution happend (again memory phase + execution phase)
*/


//CALL STACK
/*
manages the execution of function calls in code.
operates of LIFO principle
*/