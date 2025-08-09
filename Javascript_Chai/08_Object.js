// singleton (shared resource, global state)
// const user = new Object()

//non-singleton (independant data, unique state)
//const user = {};

// Object literals  / non-singleton obj
const jsUser = {
    name: "shivam",
    "sir name": "kumar",
    age: 23,
    location : "Delhi",
    email: "shivam@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(jsUser.name);                      //shivam
console.log(jsUser["name"]);                   //shivam

// console.log(jsUser.sir name);     //error
console.log(jsUser["sir name"]);              //kumar

const mySym1 = Symbol("Key1");
const obj1 = {
    mySym1: "myKey1"
}
console.log(mySym1);                   //Symbol("Key1")
console.log(obj1.mySym1);              //myKey1

console.log(typeof(mySym1));                   //symbol
console.log(typeof (obj1.mySym1));              //string not symbol

//how to get symbol as typeof not string
const mySym2 = Symbol("key2");
const obj2 = {
    [mySym2]: Symbol("valueSym")
}
console.log(obj2[mySym2]);                       //Symbol(valueSym)
console.log(typeof (obj2[mySym2]));              //symbol
// console.log(typeof (obj2.mySym2));            //dot not work with symbol

//change value in obj
jsUser.age = 24;
console.log(jsUser.age);                 //24

// Object.freeze(jsUser);                   //now we cant update directly
jsUser.age = 25;
console.log(jsUser.age);                 //24

// functions in obj 
jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting);               //[function (anonymous)]
console.log(jsUser.greeting());             //Hello js user

jsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);      //without this not work
}
console.log(jsUser.greeting2());             //Hello Shivam


const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "adi"
tinderUser.isLoggedIn = false;

console.log(tinderUser);                    //{ id: '123abc', name: 'adi', isLoggedIn: false }

const regualUser = {
    email: "abc@gmail.com",
    fullName: {
        userName: {
            firstName: "shiva",
            lastName: "kumar"
        }
    }
}

console.log(regualUser.fullName.userName.firstName);  //shiva

//merge objects
const Obj1 = {1: "a", 2: "b"};
const Obj2 = {3: "c", 4: "d"};

const Obj3 = Object.assign({}, Obj1, Obj2);
console.log(Obj3);                                    //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//another way
const Obj4 = {...Obj1, ...Obj2} 
console.log(Obj4);                      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(tinderUser);                      //{ id: '123abc', name: 'adi', isLoggedIn: false }
console.log(Object.keys(tinderUser))          //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))        //[ '123abc', 'adi', false ]

console.log(Object.entries(tinderUser));      //[ [ 'id', '123abc' ], [ 'name', 'adi' ], [ 'isLoggedIn', false ] ]     //sepeare each entries in array

console.log(tinderUser.hasOwnProperty("isLoggedIn"));    //true

//DESTRUCTURING
const course = {
    courseName: "js with chai",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor} = course;
console.log(courseInstructor);                   //hitesh

const {courseInstructor: cI} = course;           //rename
console.log(cI);                                 //hitesh