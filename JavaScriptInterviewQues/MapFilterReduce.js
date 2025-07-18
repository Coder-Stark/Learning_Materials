let number = [22, 2, 1, 9, 33, 42, 20, 16, 18, 33];

//double the numbers
//using for loop
console.log("Using For Loop")
for(let i = 0; i < number.length; i++){
    // let double = number[i]*2;
    // console.log(double);
    number[i] *= 2;
    console.log(number[i]);
}

console.log("All Parameters in Map")
let number2 = [22, 2, 1, 9, 33, 42, 20, 16, 18, 33];

number2.map((currVal, idx, array)=>{
    console.log(currVal);
    console.log(idx);
    console.log(array);
})

console.log("Double Using Map")
let double = number2.map((currVal)=>{
    return currVal*2;
})
console.log(double);


//Filter Method
console.log("Filter Method")
let number3 = [22, 2, 1, 9, 33, 42, 20, 16, 18, 33];

console.log("All Parameters in Filter Method")
let filterData = number3.filter((currVal, idx, array)=>{
    return currVal > 20;
})
console.log(filterData);

let data = [
    {name: "Rohan", age : 33, country: "US"},
    {name: "Shivam", age : 23, country: "India"},
    {name: "Aditya", age : 22, country: "India"},
    {name: "Rahul", age : 34,country: "Canada"},
    {name: "Sahil", age : 31, country: "Japan"}
]
let objData = data.filter((currVal)=>{
    return currVal.country === 'India';
})
console.log(objData);


//Reduce Method (when we need single value as output)
let number4 = [22, 2, 1, 9, 33, 42, 20, 16, 18, 33];
console.log("Reduce Method")
console.log("All Parameters in Reduce Method")
let sum = number4.reduce((accumalator, currVal, idx, array)=>{      //accumulator = simply stores data
    return accumalator + currVal;
}, 0)                                                     //0 = accumulator initial value
console.log(sum);

//using forloop
console.log("Sum using for loop")
for(let i = 0; i < number4.length; i++){
    let sum = 0;
    sum += number4[i];
}
console.log(sum);


/**
Using For Loop
44
4
2
18
66
84
40
32
36
66

All Parameters in Map
22
0
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]
  
2
1
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

1
2
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

9
3
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

33
4
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

42
5
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

20
6
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

16
7
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

18
8
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

33
9
[
  22,  2,  1,  9, 33,
  42, 20, 16, 18, 33
]

Double Using Map
[
  44,  4,  2, 18, 66,
  84, 40, 32, 36, 66
]

Filter Method
All Parameters in Filter Method
[ 22, 33, 42, 33 ]
[
  { name: 'Shivam', age: 23, country: 'India' },
  { name: 'Aditya', age: 22, country: 'India' }
]
  
Reduce Method
All Parameters in Reduce Method
196
Sum using for loop
196
 */