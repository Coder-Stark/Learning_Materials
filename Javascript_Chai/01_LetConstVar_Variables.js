const accountId = 14553
let accountEmail = "Shivam@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;                        //undefined

// accountId = 2                    //declaration and updation not allowed
console.log(accountId);

accountEmail = "kumar@gmail.com"     //updatation allowed
accountPassword = "5678"
accountCity = "Delhi"

console.table([accountEmail, accountPassword, accountCity, accountState]);
/**
14553
┌─────────┬───────────────────┐
│ (index) │ Values            │
├─────────┼───────────────────┤
│ 0       │ 'kumar@gmail.com' │
│ 1       │ '5678'            │
│ 2       │ 'Delhi'           │
│ 3       │ undefined         │
└─────────┴───────────────────┘
 */


/*
Prefer not to use "var" because of issue of block scope and functional scope
*/
