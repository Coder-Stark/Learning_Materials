
//for returning something use filter method
//FILTER
const myNums = [10, 20, 90, 30, 40];
const newNums = myNums.filter((num)=>{
    return num > 30
})
console.log(newNums);                             //90 40

//same thing using forEach (complex)
const newNums2 = [];
myNums.forEach((num)=>{
    if(num > 30){
        newNums2.push(num);
    }
})
console.log(newNums2);   


const bookData = [
    {title: "Book 1", genre: "history", publish: 2000},
    {title: "Book 2", genre: "polscience", publish: 2001},
    {title: "Book 3", genre: "science", publish: 2002},
    {title: "Book 4", genre: "maths", publish: 2003},
    {title: "Book 5", genre: "history", publish: 2004},
];

const userBooks = bookData.filter((bk)=>{
    // return (bk.genre === "history");
    return (bk.genre === "history" && bk.publish >= 2002);
})
console.log(userBooks);
/*
[
//   { title: 'Book 1', genre: 'history', publish: 2000 },
  { title: 'Book 5', genre: 'history', publish: 2004 }
]
*/


//MAP on array
const myNumers = [1, 2, 3, 4, 5];
const newMyNumbers = myNumers.map((num)=>num + 10);
console.log(newMyNumbers);                                           //[ 11, 12, 13, 14, 15 ]


//CHAINING
console.log(myNumers);                                              //1 2 3 4 5
const newMyNumbers2 = myNumers
                        .map((num)=> num * 10)                      //10 20 30 40 50
                        .map((num)=> num + 1)                       //11 21 31 41 51
                        .filter((num)=> num > 20);                  //   21 31 41 51

console.log(newMyNumbers2);                                          //[21, 31, 41, 51 ]


//REDUCE
const myNumers2 = [1, 2, 3];
const myTotal = myNumers2.reduce((acc, currVal)=>{
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0);                                                                //0 => starting point (accumulator initial value)
console.log(myTotal);
/*
acc: 0 and currVal: 1
acc: 1 and currVal: 2
acc: 3 and currVal: 3
6
*/

const shoppingCart = [
    {item: "item 1", price: 200},
    {item: "item 2", price: 100},
    {item: "item 3", price: 500},
    {item: "item 4", price: 400},
]
const totalPrice = shoppingCart.reduce((acc, item)=>{
    return acc + item.price;
}, 0);
console.log(totalPrice);                                               //1200
