const name = "Shivam"
console.log("Hello my name is " + name);       //Hello my name is Shivam

console.log(`Hello my name is ${name}`);       //Hello my name is Shivam

//another way of making string
const name2 = new String("Kumar");

//methods of strings
console.log(name2);                             //[String: 'Kumar']
console.log(name2[0]);                          //K
console.log(name2.length)                       //5
console.log(name2.toUpperCase())                //KUMAR
console.log(name2.charAt(2))                    //m
console.log(name2.indexOf('m'))                 //2
console.log(name2.substring(0, 3));             //kum (0 to 2 [3 idx excluded])
console.log(name2.slice(0, 3));                 //kum
console.log(name2.slice(-2));                   //ar (from second last to last)

let newName = "   Shivam    "
console.log(newName.trim());                     //Shivam

let url = "https://shivam.com/kr%20kumar"
console.log(url.replace('%20', '-'));            //https://shivam.com/kr-kumar
console.log(url.includes('shivam'))              //true

let simpleStr = "My name is Shivam Kumar";
console.log(simpleStr.split(' '));               //[ 'My', 'name', 'is', 'Shivam', 'Kumar' ]
console.log(simpleStr.lastIndexOf('m'))          //20