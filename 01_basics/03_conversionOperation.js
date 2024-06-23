let score = "33assads"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // output is NaN (Not a number)

// "33" => 33
// "33abc" or "Anshul"(any string which is not number) => NaN (Not a Number)
// true => 1; false => 0;


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "Anshul" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);

