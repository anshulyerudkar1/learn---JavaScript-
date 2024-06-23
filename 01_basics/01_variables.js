const accountId=142454
let accountEmail="ansh@a.com"
var accountPassword="142536"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountCity="Jaipur"

let accountState;
// Here accountStaste is not declared, when we print accountState then it is showning "undefined".


// accountId=2 //not allowed to change const value

accountEmail="ansh@ansh.com"
accountPassword="415298"
accountCity="Pune"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* Output
142454
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 142454          │
│ 1       │ 'ansh@ansh.com' │
│ 2       │ '415298'        │
│ 3       │ 'Pune'          │
│ 4       │ undefined       │
└─────────┴─────────────────┘
*/