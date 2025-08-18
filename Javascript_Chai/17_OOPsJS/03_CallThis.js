//CALL AND THIS IN JAVASCRIPT
//call() is a method that lets you explicitly set the context (this) for any function invocation in JavaScript.
function setUsername(username){
    this.username = username;
    console.log("called");
}
function createUser(username, email, password){
    // setUsername(username);           //that actually calling but not storing 
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai);
/*
called
createUser {
  username: 'chai',
  email: 'chai@gmail.com',
  password: '123'
}
*/