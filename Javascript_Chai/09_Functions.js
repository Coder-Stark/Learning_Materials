function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

sayMyName;                  //refrence
sayMyName();                //execution


function addTwoNumbers(num1, num2){                  //num1, num2 -> parameters
    console.log(num1 + num2);
}
addTwoNumbers(3, 5);                                //8      (3, 5)-> arguments

function addTwoNumbers1(num1, num2){                
    console.log(num1 + num2);
}
const result1 = addTwoNumbers1(3, 5);                 //8      (3, 5)-> arguments
console.log("incorrect esult : ", result1);           //incorrect result: undefined

function addTwoNumbers2(num1, num2){                
    return (num1 + num2);
    // console.log(num1);                             //after return no code will work
}
const result2 = addTwoNumbers2(3, 5);                 
console.log("correct result : ", result2);            //correct result: 8


function loginUserMessage(username){
    return `${username} just logged in`;
}
loginUserMessage("Shivam");                           //not gives anything (should be store in variable)
const message = loginUserMessage("Shivam");
console.log(message);                                 //Shivam just logged in

const message2 = loginUserMessage();                  //nothing passed 
console.log(message2);                                 //undefined just logged in


function calculateCartPrice(...nums){                  //as parameter -> rest operator (as arguments -> spread operator)
    return nums;
}
console.log(calculateCartPrice(200, 300, 400));        //[ 200, 300, 400 ]

function calculateCartPrice2(val1, val2, ...nums){
    return nums;
}
console.log(calculateCartPrice2(200, 400, 500, 300, 700));   //[ 500, 300, 700 ]

//pass object in functino
const user = {
    username: "Shivam",
    price: 200
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}
handleObject(user);                                          //Username is Shivam and price is 200
handleObject({                                               //Username is Kumar and price is 300
    username: "Kumar",
    price: 300
})

//pass array in function
const arr = [200, 400, 100, 600];
function handleArray(anyArr){
    console.log(anyArr[0]);
}
handleArray(arr);                                            //200
handleArray([400, 300, 200]);                                //400