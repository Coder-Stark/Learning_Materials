/*
import {message, user as us, test} from "./library.js";
console.log(message);                     //ES6 Modules
console.log(us("Shivam Kumar"));          //Hello Shivam Kumar
let a = new test();                       //Constructor of test
*/

/*
import * as kr from "./library.js"
console.log(kr.message);                     //ES6 Modules
console.log(kr.user("Shivam Kumar"));          //Hello Shivam Kumar
let a = new kr.test();                       //Constructor of test
*/

// import {default as kr} from "./library.js";
import kr from "./library.js";
kr();                                      //Hello