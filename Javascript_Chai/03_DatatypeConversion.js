let a = "35"
let b = "33abc"
let c = null
let d = undefined
let e = false

let aValInNumber = Number(a);
let bValInNumber = Number(b);
let cValInNumber = Number(c);
let dValInNumber = Number(d);
let eValInNumber = Number(e);

console.table([aValInNumber, bValInNumber, cValInNumber, dValInNumber, eValInNumber])

/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 35     │
│ 1       │ NaN    │
│ 2       │ 0      │
│ 3       │ NaN    │
│ 4       │ 0      │
└─────────┴────────┘
*/

let f = 3
let fValInString = String(f);
console.log(fValInString);             //3 (as string)


/************** OPERATIONS *********************************888 */
let g = "hello"
let h = " World"
let i = g + h
console.log(i);                     //Hello World

console.log("1" + 2);               //12 (string + number = string (concatination))
console.log(1 + "2");               //12
console.log("1" + 2 + 2);           //122
console.log(1 + 2 + "2");           //32 (js apply from left to right)
console.log(+true);                 //1 (number)
console.log(+"");                   //0 (number)

let j = 100;
console.log(j++);                   //100
console.log(j);                     //101 (updated value)


/********************* COMPARISION OF DATA TYPES ************************************* */
console.log("2" > 1);               //true
console.log(null == 0);              //false // null value is not converting (==)
console.log(null > 0);              //false  // in comparision null converted to 0
console.log(null >= 0);             //true

console.log(undefined == 0);              //false  //in all case (comparision or assignment gave false)
console.log(undefined > 0);              //false  
console.log(undefined >= 0);             //false

console.log("2" == 2);              //true  (only value check)
console.log("2" === 2);             //flase (data types also check)




