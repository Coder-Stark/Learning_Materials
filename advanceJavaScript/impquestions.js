//closure in JavaScript
function  make(){
    var val = "Shivam Kumar"
    function showName(){
        console.log(val);
    }
    return showName;
}
const any = make();
any();

//output = Shivam Kumar



//use case
function adder(num){
    function add(b){
        console.log(num + b);
    }
    return add;
}

const addTo5 = adder(5); 
addTo5(2);

//output = 7


/*************************************************************************************************** */
//DSA QUESTIONS
//01. CHECK IS PALINDROME OR NOT
const isPalindrome = function (x){
    return x === +x.toString().split("").reverse().join("");
}

const res = isPalindrome(121);
console.log(res);               //output: true


//02. FIBONACCHI NUMBER
var fib = function (n){
    const arr = [0, 1];

    for(let i = 2; i <= n ; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }

    return arr[n];
}
console.log(fib(5));                      //output: 5 (5 is the 5th fibonacci number)

//using recursion
const fib = function (n){
    //base case
    if(n <= 1) return n;
    
    return fib(n-1) + fib(n-2);
}
console.log(fib(5));                      //output: 5 (5 is the 5th fibonacci number)


/******************************************************************************************************** */
//03. valid anagram or not
var isAnagram = function(s, t){
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;
}
isAnagram("anagram", "nagrama");   //output: true


//using map
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let mp1 = {};
    let mp2 = {};

    // Populate character maps for both strings
    for (let i = 0; i < s.length; i++) {
        mp1[s[i]] = (mp1[s[i]] || 0) + 1; // Count characters in string s
        mp2[t[i]] = (mp2[t[i]] || 0) + 1; // Count characters in string t
    }

    // Compare character frequencies in both maps
    for (const key in mp1) {
        if (mp1[key] !== mp2[key]) return false;
    }

    return true;
};
console.log(isAnagram("anagram", "nagrama")); // Output: true
console.log(isAnagram("rat", "car"));         // Output: false


/******************************************************************************************* */
//04. TWO SUM
var twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));       //output: [0, 1]

//using map
const twoSum = function (nums, target) {
    let mp = {};
    for(let i = 0; i < nums.length; i++){
        let compliment = target-nums[i];
        if(mp[compliment] !== undefined) return [mp[compliment], i];
        mp[nums[i]] = i;                              //maping (val, with index (not freq))
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));       //output: [0, 1]


/*************************************************************************************************** */
//05. Best time to buy and sell stock
const maxProfit = function (prices) {
    let maxi = Number.NEGATIVE_INFINITY; // Replace INT_MIN
    let mini = prices[0]; // Initialize mini to the first price

    for (let i = 1; i < prices.length; i++) { // Start loop from index 1
        maxi = Math.max(maxi, prices[i] - mini); // Use Math.max
        mini = Math.min(mini, prices[i]); // Use Math.min
    }

    return maxi === Number.NEGATIVE_INFINITY ? 0 : maxi; // Return 0 if no profit is possible
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5


/****************************************************************************************** */
//06. FIRST UNIQUE CHARACTERS IN A STRING
var firstUniqChar = function(s) {
    let mp = {};

    for (let a of s) {
        mp[a] = (mp[a] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};


/******************************************************************************************** */
//using hoisting (var)
console.log("Age : ", age);          //undefined
var age = 20;
console.log("Age : ", age);          //20


//hoisting but create temporal dead zone (let, const)
console.log("Age : ", age);          //error
let age = 20;
console.log("Age : ", age);          


//hoisting concept with functions
myFun();                            //second (in functions initialize wiht body of function [not undefined])

var myFun = function(){
    console.log("First");           
}
myFun();                           //First  (update the values)

function myFun(){
    console.log("Second");
}
myFun();                           //First


//iife -> immediatly invoke functional expression
var variable = 10;
(()=>{     //iife
    console.log(variable);         //10
    variable = 20;
    console.log(variable);         //20
})();

console.log(variable);             //20
var variable = 30;


//simple 
foo = 30;
console.log("FOO", foo);           //FOO, 30

var foo = 100;
console.log("FOO", foo);           //FOO, 100


//tricky (throughs error -> foo is not globally defined (locally defined only))
variable = 10;
(()=>{
    foo = 100;
    console.log(variable);         
    var foo = 100;
    variable = 20;
    console.log(variable);         
})();
console.log(foo);                  //error here                 
console.log(variable);             
var variable = 30;


//setTimeout
for(var i = 0; i < 10; i++){
    setTimeout(() => {
        console.log(i);           //10 10 10... 10 (9 times {due to var is global scope})
    }, 0);
}
for(let i = 0; i < 10; i++){
    setTimeout(() => {
        console.log(i);           //0 1 2 3 4 5 6 7 8 9 (let is local scope)
    }, 0);
}


//tricky
var fullName = "Shivam Kumar";
var obj = {
    fullName: "Hacked Full Name",
    prop:{
        fullName: "Inside Prop",
        getFullName: function(){
            return this.fullName;
        },
    },
    getFullName: function(){
        return this.fullName;
    },
    getFullNameV2: () => this.fullName,
    getFullNameV3: (function(){             //iife function
        return this.fullName;
    })(),
};
console.log(obj.prop.getFullName());         //Inside Prop
console.log(obj.getFullName());              //Hacked Full Name
console.log(obj.getFullNameV2());            //undefined
console.log(obj.getFullNameV3());            //undefined (it is a property not function)


//call context (reference to called obj)
const shivam = {
    name: "Shivam Kumar",
    sayName: function(){
        console.log(this.name);              
    },
};
const jhon = {
    name: "Jhon Doe",
    sayName: function(){
        console.log(this.name);               
    },
};
jhon.sayName.call(shivam);                    //Shivam Kumar
jhon.sayName();                               //Jhon Doe


//different execution context in async
const shiv = {
    name: "Shivam Kumar",
    sayName: function(){
        console.log(this.name);
    },
};
setTimeout(() => {
    shiv.sayName()                             //undefined (due to different execution context in async)
}, 3*1000);
setTimeout(() => {
    shiv.sayName.bind(shiv)                    //Shivam kumar
}, 3*1000);


//simple
const obj = {
    height: 30
};
console.log(obj.height);                       //30
delete obj.height;
console.log(obj.height);                       //undefined

/*************************************************************************************************************** */
