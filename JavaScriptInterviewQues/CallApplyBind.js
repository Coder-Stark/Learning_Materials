//CALL()
//call is a predefined javascript method call() invoke function for owner Object

console.log("Call Method");

let data = {
    name: "Shivam",
    branch: "SE",
    myFunc : function(){
        console.log(this);            
        console.log(this.name);      
    }
}
data.myFunc();                        //{ name: 'Shivam', branch: 'SE', myFunc: [Function: myFunc] }   && Shivam

console.log(this);                    //window object

let data2 = {
    name: "Adi",
    branch: "BA"
}
data.myFunc.call(data2);             //{ name: 'Adi', branch: 'BA' }    &&   Adi


//if function not under object
console.log("If function not under object");
let data3 = {
    name: "Sat",
    branch: "BA"
}
let data4 = {
    name: "Kallo",
    branch: "BF",
}
function myFunc(){
    console.log(this);            
    console.log(this.name);      
}
myFunc.call(data3);                           //{ name: 'Sat', branch: 'BA' }   //Sat
myFunc.call(data4);                           //{ name: 'Kallo', branch: 'BF' } //Kallo

console.log("Using Parameters")

let data5 = {
    name: "Shashwat",
    branch: "SE"
}
function myFunc1(country, age){
    console.log(this.name, country, age);
}
myFunc1.call(data5,"India", 20);                       //Shashwat India 20

console.log("Apply Method");

//APPLY()
//apply is similar to call method, the only diff is that apply pass argument as an array
myFunc1.apply(data5,["India", 20]);                   //Shashwat India 20

console.log("Bind Method");

//BIND()
//bind method invoke a function and bind into a variable or store into a variable. we can use later
let bindMethod = myFunc1.bind(data5, "US", 23);       //Shashwat US 23
bindMethod();