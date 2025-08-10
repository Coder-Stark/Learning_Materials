//FOR LOOP
for(let i = 0; i < 10; i++){
    console.log(i);
}

//print table
for(let i = 1; i <= 10; i++){
    console.log(`Table of ${i}`);
    for(let j = 1; j <= 10; j++){
        console.log(i + "*" + j + ' = ' + i*j);
    }
}

let arr = ["ironman", "superman", "thor"];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);                          //ironman, superman, thor
}

//break and continue
for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("Detected 5");
        break;                                     //after 5 stop execution
    }
    console.log(i);                                //0 1 2 3 4 5 (detected 5) stop
}

for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("Detected 5");
        continue;                                  //it will skips 5 (print 0 to 9)
    }
    console.log(i);                                
}


//WHILE LOOP
let i = 0;
while(i <= 10){
    console.log(`${i}`);                    //print 0 to 10
    i++;
}

let myArr = ["flash", "wonder-woman", "superman"];
let idx = 0;
while(idx < myArr.length){
    console.log(myArr[idx]);                    //flash, wonder-woman, superman
    idx++;
}


//DO WHILE LOOP
let score = 11;
do{ 
    console.log(`Score is ${score}`);          //score is 11 (even if condition fails 1 time loop execute)
    score++;
}while(score <= 5);


//FOR OF LOOP
const array = [1, 2, 3, 4, 5];
for(const it of array){
    console.log(it);                           //1 2 3 4 5
}

const str = "abcde"
for(const it of str){
    console.log(it);                           //a b c d e
}


//MAPS   (nothing but objects with key value pairs)
const map = new Map();
map.set("IN", "India");
map.set("US", "USA");
map.set("RU", "Russia");
map.set("RU", "Russia");                        //only unique entry(key) is allowed

console.log(map);                               //Map(3) { 'IN' => 'India', 'US' => 'USA', 'RU' => 'Russia' }

//FOR OF LOOP on map   (for extracting key and values)
console.log("find key and value in map");
/* that will now work for extracting only key (likes in obj)
for(const key of map){
    console.log(key);
}
*/
console.log("find only key in map");
for(const k of map.keys()){
    console.log(k);
}
console.log("find only values in map");
for(const v of map.values()){
    console.log(v);
}
console.log("find both key and values in map simultaneously in map")
for(const [k, v] of map){
    console.log(k, ": ", v);
}
/*output
find key and value in map
find only key in map
IN
US
RU
find only values in map
India
USA
Russia
find both key and values in map simultaneously in map
IN :  India
US :  USA
RU :  Russia
*/

const obj = {
    "IN": "India",
    "US": "USA",
    "RU": "Russia"
}
//in object will not work (but in map it works)
/*
for(const [key, value] of obj){
    console.log(key, ": ", value);
}
*/
//FOR IN LOOP on map   (for extracting key and values)
console.log("Find key and value both in object")
console.log("find only keys in object");
for(const k in obj){       
    console.log(k);
}
console.log("find only values in object");
for(const k in obj){
    console.log(obj[k]);         //v => obj[key]
}
console.log("find both key and values in object");
/*//not work like that in obj
for(const [k, v] in obj){           
    console.log(k, ": ", v)
}
*/
for(const k in obj){
    console.log(k, ": ", obj[k]);
}
/*output 
Find key and value both in object
find only keys in object
IN
US
RU
find only values in object
India
USA
Russia
find both key and values in object
IN :  India
US :  USA
RU :  Russia
*/

//in arrays
const arrInLoop = [40, 60, 80, 90, 200];
for(const key in arrInLoop){
    console.log(key);
}
//0 1 2 3 4         (it actually prints key(index) not value like for of)
for(const key in arrInLoop){
    console.log(arrInLoop[key]); 
}
//40 60 80 90 200    (now it will print values)


//FOR EACH LOOP
const arrEachLoop = [10, 20, 30, 40];
arrEachLoop.forEach(function (val){               //for each take function call back (without function name)
    console.log(val);
})
//10 20 30 40 

//another way using arrow function
arrEachLoop.forEach((val)=>{
    console.log(val);
})
//10 20 30 40 

//using passing the functions
function printMe(item){
    console.log(item);
}
// arrEachLoop.forEach(printMe());                 //not execute here
arrEachLoop.forEach(printMe);                      //just give reference (not ())
//10 20 30 40 

//foreach have access of all (item, index, arr(actual))
arrEachLoop.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})
/*
10 0 [ 10, 20, 30, 40 ]
20 1 [ 10, 20, 30, 40 ]
30 2 [ 10, 20, 30, 40 ]
40 3 [ 10, 20, 30, 40 ]
*/

const coding = [
    {
        language: "C++",
        extension: ".cpp"
    },
    {
        language: "Javascript",
        extension: ".js"
    },
    {
        language: "Java",
        extension: ".java"
    }
]

coding.forEach((item)=>{
    console.log(item.language);
})
/*
C++
Javascript
Java
*/

//forEach never return anything 
const values = coding.forEach((item)=>{
    return (item);
})
console.log(values);                            //undefined (never returns)
