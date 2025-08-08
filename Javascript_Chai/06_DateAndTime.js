//Dates

let myDate = new Date();
console.log(myDate);                           //2025-08-07T13:24:16.861Z
console.log(typeof(myDate));                   //object
console.log(myDate.toString());                //Thu Aug 07 2025 18:54:58 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());            //Thu Aug 07 2025
console.log(myDate.toISOString());             //2025-08-07T13:26:09.422Z
console.log(myDate.toLocaleString());          //8/7/2025, 6:56:56 PM
console.log(myDate.toLocaleDateString());      //8/7/2025
console.log(myDate.toJSON());                  //2025-08-07T13:28:50.878Z

let myCreatedDate = new Date(2025, 9, 29);    //9 - oct (month start from 0 not 1)
console.log(myCreatedDate.toDateString());    //Wed Oct 29 2025

let myCreatedDate2 = new Date(2025, 9, 29, 5, 3);    //5 - hr, 3 - min
console.log(myCreatedDate2.toLocaleString());    //10/29/2025, 5:03:00 AM

let myCreatedDate3 = new Date("2025-10-29");    //YYYY / MM / DD
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("10-29-2025");    //MM / DD / YYYY
console.log(myCreatedDate4.toLocaleString());
console.log(myCreatedDate4.getTime());          //1761676200000

let myTimeStamp = Date.now();
console.log(myTimeStamp);                       //1754577372613

console.log(Math.floor(myTimeStamp / 1000));    //1754577474  (in sec not milliseconds)

let newDate = new Date();
console.log(newDate);                           //2025-08-07T14:39:37.801Z
console.log(newDate.getMonth() + 1);            //7  (month starts with 0 not 1) 
console.log(newDate.getDay());                  //4

newDate.toLocaleString('default', {             //customization
    weekday: "long",
    timeZone: "en-IN"
})