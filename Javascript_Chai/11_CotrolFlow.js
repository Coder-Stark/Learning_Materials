//if

if(2 == "2"){
    console.log("executed")         //executed
}
if(2 === "2"){
    console.log("executed");        //false, so not executed
}

const temp = 41;
if(temp < 50){
    console.log("temp is less then 50")     //that will execute
}else{
    console.log("temp is greater then 50");
}


const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy Course");        //it will execute
}

const loggedInFromGoogle = false;
const loggedInFromGmail = true;

if(loggedInFromGoogle || loggedInFromGmail){
    console.log("User logged in");              //it will execute
}


//SWITCH
const month = 5;
switch (month) {
    case 1:                   //1 condition here
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("Default case match")
        break;
}


//by default 
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan 

//truthy values
//"0", "false", " ", [], {}, function(){}

const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");                             //execute
}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");                            //execute
}


//Nullish Coalescing Operator (??): null undefined
//assign left value if not (null or undefined) else right value will be assign
let val1, val2;
val1 = 5 ?? 10
val2 = null ?? 10

console.log(val1, val2);                                       //5 10

let val3;
val3 = undefined ?? 10;
console.log(val3);                                             //10

let val4;
val4 = null ?? 15 ?? 20 ?? 30;
console.log(val4);                                             //15 (first right after null or undefined)


//Terniary Operator
//condition ? true : false
const price = 100;
price >= 80 ? console.log("More then 80") : console.log("Less then 80");