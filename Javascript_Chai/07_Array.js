const arr = [0, 1, 2, 3, 4, 5]
const arr2 = new Array(1, 2, 3, 4);

console.table([arr, arr2]);
/*
┌─────────┬───┬───┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │
├─────────┼───┼───┼───┼───┼───┼───┤
│ 0       │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │
│ 1       │ 1 │ 2 │ 3 │ 4 │   │   │
└─────────┴───┴───┴───┴───┴───┴───┘
*/

/******************** ARRAY METHODS ************************* */
arr.push(6);
console.log(arr);                      //[0, 1, 2, 3, 4, 5, 6]

arr.pop();
console.log(arr);                      //[0, 1, 2, 3, 4, 5, 6]

arr.unshift(8);                        //8 inserted at 0 position
console.log(arr);                      //[8, 0, 1, 2, 3, 4, 5]

arr.shift();                           //remove 0th place element
console.log(arr);                      //[0, 1, 2, 3, 4, 5]

console.log(arr.includes(9));          //false
console.log(arr.indexOf(3));           //3

console.log(arr);                      //[0, 1, 2, 3, 4, 5]
console.log(typeof(arr));              //object
const newArr = arr.join();             
console.log(newArr);                   //0,1,2,3,4,5
console.log(typeof(newArr));           //string

console.log(arr.slice(1, 3));          //from index 1 to 2 (3 not included)
console.log(arr);                      //original array not changed

console.log(arr.splice(1, 3));         //from index 1 to 3 (3 included), in splice original array changed
console.log(arr);                      //original array changed

//merge arrays
const marvelHeroes = ["ironman", "thor", "captain"]
const dcHeroes = ["joker", "superman", "batman"];

// incorrect way for merge 
// marvelHeroes.push(dcHeroes);
console.log(marvelHeroes);             //[ 'ironman', 'thor', 'captain', [ 'joker', 'superman', 'batman' ] ] //array under array not merged

//correct way for merge
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);                //[ 'ironman', 'thor', 'captain', 'joker', 'superman', 'batman' ]

//another way using spread operator
const allHeroes2 = [...marvelHeroes, ...dcHeroes]; 
console.log(allHeroes2)   // //[ 'ironman', 'thor', 'captain', 'joker', 'superman', 'batman' ]

const nestedArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [ 4, 5]]];
const flatArr = nestedArr.flat(Infinity);
console.log(flatArr);                      //[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

//check is it array and form array
console.log(Array.isArray("Shivam"));      //false
console.log(Array.from("Shivam"));         //[ 'S', 'h', 'i', 'v', 'a', 'm' ]
console.log(Array.from({name: "Kumar"}));  //[]    //gives empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  //[100, 200, 300]