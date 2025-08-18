//after ES6 CLASSES introduced in js
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){                        //actually a function but in class called method
        return `${this.password}abc`
    }
    capitalizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai.encryptPassword());                      //123abc
console.log(chai.capitalizeUsername());                   //CHAI



//behind the scene (actually using prototype)
function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User2.prototype.capitalizeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const chai2 = new User2("chai2", "chai2@gmail.com", "1232");
console.log(chai2.encryptPassword());                      //123abc
console.log(chai2.capitalizeUsername());                   //CHAI2


//INHERITANCE
class User3{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}
class Teacher extends User3{
    constructor(username, email, password){
        super(username);                        //take username of its parent directly
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const data = new Teacher("teacher", "teacher@gmail.com", "123");
data.addCourse();                                          //A new course was added by teacher
data.logMe();                                              //Username is : teacher    (teacher have access of user + teacher both [inheritance])

const data2 = new User3("Student");
// data2.addCourse();                                     //user dont have access of addCourse(for teachers only)
data2.logMe();


//STATIC KEYWORD (access only within or on class, in-accessable through instances)
class User4{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
// const shivam = new User4('Shivam');
// console.log(shivam.createId());

const instance = new User4("newInstance");
// console.log(instance.createId());                        //error : createId (static) cant used by instance

console.log(User4.createId());                              //123 , static value used directly by class
