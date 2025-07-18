//FOR EACH LOOP
let arr = ["Shivam", "Adi", "Vikash", "Kallo"];

arr.forEach((currVal, idx, array)=>{
    console.log(currVal);
    console.log(currVal + "s");
})

let data = [
    {name: "Rohan", age : 33, country: "US"},
    {name: "Shivam", age : 23, country: "India"},
    {name: "Aditya", age : 22, country: "India"},
    {name: "Rahul", age : 34,country: "Canada"},
    {name: "Sahil", age : 31, country: "Japan"}
]

data.forEach((currVal)=>{
    console.log(currVal);
})
data.forEach((currVal)=>{
    console.log("Mr." + currVal.name);
})
data.forEach((currVal)=>{
    currVal.name = "Mr. " + currVal.name;
})
console.log(data);

/**
Shivam
Shivams
Adi
Adis
Vikash
Vikashs
Kallo
Kallos
{ name: 'Rohan', age: 33, country: 'US' }
{ name: 'Shivam', age: 23, country: 'India' }
{ name: 'Aditya', age: 22, country: 'India' }
{ name: 'Rahul', age: 34, country: 'Canada' }
{ name: 'Sahil', age: 31, country: 'Japan' }
Mr.Rohan
Mr.Shivam
Mr.Aditya
Mr.Rahul
Mr.Sahil
[
  { name: 'Mr. Rohan', age: 33, country: 'US' },
  { name: 'Mr. Shivam', age: 23, country: 'India' },      
  { name: 'Mr. Aditya', age: 22, country: 'India' },      
  { name: 'Mr. Rahul', age: 34, country: 'Canada' },      
  { name: 'Mr. Sahil', age: 31, country: 'Japan' }        
]
*/
