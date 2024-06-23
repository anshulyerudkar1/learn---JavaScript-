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

// ********************************** Operations *************************************


let value = 3
let negValue = -value;
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);


let str1 = "Hello"
let str2 = " Anshul"
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2 );
console.log(1 + 2 + "2" );
console.log(3 + 4 * 5 % 3 );

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);

//link to study
// https://tc39.es/exma262/multipage/abstract-operations.html#sec-type-conversion
