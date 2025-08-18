//OOPS AND NEW KEYWORD

//Object literal or this keyword (gives current exectuion context)
const user = {
    username: "Shivam",
    loginCount: 8,
    signedIn: true,

    getUserDetais: function(){
        // console.log(`username: ${username}`);             //error -> username not defined
        console.log(this);                                   //refers whole object (just outer scope)
        console.log(this.username);                          //username: Shivam
    }
}
console.table([user.username, user.loginCount, user.signedIn]);
console.log(user.getUserDetais());                           //Shivam
console.log(this);                                           //{} empty (global context of this is empty (for browser it is window))


//constructor function
// const promiseOne = new Promise();
// const date = new Date();

//custom
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;                           //optional (by default its returning this)
}

const userOne = User("Shivam", 12, true);
const userTwo = User("Kumar", 11, false);
console.log(userOne);                                //userone original value is over-writed

//by using new keyword, new instance or object created
const userThree = new User("Rajbhar", 10, true)      //use new keyword
console.log(userOne);                                //now the original value not change


//NEW KEYWORD SECTION
//it is an special object from which other objects inherit properties and methods, forming prototype chaining.
function multiplyBy5(num){
    return num * 5;
}
multiplyBy5(5);                     //should be store somewhere or console , it gives reference only
console.log(multiplyBy5(5));                        //25

// function can be used using (.) so functions also an object 
multiplyBy5.power = 2;
console.log(multiplyBy5.power);                    //2

console.log(multiplyBy5.prototype);                //{}

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai", 25);                //without new nothing will work
const coffee = new createUser("coffee", 10);

chai.printMe();                                         //score is 25

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.
A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/
