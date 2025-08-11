/*
3 states in Promise
pending
fulfilled
rejected
*/

//promise 1
const promise1 = new Promise(function(resolve, reject){
    //do an async task
    setTimeout(function(){
        console.log("Async task is Complete")
        resolve();
    }, 1000);
});

promise1.then(function(){
    console.log("Promise Consumed");
})
/*
Async task is Complete
Promise Consumed
*/


//promise 2
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})
/*
Async task 2
Async 2 resolved
*/

//promise 3
const promise3 = new Promise(function(resolve, resject){
    setTimeout(() => {
        resolve({username: "Shivam", email: "shivam@gmail.com"})
    }, 1000);
})

promise3.then(function(user){
    console.log(user);
})
/*
{ username: 'Shivam', email: 'shivam@gmail.com' } 
*/


//promise 4
promise4 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Kumar", pass: "123"});
        }else{
            reject("Error : Something went wrong");
        }
    }, 1000);
})

promise4.then((user)=>{
    console.log(user);
    return user.username;                //this return value passing to next .then (as chaining occur)
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("The promise 4 is resolved or rejected")
})
/*
//error = true
Error : Something went wrong
The promise is resolved or rejected

//error = false
{ username: 'Kumar', pass: '123' }
Kumar
The promise is resolved or rejected
*/


//async await
//promise 5
const promise5 = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({lang : "C++", ext: ".cpp"});
        }else{
            reject("Error: C++ went wrong");
        }
    }, 1000);
})

async function consumePromise5() {
    try{
        const response = await promise5;
        console.log(response);
    }catch(err){
        console.log(err);
    }
}
consumePromise5();
/*
Error: C++ went wrong
*/


//it will through error if error is true
/*
async function consumePromise5(){
    // promise5();                           //not allowed because promise is object
    const response = await promise5;
    console.log(response);
}
consumePromise5();
*/
/*
//error = false
{ lang: 'C++', ext: '.cpp' }
//error = true
...it throughs an error to wrap in try catch block
*/


//using async and await
//fetching fake data 
async function getAllUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();                                   //it also required await (json data takes times)
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
getAllUsers();


//using .then and .catch
//fetching fake data 
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

//why fetched data appear first then other data
//because for fetch special queue is generated which have high priority(micro task queue)