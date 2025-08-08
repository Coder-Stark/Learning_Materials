const score = 400;
console.log(score);                      //400

const score2 = new Number(100);
console.log(score2);                      //[Number: 100]

console.log(score2.toString());           //100 (in string)
console.log(score2.toFixed(2));           //100.00 (2 decimal place fixed)

const decNum = 23.5656
console.log(decNum.toFixed(2));           //23.57 (rounded of 2 decimal place fixed)
console.log(decNum.toPrecision(3));       //23.6  (3 digit total (rounded off))

const hundreds = 10000000;
console.log(hundreds.toLocaleString());   //10,000,000   (us standard)
console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000 (indian standard)


/***************************** MATHS ****************************************************** */
console.log(Math.abs(-4));                //4
console.log(Math.round(3.5))              //4
console.log(Math.ceil(3.2))              //4
console.log(Math.floor(3.2))              //3
console.log(Math.sqrt(4));                //2
console.log(Math.min(4, 3, 6, 8))         //3
console.log(Math.max(4, 3, 6, 8))         //8
console.log(Math.random());               //0.12 (by default 0 to 1)
console.log(Math.random()*10 + 1);        //8.89

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1)) + min)  //18

