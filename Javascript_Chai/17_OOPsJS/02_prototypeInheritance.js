//PROTOTYP AND INHERITANCE

//PROTOTYPE SECTION
let myName = "Shivam     ";
console.log(myName.length);                            //11
console.log(myName.trim().length);                     //6

let myHeros = ["Ironman", "thor"];
let heroPower = {
    thor: "hammer",
    ironman: "brain",
    
    getPower: function(){
        console.log(`Power is : ${this.ironman}`);
    }
}

Array.prototype.heyShivam = function(){               //power giving to array only
    console.log(`Shivam says Hello`);
}

myHeros.heyShivam();                        //it is array so it can access heyShivam function
// heroPower.heyShivam();                 


//INHERITANCE
const User = {
    name: "Shivam",
    email: "shivam@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport                 //inherited
}
Teacher.__proto__ = User;

//modern syntax of above inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);     //teachingsupport access teacher's property


//solution of above truelength
let anotherUsername = "Rajbhar       "
String.prototype.trueLength = function(){
    console.log(`${this}`)                                 //Rajbhar
    console.log(`True Length is : ${this.trim().length}`); //7
}
anotherUsername.trueLength();
"Shivam".trueLength();
"Kumar".trueLength();
/*
Rajbhar       
True Length is : 7
Shivam
True Length is : 6
Kumar
True Length is : 5
*/