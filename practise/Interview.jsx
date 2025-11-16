// // //closure
// // function a(){
// //     let name = "shivam";
// //     function b(){
// //         console.log(name);
// //     }
// //     return b;
// // }
// // let c = a();           //
// // c();

// setTimeout(() => {
//     console.log("shivam");
// }, 1000);


// console.log("kumar");



async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");

setTimeout(() => console.log("D"), 0);

foo();

Promise.resolve().then(() => console.log("E"));

console.log("F");

//write the sequence of log of printed
