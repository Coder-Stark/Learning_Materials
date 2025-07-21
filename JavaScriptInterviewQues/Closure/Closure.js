//CLOSURE
//function along with lexical scope bundle together it form a  closure

//lexical scope (inner function can assess outer function)
function a(){
    let x = 10;
    function b(){
        console.log(x);
    }
    b();
}
a();                     //10


function e(){
    let x = 10;
    function f(){
        let y = 20;
        function g(){
            console.log(x, y);
        }
        g();
    }
    f();
}
e();                                  //10 20


function parent(){
    let property = "2 Cr";
    function child1(){
        console.log(property);
    }
    function child2(){
        console.log(property);
    }
    child1();                      
    child2();                      
}
parent();                              //2 cr //2 cr

/*
//closure         //we are returning function (with its lexical scope)
function c(){
    let x = 10;
    function d(){
        console.log(x);
    }
    return d;
}

//another way
function c(){
    let x = 10;
    return function d(){
        console.log(x);
    }
}
let data = c();
console.log(data);       //function d(){}
data();                  //10
*/


function makeFunc(){
    let name = "Shivam";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();         //storing reference of function (with its lexical scope)
myFunc();                          //Shivam